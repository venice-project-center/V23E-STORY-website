resource "aws_lambda_function" "writeFile" {
  function_name = "write_to_bucket"
  runtime = "nodejs20.x"
  handler = "index.handler"
  role          = aws_iam_role.lambda_execution_role.arn
  filename = data.archive_file.writeFileZip.output_path
  source_code_hash = filebase64sha256(data.archive_file.writeFileZip.output_path)
  environment {
    variables = {
      bucket = aws_s3_bucket.vpcFileBucket.bucket
    }
  }
}

resource "aws_lambda_permission" "apigw_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.writeFile.function_name
  principal     = "apigateway.amazonaws.com"

  # More: http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html
  #source_arn = "arn:aws:execute-api:${var.aws_region}:${data.aws_caller_identity..account_id}:${aws_api_gateway_rest_api.vpc_file_api.id}/*/${aws_api_gateway_method.files_get_method.http_method}${aws_api_gateway_resource.vpc_file_resource.path}"
}

data "archive_file" "writeFileZip" {
  type = "zip"
  source_dir = "lambdas/wirteFileLambda"
  output_path = "bin/writeFileLambda.zip"
}


resource "aws_iam_role" "lambda_execution_role" {
  name = "vpclambdaExecutionroll"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "sts:AssumeRole",
    "Principal": {
      "Service": "lambda.amazonaws.com"
    }
  }]
}
EOF
}

resource "aws_iam_policy" "lambda_policy" {
  name = "lambda_s3_execution_policy"
  description = "IAM policy for Lambda to access S3"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl"
      ],
      "Resource":[
        "${aws_s3_bucket.vpcFileBucket.arn}",
        "${aws_s3_bucket.vpcFileBucket.arn}/*"
    ]
    }
  ]
}
EOF
}

resource "aws_iam_policy" "function_logging_policy" {
  name   = "function-logging-policy"
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        Action : [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        Effect : "Allow",
        Resource : "arn:aws:logs:*:*:*"
      }
    ]
  })
}


resource "aws_iam_role_policy_attachment" "handler_lambda_policy" {
  role       = aws_iam_role.lambda_execution_role.name
  policy_arn = aws_iam_policy.lambda_policy.arn
}
resource "aws_iam_role_policy_attachment" "function_logging_policy_attachment" {
  role = aws_iam_role.lambda_execution_role.id
  policy_arn = aws_iam_policy.function_logging_policy.arn
}
resource "aws_cloudwatch_log_group" "function_log_group" {
  name              = "/aws/lambda/${aws_lambda_function.writeFile.function_name}"
  retention_in_days = 7
  lifecycle {
    prevent_destroy = false
  }
}