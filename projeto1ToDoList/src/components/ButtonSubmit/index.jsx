import { useNavigate } from 'react-router-dom';

export default function ButtonSubmit({ TextButton, anchor }) {
    const navigate = useNavigate(); 

    function handleNavigate() {
        navigate(anchor); 
    }

    return (
        <button 
            type="button" 
            onClick={handleNavigate}
            className="w-full bg-primaria hover:bg-black-700 text-white font-semibold py-3 px-4 rounded-lg"
        >
            {TextButton}
        </button>
    )
}