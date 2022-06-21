import React from 'react';
import styled from 'styled-components';

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImgBigCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const ContainerH4 = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigCard>
            <ImgBigCard src={ props.imagem } />
            <div>
                <ContainerH4>{ props.nome }</ContainerH4>
                <p>{ props.descricao }</p>
            </div>
        </BigCard>
    )
}

export default CardGrande;