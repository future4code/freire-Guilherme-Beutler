import React from "react";
import LogoSmall from '../../Img/LogoSmall.png'
import User from '../../Img/User.png'
import {Logo, ContainerHeader} from './style'


export default function Header() {
    return (
        <ContainerHeader>
            <Logo src={LogoSmall}/>
            <img src={User}/>
        </ContainerHeader >
    )
}