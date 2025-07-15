import React from "react";
import Header from "../Common/Header"; // Importa o Header comum
import { Pagina, Conteudo, BtnVoltar, Title, Form, Input, Button } from "./style"; // Importa os styled-components

export default function ClientRegistration() {
  return (
    <Pagina>
      <Header />
      <Conteudo>
        <BtnVoltar to="/admin">← Voltar</BtnVoltar>
        <Title>Cadastrar Cliente</Title>
        <Form>
          <Input type="text" placeholder="Nome do Cliente" />
          <Input type="email" placeholder="Email" />
          <Button type="submit">Salvar</Button>
        </Form>
      </Conteudo>
    </Pagina>
  );
}
