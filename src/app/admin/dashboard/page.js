"use client";

import React, { useState } from "react";
import CadastroImovel from "../components/CadastroImovel";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "cadastro":
        return <CadastroImovel />;
      default:
        return <div>Bem-vindo ao Dashboard!</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-white border-r-2">
        <div className="flex items-center justify-center h-20 border-b">
          <div className="text-2xl font-bold">Logo</div>
        </div>
        <nav className="mt-5">
          <a
            className="flex items-center p-2 text-blue-600 font-bold hover:bg-blue-100"
            onClick={() => setActiveComponent("dashboard")}
          >
            <span className="ml-2">Dashboard</span>
          </a>
          <a
            className="flex items-center p-2 text-blue-600 font-bold hover:bg-blue-100"
            onClick={() => setActiveComponent("cadastro")}
          >
            <span className="ml-2">Cadastrar Imóvel</span>
          </a>
        </nav>
      </div>

      <div className="flex-1 p-10">
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
}
