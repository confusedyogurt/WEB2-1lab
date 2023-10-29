"use client";

import Image from "next/image";
import googleLogo from "./../../public/google.png";
import { signIn } from "next-auth/react";

const buttonStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    justifyContent: "center",
    height: "3.5rem",
    padding: "1rem",
    fontSize: "1.5rem",
    transition: "background-color 0.3s",
    backgroundColor: "white",
    border: "2px solid lightgray",
    color: "black",
    borderRadius: "0.25rem",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
};

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
            <span style={{ marginLeft: "1rem" }}>Continue with Google</span>
        </button>
    );
}

export function CredentialsSignInButton() {
    const handleClick = () => {
        signIn();
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            <span style={{ marginLeft: "1rem" }}>Continue with Email</span>
        </button>
    );
}