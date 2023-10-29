"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CredentialsFormProps {
  csrfToken?: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      router.push("/add-competition");
    } else {
      console.log("Error: ", signInResponse);
      setError("Your Email or Password is wrong!");
    }
  };

  return (
    <form
      style={{
        width: "100%",
        marginTop: "2rem",
        fontSize: "1.5rem",
        color: "black",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleSubmit}
    >
      {error && (
        <span
          style={{
            padding: "1rem",
            marginBottom: "0.5rem",
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "white",
            background: "red",
            borderRadius: "0.25rem",
          }}
        >
          {error}
        </span>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        style={{
          width: "100%",
          padding: "1rem",
          marginBottom: "1rem",
          border: "1px solid #ccc",
          borderRadius: "0.25rem",
          backgroundColor: "lightgray",
        }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        style={{
          width: "100%",
          padding: "1rem",
          marginBottom: "1rem",
          border: "1px solid #ccc",
          borderRadius: "0.25rem",
          backgroundColor: "lightgray",
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          height: "3rem",
          padding: "1rem",
          marginTop: "1rem",
          fontSize: "1rem",
          color: "white",
          transition: "background-color 0.15s",
          backgroundColor: "blue",
        }}
      >
        Log in
      </button>
    </form>
  );
}
