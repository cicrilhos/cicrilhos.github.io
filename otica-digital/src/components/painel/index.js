import React from "react";
import {
  PainelContainer,
  PainelHeader,
  HeaderLeft,
  LogoHeader,
  Title,
  BtnLogout,
  ConteudoPrincipal,
  MenuCentralizado,
  MenuTitle,
  BotoesMenu,
  BotaoLink,
} from "./style"; // Importa os styled-components

export default function AdminPanel() {
  return (
    <PainelContainer>
      <PainelHeader>
        <HeaderLeft>
          <LogoHeader src="/otica-maletzke.png" alt="Logo da Ótica Maletzke" />
          <Title>Painel do Admin - Ótica Digital</Title>
        </HeaderLeft>
        <BtnLogout to="/" title="Logout">Sair</BtnLogout>
      </PainelHeader>

      <ConteudoPrincipal>
        <MenuCentralizado>
          <MenuTitle>Bem-vindo ao Painel</MenuTitle>
          <BotoesMenu>
            <BotaoLink to="/admin/manutencoes">Manutenções</BotaoLink>
            <BotaoLink to="/admin/clientes">Cadastrar Cliente</BotaoLink>
            <BotaoLink to="/admin/funcionarios">Cadastrar Funcionário</BotaoLink>
            <BotaoLink to="/admin/produtos">Cadastrar Produto</BotaoLink>
          </BotoesMenu>
        </MenuCentralizado>
      </ConteudoPrincipal>
    </PainelContainer>
  );
}
