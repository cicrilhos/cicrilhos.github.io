import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header"; // Importa o Header comum
import {
  Pagina,
  Conteudo,
  BtnVoltar,
  Title,
  Form,
  Input,
  Button,
} from "./style"; // Importa os styled-components

export default function EmployeeRegistration() {
  const navigate = useNavigate();

  return (
    <Pagina>
      <Header />
      <Conteudo>
        <BtnVoltar onClick={() => navigate("/admin")}>← Voltar</BtnVoltar>
        <Title>Cadastrar Funcionário</Title>
        <Form>
          <Input type="text" placeholder="Nome do Funcionário" />
          <Input type="email" placeholder="Email" />
          <Button type="submit">Salvar</Button>
        </Form>
      </Conteudo>
    </Pagina>
  );
}
