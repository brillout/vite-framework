import React from "react";
import logo from "./logo.svg";
import "./PageWrapper.css";
import { Link } from "vite-framework/Link";

export { PageWrapper };

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Sidebar>
        <Logo />
        <Link className="navitem" href="/">
          Home
        </Link>
        <Link className="navitem" href="/about">
          About
        </Link>
      </Sidebar>
      <Content>{children}</Content>
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
        borderRight: "2px solid #eee",
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="page-content"
      style={{
        padding: 20,
        paddingBottom: 50,
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
