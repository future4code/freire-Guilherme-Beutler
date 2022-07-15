import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        axios
            .get(url, {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => alert(err.response.data.message))
    }, [url])

    return data
}
