import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClientRegistration from "./components/cliente/index";
import Maintenance from "./components/manutencao/index";
import AdminPanel from "./components/painel/index";
import ProductRegistration from "./components/produto/index";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
          <Route path="/admin/clientes" element={<ClientRegistration />} />
          <Route path="/admin/manutencoes" element={<Maintenance />} />
          <Route path="/admin/produtos" element={<ProductRegistration />} />
        </Routes>
      </Router>
  );
};

export default App;
