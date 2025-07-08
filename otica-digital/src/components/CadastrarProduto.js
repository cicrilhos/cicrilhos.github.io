import React from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import "../styles/CadastrarProduto.css";

export default function CadastrarProduto() {
  return (
    <div className="pagina">
      <Header />
      <main className="conteudo">
        <Link to="/admin" className="btn-voltar">← Voltar</Link>
        <h2>Cadastrar Produto</h2>
        <form>
          <input type="text" placeholder="Nome do Produto" />
          <input type="number" placeholder="Preço" />
          <button type="submit">Salvar</button>
        </form>
      </main>
    </div>
  );
}
