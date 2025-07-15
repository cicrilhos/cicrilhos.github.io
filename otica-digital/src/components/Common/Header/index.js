import React from "react";
import { HeaderContainer, Logo, Nav } from "./style"; // Importa os styled-components
export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/otica-maletzke.png" alt="Logo da Ótica Maletzke" />
      <Nav>
        {/* Adicione links de navegação se necessário */}
      </Nav>
    </HeaderContainer>
  );
}
