import React from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import "../styles/CadastrarCliente.css";

export default function CadastrarCliente() {
  return (
    <div className="pagina">
      <Header />
      <main className="conteudo">
        <Link to="/admin" className="btn-voltar">← Voltar</Link>
        <h2>Cadastrar Cliente</h2>
        <form>
          <input type="text" placeholder="Nome do Cliente" />
          <input type="email" placeholder="Email" />
          <button type="submit">Salvar</button>
        </form>
      </main>
    </div>
  );
}
