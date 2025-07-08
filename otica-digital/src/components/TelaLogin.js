import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // IMPORTANTE
import "../styles/TelaLogin.css";

export default function TelaLogin() {
  const [tipoUsuario, setTipoUsuario] = useState("cliente");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate(); // HOOK PARA NAVEGAR

  const handleLogin = (e) => {
    e.preventDefault();

    // Simplesmente redireciona baseado no tipo do usuário
    if (tipoUsuario === "admin") {
      navigate("/admin");
    } else {
      navigate("/cliente");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img
            src="/otica-maletzke.png"
            alt="Logo da Ótica Maletzke"
            className="logo-inline"
          />
          <h2>Login - Ótica Digital</h2>
        </div>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <div className="tipo-usuario">
            <label>
              <input
                type="radio"
                name="tipo"
                value="cliente"
                checked={tipoUsuario === "cliente"}
                onChange={() => setTipoUsuario("cliente")}
              />
              Cliente
            </label>
            <label>
              <input
                type="radio"
                name="tipo"
                value="admin"
                checked={tipoUsuario === "admin"}
                onChange={() => setTipoUsuario("admin")}
              />
              Funcionário
            </label>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
