import React from "react";
import Logo from '../../assets/img/logo.png'
import { Body, UpBody } from './styled'
import SignUpForm from "./SignUpForm";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/Coordinator";
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

export default function SignUpPage() {
    useUnprotectedPage()
    const navigate = useNavigate()

    return (
        <div>
            <Body>
                <UpBody>
                    <h1>Olá, boas vindas ao LabEddit ;D</h1>
                </UpBody>
                <SignUpForm />
            </Body>
        </div>
    )
}