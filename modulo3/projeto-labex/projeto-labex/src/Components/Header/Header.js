import React from "react";
import LogoSmall from '../../Img/LogoSmall.png';
import User from '../../Img/User.png';
import Home from '../../Img/Home.png';
import { Logo, ContainerHeader, Nav } from './style';
import { useNavigate } from 'react-router-dom';
import { goToHome, goToLogin } from "../../Router/Coordinator";



export default function Header() {
    const navigate = useNavigate();
    return (
        <ContainerHeader>
            <Logo onClick={() => goToHome(navigate)} alt="Logo Empresa" src={LogoSmall} />
            <Nav>
            <img onClick={() => goToHome(navigate)} alt="icon home" src={Home} />
            <img onClick={() => goToLogin(navigate)} alt="icon login" src={User} />
            </Nav>
        </ContainerHeader >
    )
}