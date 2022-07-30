import React, { useState } from 'react';
import { KeyboardDoubleArrowUp } from '@mui/icons-material';
import { TopContainer } from './styled'

export default function BackToTop() {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <TopContainer>
            <KeyboardDoubleArrowUp onClick={scrollTop} />
        </TopContainer>
    )
}