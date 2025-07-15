import styled from "styled-components";
import { Link } from "react-router-dom";

export const Pagina = styled.div`
  font-family: sans-serif;
  min-height: 100vh; // Garante que a página ocupe a altura total
  display: flex;
  flex-direction: column;
`;

export const Conteudo = styled.main`
  padding: 2rem;
  flex-grow: 1; // Permite que o conteúdo ocupe o espaço restante
`;

export const BtnVoltar = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #0284c7;
  font-weight: bold;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0f172a;
`;

// Se houver formulários ou inputs genéricos aqui, defina-os
// export const Form = styled.form`...`;
// export const Input = styled.input`...`;
// export const Button = styled.button`...`;
