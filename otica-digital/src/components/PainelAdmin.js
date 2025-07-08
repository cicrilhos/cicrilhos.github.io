import React from "react";
import { Link } from "react-router-dom";
import "../styles/PainelAdmin.css";

export default function PainelAdmin() {
  return (
    <div className="painel-container">
      <header className="painel-header">
        <div className="header-left">
          <img
            src="/otica-maletzke.png"
            alt="Logo da Ótica Maletzke"
            className="logo-header"
          />
          <h1>Painel do Admin - Ótica Digital</h1>
        </div>
        <Link to="/" className="btn-logout" title="Logout">Sair</Link>
      </header>

      <main className="conteudo-principal">
        <div className="menu-centralizado">
          <h2>Bem-vindo ao Painel</h2>
          <div className="botoes-menu">
            <Link to="/admin/manutencoes" className="botao-link">Manutenções</Link>
            <Link to="/admin/clientes" className="botao-link">Cadastrar Cliente</Link>
            <Link to="/admin/funcionarios" className="botao-link">Cadastrar Funcionário</Link>
            <Link to="/admin/produtos" className="botao-link">Cadastrar Produto</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
