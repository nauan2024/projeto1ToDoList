import React from "react";
import InputText from "../../components/InputText/index.jsx";
export default function Login() {
  return (
    
    <section>
      
        <div className="textlogin">
           <h1>
            Login
          </h1>
        
          <p>
            Bem-vindo de volta! Por favor, faça o login para continuar.
          </p>
        </div>
        
        <InputText placeholder="Digite seu e-mail" />
        <InputText placeholder="Digite sua senha"/>
       

        <a href="/dashboard">
          Login
        </a>

    </section>
  );
}