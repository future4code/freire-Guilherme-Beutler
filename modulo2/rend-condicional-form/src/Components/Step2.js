import React from "react";
import styled from "styled-components";





const BodyFormTwo = styled.p`
  text-align: left;
`
const FormTwo= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px;
  border: 1px solid rgba(10, 180, 180, 1);
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, .2);
  color: white;
  outline: none;
`

function Step2() {
    return (
      <BodyFormTwo>
        <h1>Informações do Ensino Superior</h1>
        <FormTwo>
          <label>
            <p>Qual curso?</p>
            <Input type="text" placeholder="Curso" />
          </label>
          <label>
            <p>Qual unidade de ensino?</p>
            <Input type="text" placeholder="Unidade" />
          </label>
        </FormTwo>
      </BodyFormTwo>
    );
  }
  
  export default Step2;