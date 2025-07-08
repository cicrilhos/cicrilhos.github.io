import React from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import "../styles/Manutencoes.css";

export default function Manutencoes() {
  return (
    <div className="pagina">
      <Header />
      <main className="conteudo">
        <Link to="/admin" className="btn-voltar">← Voltar</Link>
        <h2>Manutenções</h2>
        <p>(Conteúdo das manutenções aqui)</p>
      </main>
    </div>
  );
}
