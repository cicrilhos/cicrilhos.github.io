import styled from "styled-components";

export const Pagina = styled.div`
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Conteudo = styled.main`
  padding: 2rem;
  flex-grow: 1;
`;

export const BtnVoltar = styled.a` // Mantido como 'a' pois usa onClick, não 'to'
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #0284c7;
  font-weight: bold;
  cursor: pointer; // Adicionado para indicar que é clicável
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #0f172a;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
`;

export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
`;

export const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 6px;
  background-color: #0ea5e9;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0284c7;
  }
`;
