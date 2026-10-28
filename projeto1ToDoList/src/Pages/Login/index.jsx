import React from "react";
import InputText from "../../components/InputText/index.jsx";
import ButtonSubmit from "../../components/ButtonSubmit/index.jsx";
export default function Login() {
  return (
    
    <section className="align-center justify-center flex p-60">
      
     <div className="flex flex-col text-center align-center justify-center w-50 border-2 border-black p-2 rounded-[10px] gap-4" >
        <div className=" text-center flex flex-col gap-4" >
           <h1 className="text-2xl font-bold ">
            Login
          </h1>
        
          <p>
            Bem-vindo de volta! Por favor, faça o login para continuar.
          </p>
        </div>
        
        <InputText placeholder="Digite seu e-mail" className="border-2 border-black p-2 rounded-[10px]" />
        <InputText placeholder="Digite sua senha" className="border-2 border-black p-2 rounded-[10px]" />
       

        <ButtonSubmit TextButton="Login" />
      </div>
    </section>
  );
}