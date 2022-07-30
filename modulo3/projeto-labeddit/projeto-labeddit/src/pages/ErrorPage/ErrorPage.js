import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToFeedPage } from '../../routes/Coordinator';
import { Body } from './styled'

export default function ErrorPage() {
    const navigate = useNavigate()

    return (
        <Body>
            <h3>Error</h3>
            <h1>404</h1>
            <h3>Page not found</h3>
            <button onClick={() => goToFeedPage(navigate)}>Voltar</button>
        </Body>
    )
}