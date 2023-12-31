variable "aws_region" {
  description = "the region for aws resources"
  type = string
  default = "us-east-1"
}

variable "versel_token" {
  description = "versel api token"
}

variable "DATABASE_URL" {
  description = "database url"
}

variable "NEXTAUTH_SECRET" {
  description = "json web token sighning key"
}
variable "PLANETSCALE_TOKEN" {
  description = "a planetscale developer token"
}
variable "PLANETSCALE_TOKEN_ID" {
  description = "a planetscale developer token id"
}

variable "PLANETSCALE_ORG" {

}

variable "GOOGLE_ID" {
  description = "google oauth id"
}
variable "GOOGLE_SECRET" {
  description = "google oauth secret"
}

variable "aws_access_key_id" {}

variable "aws_secret_access_key" {}
