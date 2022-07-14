import { useNavigate, useParams } from 'react-router-dom'
import { URL_BASE } from '../../Constants/URL_BASE'
import useProtectedPage from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import { goToAdmHomePage } from '../../Router/Coordinator'
import axios from 'axios'
import Header from '../../Components/Header/Header'

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
            .put(`${URL_BASE}/trips/${id}/candidates/${cadidateId}`, body, {
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
            {trips && trips.trip && <h1>{trips.trip.name}</h1>}
            {trips && trips.trip && <div>
                <p><b>Nome:</b> {trips.trip.name}</p>
                <p><b>Descrição:</b> {trips.trip.description}</p>
                <p><b>Planeta:</b> {trips.trip.planet}</p>
                <p><b>Duração:</b> {trips.trip.durationInDays}</p>
                <p><b>Data:</b> {trips.trip.date}</p>
            </div>}
            <div>
                <h3>Candidatos</h3>
                <div>
                    <p>Aprovados</p>
                    <div>
                        {trips.approved && trips.approved.map((candidate) => {
                            return (
                                <div key={candidate.id}>
                                    <p>Nome: {candidate.name}</p>
                                    <p>Idade: {candidate.age}</p>
                                    <p>Profissão: {candidate.profession}</p>
                                    <p>País: {candidate.country}</p>
                                    <p>{candidate.applicationText}</p>
                                </div>
                            )
                            
                        })}
                        
                    </div>
                </div>
                <div>
                    <p>Aguardando Autorização</p>
                    <div>
                        {candidates && trips.trip.candidates.map((c) => {
                            return (
                                <div key={c.id}>
                                    <p>Nome: {c.name}</p>
                                    <p>Idade: {c.age}</p>
                                    <p>Profissão: {c.profession}</p>
                                    <p>País: {c.country}</p>
                                    <p>{c.applicationText}</p>
                                    <div>
                                        <button onClick={() => approveCandidate(c.id)}>Aprovar</button>
                                        <button onClick={() => disapproveCandidate(c.id)}>Reprovar</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}