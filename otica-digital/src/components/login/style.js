import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f1f5f9;
  font-family: sans-serif;
`;

export const LoginBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 620px;
  height: 620px;
  box-sizing: border-box;
`;

export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const LogoInline = styled.img`
  width: 150px;
  height: auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #0f172a;
`;

export const Form = styled.form`
  /* Adicione estilos de formulário aqui se necessário */
`;

export const Label = styled.label`
  display: block;
  margin: 0.5rem 0 0.2rem;
  color: #334155;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 1.1rem;
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

export const TipoUsuario = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1.5rem 0;
  font-size: 1.1rem;
`;

export const RadioLabel = styled.label`
  input[type="radio"] {
    margin-right: 0.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1.1rem;
  padding: 1rem;
  border: none;
  background-color: #0ea5e9;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0284c7;
  }
`;
