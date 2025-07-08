import React from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import "../styles/CadastrarFuncionario.css";

export default function CadastrarFuncionario() {
  return (
    <div className="pagina">
      <Header />
      <main className="conteudo">
        <Link to="/admin" className="btn-voltar">← Voltar</Link>
        <h2>Cadastrar Funcionário</h2>
        <form>
          <input type="text" placeholder="Nome do Funcionário" />
          <input type="email" placeholder="Email" />
          <button type="submit">Salvar</button>
        </form>
      </main>
    </div>
  );
}
