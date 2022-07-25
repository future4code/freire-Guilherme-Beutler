import { useEffect, useState } from "react";
import axios from "axios";

export default function useRequestData(initiaData, url) {
    const [data, setData] = useState(initiaData)

    useEffect(() => {
        axios
            .get(url, {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
                params: {
                    page: '1',
                    size: '10'
                }
            })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }, [])

    return (data)
}