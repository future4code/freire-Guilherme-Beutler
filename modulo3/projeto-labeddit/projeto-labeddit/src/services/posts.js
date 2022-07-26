import axios from "axios";
import { BASE_URL } from '../constants/urls'

export const createPost = (body, clear) => {
    axios
        .post(`${BASE_URL}/posts`,
            body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
        .then((response) => {
            alert(response.data)
            clear()
        })
        .catch((error) => {
            console.log(error)
            clear()
        })
}