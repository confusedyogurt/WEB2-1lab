import Image from "next/image";
import {
    CredentialsSignInButton,
    GoogleSignInButton,
} from "@/components/authButtons";
import React, { CSSProperties } from "react";

import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import { CredentialsForm } from "@/components/credentialsForm";
import { getCsrfToken } from "next-auth/react";

const pageStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "1rem",
    backgroundColor: "white",
};

const containerStyle: CSSProperties = {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
    padding: "2rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    background: '#f0f0f0',
    borderRadius: '1rem',
};

const headingStyle = {
    marginTop: "2rem",
    marginBottom: "1rem",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "black"
};

const orTextStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "1.5rem",
    color: "black"
};

export default async function SignInPage() {
    const session = await getServerSession(authConfig);

    console.log("Session: ", session);

    if (session) return redirect("/add-competition");

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <h1 style={headingStyle}>Sign In</h1>
                <GoogleSignInButton />
                <span style={orTextStyle}>Or</span>
                {/* <CredentialsSignInButton /> */}
                <CredentialsForm />
            </div>
        </div>
    );
}
