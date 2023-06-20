"use client";

import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
