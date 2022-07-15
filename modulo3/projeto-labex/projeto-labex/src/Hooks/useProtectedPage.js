import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";
import { goToHome } from "../Router/Coordinator";

export default function useProtectedPage () {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            goToHome(navigate)
        }
    }, [navigate])
}