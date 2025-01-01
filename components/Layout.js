import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Responsive Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div style={containerStyle}>
        <header style={headerStyle}>News Dashboard</header>
        <main style={mainStyle}>{children}</main>
      </div>
    </>
  );
}

const containerStyle = { display: "flex", flexDirection: "column", height: "100vh" };
const headerStyle = { background: "#333", color: "white", padding: "10px 20px" };
const mainStyle = { flex: 1, padding: "20px", overflowY: "auto" };
