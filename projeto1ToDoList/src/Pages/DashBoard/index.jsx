import React from "react";

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
            
            <article className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secundaria">
              <h3 className="text-gray-500 text-sm font-medium">Saldo Atual</h3>
              <p className="text-3xl font-bold text-texto mt-2">R$ 0,00</p>
            </article>

          </div>
        </div>
      </main>

    </section>
  );
}