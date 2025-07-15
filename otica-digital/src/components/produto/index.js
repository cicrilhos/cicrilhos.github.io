import React from "react";
import Header from "../Common/Header"; // Importa o Header comum
import { Pagina, Conteudo, BtnVoltar, Title, Form, Input, Button } from "./style"; // Importa os styled-components

export default function ProductRegistration() {
  return (
    <Pagina>
      <Header />
      <Conteudo>
        <BtnVoltar to="/admin">← Voltar</BtnVoltar>
        <Title>Cadastrar Produto</Title>
        <Form>
          <Input type="text" placeholder="Nome do Produto" />
          <Input type="number" placeholder="Preço" />
          <Button type="submit">Salvar</Button>
        </Form>
      </Conteudo>
    </Pagina>
  );
}
