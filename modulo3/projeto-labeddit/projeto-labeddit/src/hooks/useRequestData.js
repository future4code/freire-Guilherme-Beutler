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
            })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (data)
}