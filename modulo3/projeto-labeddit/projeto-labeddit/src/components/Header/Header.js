import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import Logo from '../../assets/img/logo.png'
import { DivHeader } from './styled'
import { useNavigate } from 'react-router-dom';
import { goToLoginPage, goToFeedPage } from '../../routes/Coordinator';

export default function Header() {  
  const navigate = useNavigate()

  let postId = window.location.pathname + '/' + window.location.search

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
        window.location.pathname !== '/' ?
          <DivHeader>
            <ClearIcon onClick={() => goToFeedPage(navigate)}/>
            <img src={Logo} />
            <p onClick={() => logout()}>Logout</p>
          </DivHeader> : ''
      }
    </div>
  )
}