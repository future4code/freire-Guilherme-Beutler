import React from "react";
import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import tinder from '../../img/tinder.png'
import MatchCard from "../Match/MatchCard";

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
`

export default function HeaderCard(props) {
    return (
        <Header>
            <IconButton>
                <PersonIcon />
            </IconButton>            
            <img src={tinder} alt='tinder logo'/>
            <IconButton>
                <ForumIcon />
            </IconButton>
        </Header>
    )
}