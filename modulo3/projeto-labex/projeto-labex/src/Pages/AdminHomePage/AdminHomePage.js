import useProtectedPage from "../../Hooks/useProtectedPage"
import { URL_BASE } from "../../Constants/URL_BASE"
import { useRequestData } from "../../Hooks/useRequestData"
import { useNavigate, useParams } from 'react-router-dom'
import {
    goToHome,
    goToTripDetails,
    logout,
    goToCreateTrip
} from "../../Router/Coordinator"
import Header from '../../Components/Header/Header'
import { Body, CardBody, Button, ButtonDiv, Trips } from "./style"
import Delete from '../../Img/Delete.png'
import axios from "axios"

export default function AdminHomePage() {
    useProtectedPage()
    const navigate = useNavigate()
    const { id } = useParams()
    const tripList = useRequestData(`${URL_BASE}/trips`, {})

    const buttonDelete = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta viagem?")) {
            axios
                .delete(`${URL_BASE}/trips/${id}`, {
                    headers: {
                        auth: localStorage.getItem('token')
                    }
                })
                .then(() => {
                    alert("Viagem deletada com sucesso!")
                })
                .catch((err) => {
                    alert("Não foi possível apagar a viagem!")
                    console.log(err.response.data.message)
                })
        }
    }

    const tripComponents = tripList.trips && tripList.trips.map((t) => {
        return <Trips key={t.id}>
            <h3 onClick={() => goToTripDetails(navigate, t.id)} >{t.name}</h3>
            <img onClick={() => buttonDelete(t.id)} src={Delete} />
        </Trips>
    })

    return (
        <div>
            <Header />
            <Body>
                <CardBody>
                    <h3>Página do Adm</h3>
                    <ButtonDiv>
                        <Button onClick={() => goToHome(navigate)}>Voltar</Button>
                        <Button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</Button>
                        <Button onClick={() => logout(navigate)}>Logout</Button>
                    </ButtonDiv>
                    {tripComponents && tripComponents.length > 0 ? tripComponents : <p>Carregando...</p>}
                </CardBody>
            </Body>
        </div>
    )
}