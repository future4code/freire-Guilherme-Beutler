import { useState } from "react"
import { URL_BASE } from '../../Constants/URL_BASE'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToAdmHomePage } from '../../Router/Coordinator'
import Header from "../../Components/Header/Header";
import { Body, Button, CardBody, CssTextField } from "./style";


export default function LoginPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangePassword = (ev) => {
        setPassword(ev.target.value)
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }

        axios
            .post(`${URL_BASE}/login`, body)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                goToAdmHomePage(navigate)
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }


    return (
        <div>
            <Header />
            <Body>
                <CardBody>
                    <div>
                        <h3>Login</h3>
                    </div>
                    <CssTextField
                        id="outlined-basic"
                        label="E-mail"
                        type={'email'}
                        value={email}
                        onChange={onChangeEmail}
                        required
                    />
                    <CssTextField
                        id="outlined-basic"
                        label="Password"
                        type={'password'}
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                    <Button type={'submit'} onClick={onSubmitLogin}>Entrar</Button>
                </CardBody>
            </Body>
        </div>
    )
}