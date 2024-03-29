import React from "react"
import useProtectedPage from "../../Hooks/useProtectedPage"
import { useNavigate } from "react-router-dom"
import useForm from "../../Hooks/useForm"
import { planets } from './Planets'
import { goToAdmHomePage } from '../../Router/Coordinator'
import axios from "axios"
import { URL_BASE } from "../../Constants/URL_BASE"
import Header from '../../Components/Header/Header'
import { Body, CardBody, ButtonDiv, Button, Input, Form, Select } from "./style"


export default function CreateTripPage() {
    useProtectedPage()
    const navigate = useNavigate()
    const today = new Date().toISOString().split("T")[0]
    const { form, onChange } = useForm({ name: '', planet: '', date: '', description: '', durationInDays: '' })
    const inputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const createTrip = (e) => {
        e.preventDefault()
        const token = window.localStorage.getItem("token")
        const [year, month, day] = form.date.split("-")

        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": `${day}/${month}/${year.substring(2, 4)}`,
            "description": form.description,
            "durationInDays": form.durationInDays
        }
        axios.post(`${URL_BASE}/trips`, body, {
            headers: {
                auth: token
            }
        })
            .then(() => {
                alert("Viagem cadastrada com sucesso!")
                goToAdmHomePage(navigate)
            })
            .catch((err) => {
                alert("Não foi possível criar a viagem. Verifique se as informações estão corretas.")
                window.location.reload()
            })
    }


    return (
        <div>
            <Header />
            <Body>
                <CardBody>
                    <h3>Criar Viagem</h3>
                    <Form onSubmit={createTrip}>
                        <Input
                            placeholder='Nome'
                            name='name'
                            value={form.name}
                            onChange={inputChange}
                            pattern={"^.{5,}$"}
                            title={"O nome da viagem deve ter no mínimo 5 caracteres"}
                            required
                        />
                        <Select
                            placeholder='Planeta'
                            name='planet'
                            defaultValue={""}
                            onChange={inputChange}
                            required
                        >
                            <option value={""} disabled>Escolha um Planeta</option>
                            {planets.map((planet) => {
                                return <option value={planet} key={planet}>{planet}</option>
                            })}
                        </Select>
                        <Input
                            placeholder='Data'
                            type='date'
                            name='date'
                            value={form.date}
                            onChange={inputChange}
                            required
                            min={today}
                        />
                        <Input
                            placeholder='Descrição'
                            name='description'
                            value={form.description}
                            onChange={inputChange}
                            required
                            pattern={"^.{30,}$"}
                            title={"O nome deve ter no mínimo 30 caracteres"}
                        />
                        <Input
                            placeholder='Duração em dias'
                            type='number'
                            name='durationInDays'
                            value={form.durationInDays}
                            onChange={inputChange}
                            required
                            min={50}
                        />
                        <ButtonDiv>
                            <Button onClick={() => goToAdmHomePage(navigate)}>Voltar</Button>
                            <Button type={'submit'}>Criar</Button>
                        </ButtonDiv>
                    </Form>
                </CardBody>
            </Body>
        </div>
    )
}