import { useNavigate, useParams } from 'react-router-dom'
import { URL_BASE } from '../../Constants/URL_BASE'
import useProtectedPage from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import axios from 'axios'
import Header from '../../Components/Header/Header'
import { goToAdmHomePage } from '../../Router/Coordinator'
import Back from '../../Img/Back.png'
import { 
    Body, 
    CardBody, 
    CardCandidate, 
    GridCandidates, 
    Approved, 
    Repproved, 
    Button, 
    ButtonDiv,
    Img 
} from './style'

export default function TripDetailsPage() {
    useProtectedPage()
    const navigate = useNavigate()
    const { id } = useParams()
    const trips = useRequestData(`${URL_BASE}/trip/${id}`, {})

    const candidates = trips && trips.trip && trips.trip.candidates.map((c) => {
        return <div key={c.id} candidate={c} tripId={id} />
    })

    const approveCandidate = (cadidateId) => {
        const token = window.localStorage.getItem('token')
        const body = {
            'approve': true
        }
        axios
            .put(`${URL_BASE}/trips/${id}/candidates/${cadidateId}/decide`, body, {
                headers: {
                    auth: token
                }
            })
            .then(() => {
                alert('Candidato aprovado com sucesso!')
                window.location.reload()
            })
            .catch(() => {
                alert('Não foi possível aprovar este candidato!')
            })
    }

    const disapproveCandidate = (cadidateId) => {
        const token = window.localStorage.getItem('token')
        const body = {
            'approve': false
        }
        axios
            .put(`${URL_BASE}/trips/${id}/candidates/${cadidateId}/decide`, body, {
                headers: {
                    auth: token
                }
            })
            .then(() => {
                alert('Candidato reprovado!')
                window.location.reload()
            })
            .catch(() => {
                alert('Não foi possível reprovar este candidato!')
            })
    }

    return (
        <div>
            <Header />
            <Body>
                <CardBody>
                    <Img onClick={() => goToAdmHomePage(navigate)}src={Back}/>

                    {trips && trips.trip && <h3>{trips.trip.name}</h3>}
                    
                    {trips && trips.trip && <div>
                        <p><b>Nome:</b> {trips.trip.name}</p>
                        <p><b>Descrição:</b> {trips.trip.description}</p>
                        <p><b>Planeta:</b> {trips.trip.planet}</p>
                        <p><b>Duração:</b> {trips.trip.durationInDays}</p>
                        <p><b>Data:</b> {trips.trip.date}</p>
                    </div>}
                    <div>
                        <h3>Candidatos</h3>
                        <GridCandidates>
                            <Approved>
                                <p>Aprovados</p>
                                {trips.approved && trips.approved.map((candidate) => {
                                    return (
                                        <CardCandidate key={candidate.id}>
                                            <p>Nome: {candidate.name}</p>
                                            <p>Idade: {candidate.age}</p>
                                            <p>Profissão: {candidate.profession}</p>
                                            <p>País: {candidate.country}</p>
                                            <p>{candidate.applicationText}</p>
                                        </CardCandidate>
                                    )

                                })}
                            </Approved>
                            <Repproved>
                                <p>Aguardando Autorização</p>

                                <div>
                                    {candidates && trips.trip.candidates.map((c) => {
                                        return (
                                            <CardCandidate key={c.id}>
                                                <p>Nome: {c.name}</p>
                                                <p>Idade: {c.age}</p>
                                                <p>Profissão: {c.profession}</p>
                                                <p>País: {c.country}</p>
                                                <p>{c.applicationText}</p>
                                                <ButtonDiv>
                                                    <Button onClick={() => approveCandidate(c.id)}>Aprovar</Button>
                                                    <Button onClick={() => disapproveCandidate(c.id)}>Reprovar</Button>
                                                </ButtonDiv>
                                            </CardCandidate>
                                        )
                                    })}
                                </div>
                            </Repproved>
                        </GridCandidates>
                    </div>
                </CardBody>
            </Body>
        </div>
    )
}