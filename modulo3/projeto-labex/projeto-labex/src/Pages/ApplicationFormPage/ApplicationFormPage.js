import React from "react"
import { useRequestData } from "../../Hooks/useRequestData"
import useForm from "../../Hooks/useForm"
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { URL_BASE } from "../../Constants/URL_BASE"
import Countries from "./Countries"
import { goToListTripPage } from '../../Router/Coordinator'
import Header from "../../Components/Header/Header"
import {Body, CardBody, CssTextField, Inputs, Button, Select} from './style'




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
            <Header />
            <Body>
            <CardBody>
            <form onSubmit={formSubmit}>
                <h3>Formulário de inscrição</h3>
                <Inputs>
                <CssTextField
                    id="outlined-basic"
                    label="Nome Completo"
                    type="text"
                    name="name"
                    value={form.name}
                    required
                    onChange={inputChange}
                />
                <CssTextField
                    id="outlined-basic"
                    label="Idade"
                    type="number"
                    name="age"
                    value={form.age}
                    required
                    onChange={inputChange}
                />
                <CssTextField
                    id="outlined-basic"
                    label="Texto Candidatura"
                    type="text"
                    name="applicationText"
                    value={form.applicationText}
                    required
                    onChange={inputChange}
                />
                <CssTextField
                    id="outlined-basic"
                    label="Profissão"
                    type="text"
                    name="profession"
                    value={form.profession}
                    required
                    onChange={inputChange}
                />
                <Select
                    name='country'
                    onChange={inputChange}
                    value={form.country}
                    required
                >
                    <option value=''>
                        Escolha o país
                    </option>
                    <Countries />
                </Select>
                <Select
                    name='trip'
                    onChange={inputChange}
                    value={form.trip}
                    required
                >
                    <option value=''>Escolha a viagem</option>
                    {tripsOptions}
                </Select>
                <br></br>
                </Inputs>
                <div>
                    <Button onClick={() => goToListTripPage(navigate)}>Voltar</Button>
                    <Button type={"submit"}>Enviar</Button>
                </div>
            </form>
            </CardBody>
            </Body>
        </div>
    )
}