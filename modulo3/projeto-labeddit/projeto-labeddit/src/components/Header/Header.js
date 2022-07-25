import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import Logo from '../../assets/img/logo.png'
import { DivHeader } from './styled'
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from '../../routes/Coordinator';


export default function Header() {  
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    goToLoginPage(navigate)
  }

   return (
    <div>
      {
        window.location.pathname === '/' ?
          <div></div> : ''
      }

      {
        window.location.pathname === '/sign' ?
          <DivHeader>
            <ClearIcon />
            <img src={Logo} />
            <p onClick={() => goToLoginPage(navigate)}>Entrar</p>
          </DivHeader> : ''
      }

      {
        window.location.pathname === '/feed' ?
          <DivHeader>
            <ClearIcon />
            <img src={Logo} />
            <p onClick={() => logout()}>Logout</p>
          </DivHeader> : ''
      }

      {
        window.location.pathname === '/post' ?
          <DivHeader>
            <ClearIcon />
            <img src={Logo} />
            <p>Logout</p>
          </DivHeader> : ''
      }
    </div>
  )
}