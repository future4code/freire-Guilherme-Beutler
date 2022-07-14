import React from "react"
import { useRequestData } from "../../Hooks/useRequestData"
import useForm from "../../Hooks/useForm"
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { URL_BASE } from "../../Constants/URL_BASE"
import Countries from "./Countries"




export default function ApplicationFormPage() {
    const navigate = useNavigate()
    const allTrips = useRequestData(`${URL_BASE}/trips`, {})
    const { form, onChange } = useForm({ name: '', age: '', applicationText: '', profession: '', country: '', trip: '' })


    const tripsOptions = allTrips.trips && allTrips.trips.map((t) => {
        return <option key={t.id} value={t.id}>{t.name}</option>
    })
    
    const inputChange = (ev) => {
        const { name, value } = ev.target
        onChange(name, value)
    }

    const formSubmit = (ev) => {
        ev.preventDefault()
        const body = {
            'name': form.name,
            'age': form.age,
            'applicationText': form.applicationText,
            'profession': form.profession,
            'country': form.country
        }

        Axios
            .post(`${URL_BASE}/trips/${form.trip}/apply`, body)
            .then(() => {
                alert('Inscrição realizada com sucesso, aguarde aprovação!')
                window.location.reload()
            })
            .catch((err) => {
                alert('Não foi possível se inscrever, verifique os campos preenchidos.')
            })
    }



    return (
        <div>
            <form onSubmit={formSubmit}>
                <h3>Formulário de inscrição</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Digite seu Nome Completo"
                    value={form.name}
                    required
                    onChange={inputChange}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Digite sua idade"
                    value={form.age}
                    required
                    onChange={inputChange}
                />
                <input
                    type="text"
                    name="applicationText"
                    placeholder="Por que merece ser selecionado?"
                    value={form.applicationText}
                    required
                    onChange={inputChange}
                />
                <input
                    type="text"
                    name="profession"
                    placeholder="Qual sua profissão?"
                    value={form.profession}
                    required
                    onChange={inputChange}
                />
                <select 
                    name='country'
                    onChange={inputChange}
                    value={form.country}
                    required
                >
                    <option value=''>
                        Escolha o país
                    </option>
                    <Countries />                
                </select>
                <select 
                    name='trip'
                    onChange={inputChange}
                    value={form.trip}
                    required
                >
                    <option value=''>Escolha a viagem</option>
                    {tripsOptions}
                </select>
                <br></br>
                <button type={"submit"}>Enviar</button>
            </form>
        </div>
    )
}