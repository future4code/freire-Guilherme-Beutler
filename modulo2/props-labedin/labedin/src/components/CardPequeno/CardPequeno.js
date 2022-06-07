import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;
`

const ImgSmallCard = styled.img`
    width: 40px;
    margin-right: 10px;
`



function CardPequeno(props) {
    return (
        <SmallCard>
            <ImgSmallCard src={ props.imagem } />
            <div>
                <h4>{ props.email }</h4>
                <h4>{ props.adress }</h4>
            </div>
        </SmallCard>
    )
}

export default CardPequeno;