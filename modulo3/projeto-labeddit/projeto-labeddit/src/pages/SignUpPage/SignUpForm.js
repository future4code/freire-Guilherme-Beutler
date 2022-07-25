import React from "react";
import TextField from '@mui/material/TextField';
import { Body, ButtonOne, DivInput } from './styled'
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {

    const [form, onChange, clear] = useForm({ username: '', email: '', password: '' })
    const navigate = useNavigate()

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        signUp(form, clear, navigate)
    }

    return (
        <div>
            <Body>
                <DivInput>
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            label="Nome"
                            variant="outlined"
                            name={'username'}
                            value={form.username}
                            onChange={onChange}
                            margin={'normal'}
                            required
                        />
                        <TextField
                            label="E-mail"
                            variant="outlined"
                            name={'email'}
                            value={form.email}
                            onChange={onChange}
                            margin={'normal'}
                            required
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            type="password"
                            name={'password'}
                            value={form.password}
                            onChange={onChange}
                            margin={'normal'}
                            required
                        />
                        <ButtonOne
                            type={'submit'}
                        >
                            Cadastrar
                        </ButtonOne>
                    </form>
                </DivInput>
            </Body>
        </div>
    )
}