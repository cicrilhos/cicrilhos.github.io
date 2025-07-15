import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginBox,
  LoginHeader,
  LogoInline,
  Title,
  Form,
  Label,
  Input,
  TipoUsuario,
  RadioLabel,
  Button,
} from "./style"; // Importa os styled-components

export default function Login() {
  const [tipoUsuario, setTipoUsuario] = useState("cliente");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (tipoUsuario === "admin") {
      navigate("/admin");
    } else {
      navigate("/cliente"); // Certifique-se de ter uma rota para /cliente
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LoginHeader>
          <LogoInline src="/otica-maletzke.png" alt="Logo da Ótica Maletzke" />
          <Title>Login - Ótica Digital</Title>
        </LoginHeader>
        <Form onSubmit={handleLogin}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label htmlFor="senha">Senha</Label>
          <Input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <TipoUsuario>
            <RadioLabel>
              <input
                type="radio"
                name="tipo"
                value="cliente"
                checked={tipoUsuario === "cliente"}
                onChange={() => setTipoUsuario("cliente")}
              />
              Cliente
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="tipo"
                value="admin"
                checked={tipoUsuario === "admin"}
                onChange={() => setTipoUsuario("admin")}
              />
              Funcionário
            </RadioLabel>
          </TipoUsuario>
          <Button type="submit">Entrar</Button>
        </Form>
      </LoginBox>
    </LoginContainer>
  );
}
