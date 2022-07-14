import useProtectedPage from "../../Hooks/useProtectedPage"
import { URL_BASE } from "../../Constants/URL_BASE"
import { useRequestData } from "../../Hooks/useRequestData"
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToTripDetails, logout } from "../../Router/Coordinator"

export default function AdminHomePage() {
    useProtectedPage()
    const navigate = useNavigate()
    const {id} = useParams()

    const tripList = useRequestData(`${URL_BASE}/trips`, {})

    const tripComponents = tripList.trips && tripList.trips.map((t) => {
        return <div onClick={() => goToTripDetails(navigate, t.id)} key={t.id}>
            <h3>{t.name}</h3>
        </div>
    })

    return (
        <div>
            <h1>Página do Adm</h1>
            <div>
                <button onClick={() => goToHome(navigate)}>Voltar</button>
                <button >Criar Viagem</button>
                <button onClick={() => logout(navigate)}>Logout</button>
            </div>
            {tripComponents && tripComponents.length > 0 ? tripComponents : <p>Carregando...</p>}
        </div>
    )
}