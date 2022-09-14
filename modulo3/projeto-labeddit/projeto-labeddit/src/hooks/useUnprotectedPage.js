import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { goToFeedPage, goToPostPage } from '../routes/Coordinator';


export default function useProtectedPage() {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToFeedPage(navigate)
        }
    }, [navigate])
}