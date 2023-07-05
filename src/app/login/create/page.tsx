"use client"
import {useRouter} from "next/navigation";
import React from "react";
import {Maintainer} from "@prisma/client";

export default async function Page() {
    const router = useRouter();

    let maintainerListRequest = await fetch(     "/auth/list", {
        method:"GET"
    });
    let maintainerList:Maintainer[] = await maintainerListRequest.json();

    // @ts-ignore I don't like that I have to do this, but it's the easiest way
    const handleSub = async (event) => {
        event.preventDefault();
        // @ts-ignore
        await fetch("/api/auth/create", {
            method: "POST",
            body: JSON.stringify({
                username:event.target.username.value,
                password:event.target.password.value
            })
        })
        //TODO let them know if they are authenticated or not
        await router.push("/")
    }
    return(
        <div>
            <form onSubmit={handleSub}>
                <label htmlFor="username">Think</label>
                <label className={"text-white"}>username</label>
                <input className={"text-black"} type="text" id="username" name="username" required />
                <label className={"text-white"}>password</label>
                <input className={"text-black"} type="password" id="password" name="password" required />
                <button className={"text-white"} type="submit">Submit</button>
            </form>
            <div>
                {maintainerList.map((maintainer) => {
                  return(  <div>
                        <h1>
                            {maintainer.id}
                        </h1>
                      <h1>
                          {maintainer.username}
                      </h1>
                    </div>)
                })}
            </div>
        </div>
    )
}