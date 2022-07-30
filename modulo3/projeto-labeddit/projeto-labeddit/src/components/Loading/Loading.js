import React from "react";
import { CircularProgress } from "@mui/material";
import { LoandingContainer } from "./styled";

export default function Loading() {
    return(
        <LoandingContainer>
            <CircularProgress color={'warning'}/>
        </LoandingContainer>
    )
}

