import axios from "axios";
import { BASE_URL } from '../constants/urls'

export const createPost = (body, clear, setLoading) => {
    setLoading(true)
    const token = localStorage.getItem("token");
    axios
        .post(`${BASE_URL}/posts`,
            body,
            {
                headers: {
                    Authorization: token
                }
            })
        .then((response) => {
            alert(response.data)
            clear()
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            clear()
            setLoading(false)
        })
}