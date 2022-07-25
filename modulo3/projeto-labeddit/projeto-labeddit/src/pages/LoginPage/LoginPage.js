import React from "react";
import Logo from '../../assets/img/logo.png'
import { Body, UpBody, DivButtons, ButtonTwo } from './styled'
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/Coordinator";
import useUnprotectedPage  from '../../hooks/useUnprotectedPage'

export default function LoginPage() {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <div>
            <Body>
                <UpBody>
                    <img src={Logo} />
                    <h2>LabEddit</h2>
                    <p>O projeto de rede social da Labenu</p>
                </UpBody>
                <LoginForm />
                <DivButtons>
                    <ButtonTwo
                        onClick={() => goToSignUpPage(navigate)}
                    >
                        Crie uma conta!
                    </ButtonTwo>
                </DivButtons>
            </Body>
        </div>
    )
}