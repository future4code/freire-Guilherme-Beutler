import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToFeedPage } from '../routes/Coordinator';

export const login = (body, clear, navigate, setLoading) => {
    setLoading(true)
    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            clear()
            setLoading(false)
            goToFeedPage(navigate)
        })
        .catch((error) => {
            console.log(error.response.data.message)
            alert('Erro no login')
            setLoading(false)
        })
}

export const signUp = (body, clear, navigate) => {
    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            clear()
            alert('Usuário cadastrado com sucesso')
            goToFeedPage(navigate)
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}