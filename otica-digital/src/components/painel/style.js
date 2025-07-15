import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa Link para usar em styled-components

export const PainelContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
  color: #0f172a;
  min-height: 90vh;
`;

export const PainelHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoHeader = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 1.5rem; // Ajuste o tamanho do título se necessário
`;

export const BtnLogout = styled(Link)` // Usa Link do react-router-dom
  background-color: #ef4444;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
  text-decoration: none; // Remove sublinhado padrão do link

  &:hover {
    background-color: #b91c1c;
  }
`;

export const ConteudoPrincipal = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
`;

export const MenuCentralizado = styled.div`
  text-align: center;
`;

export const MenuTitle = styled.h2`
  font-size: 1.8rem; // Ajuste o tamanho do título do menu
`;

export const BotoesMenu = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BotaoLink = styled(Link)` // Usa Link do react-router-dom
  background-color: #0ea5e9;
  border: none;
  color: white;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  min-width: 180px;
  text-decoration: none; // Remove sublinhado padrão do link
  display: flex; // Para centralizar o texto verticalmente
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #0284c7;
  }
`;
