export default function ButtonSubmit({TextButton}) {
    function NavigateButton({anchor}) {
      // Função para navegar para a página de dashboard 
      //usarei react-router-dom para navegar para a página de dashboard
    }

    return (
        <button type="submit" onClick={NavigateButton} className="bg-black text-white">
            {TextButton}
        </button>
    )
}

