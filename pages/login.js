import React from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <button onClick={() => signIn("google")} style={buttonStyle}>
        Sign in with Google
      </button>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#4285F4",
  color: "white",
  border: "none",
  borderRadius: "5px",
};
