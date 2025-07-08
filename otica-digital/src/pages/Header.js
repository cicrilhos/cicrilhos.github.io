// === /src/components/Header.js ===
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="painel-header">
      <div className="header-left">
        <img
          src="/otica-maletzke.png"
          alt="Logo da Ótica Maletzke"
          className="logo-header"
        />
        <h1>Ótica Digital - Painel do Admin</h1>
      </div>
      <Link to="/" className="btn-logout">Sair</Link>
    </header>
  );
}