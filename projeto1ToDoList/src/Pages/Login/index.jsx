import React from "react";
export default function Login() {
  return (
    // Fundo azul que ocupa a tela toda (h-screen) e centraliza o conteúdo
    <section className="min-h-screen flex items-center justify-center bg-blue-500">
      
      {/* Caixa branca com cantos arredondados e sombra */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center">
        
        {/* Título grande, negrito e vermelho */}
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Tailwind Funcionou! 🎉
        </h1>
        
        {/* Texto descritivo em cinzento */}
        <p className="text-gray-700 text-lg mb-6">
          Se o ecrã estiver azul, esta caixa branca e o título vermelho, a configuração foi um sucesso absoluto.
        </p>

        {/* Botão de teste */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300">
          Começar o Sistema
        </button>
      </div>

    </section>
  );
}