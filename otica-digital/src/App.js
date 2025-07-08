import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TelaLogin from "./components/TelaLogin";
import PainelAdmin from "./components/PainelAdmin";
import Manutencoes from "./components/Manutencoes";
import CadastrarCliente from "./components/CadastrarCliente";
import CadastrarFuncionario from "./components/CadastrarFuncionario";
import CadastrarProduto from "./components/CadastrarProduto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/admin" element={<PainelAdmin />} />
        <Route path="/admin/manutencoes" element={<Manutencoes />} />
        <Route path="/admin/clientes" element={<CadastrarCliente />} />
        <Route path="/admin/funcionarios" element={<CadastrarFuncionario />} />
        <Route path="/admin/produtos" element={<CadastrarProduto />} />
        {/* Aqui você pode adicionar outras rotas para clientes, etc */}
      </Routes>
    </Router>
  );
}

export default App;
