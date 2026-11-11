import React from "react";
import Card_Dashboard from "../../components/Card_Dashboard/index.jsx";
export default function Dashboard() {
  return (
    <section className="min-h-screen flex flex-col bg-fundo">
      
      <header className="bg-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primaria">Meu Sistema Financeiro</h1>
        <div className="text-texto font-medium">Bem-vindo, camarada</div>
      </header>

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-texto mb-6">Resumo Geral</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card_Dashboard title="Saldo Total" value="Tarefa 1" borderColor="border-green-500" />
            <Card_Dashboard title="Receitas" value="tarefa 2" borderColor="border-blue-500" />
            <Card_Dashboard title="Despesas" value="tarefa 3" borderColor="border-red-500" />

          </div>
        </div>
      </main>

    </section>
  );
}