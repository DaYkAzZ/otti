"use client";
import React from "react";
import { signIn } from "next-auth/react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn("google")}>Se connecter avec Google</button>
    </div>
  );
}
