import React from "react";
import Header from "../Common/Header"; // Importa o Header comum
import { Pagina, Conteudo, BtnVoltar, Title } from "./style"; // Importa os styled-components

export default function Maintenance() {
  return (
    <Pagina>
      <Header />
      <Conteudo>
        <BtnVoltar to="/admin">← Voltar</BtnVoltar>
        <Title>Manutenções</Title>
        <p>(Conteúdo das manutenções aqui)</p>
      </Conteudo>
    </Pagina>
  );
}
