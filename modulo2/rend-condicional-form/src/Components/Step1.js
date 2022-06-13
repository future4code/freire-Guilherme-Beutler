import React from "react";
import styled from "styled-components";





const BodyFormOne = styled.p`
  text-align: left;
`
const FormOne = styled.div`
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
const Select = styled.select`
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

function Step1() {
  return (
    <BodyFormOne>
      <h1>Dados Gerais</h1>
      <FormOne>
        <label>
          <p>Nome</p>
          <Input
            type="text"
            nome="name"
            id="name"
            placeholder="Nome"
          />
        </label>
        <label>
          <p>Idade</p>
          <Input
            type="text"
            nome="age"
            id="age"
            placeholder="Idade"
          />
        </label>
        <label>
          <p>E-mail</p>
          <Input
            type="text"
            nome="Email"
            id="Email"
            placeholder="Email"
          />
        </label>
        <label>
          <p>Escolaridade</p>
          <Select id="schooling">
            <option value="A">Ensino Médio Incompleto</option>
            <option value="B">Ensino Médio Completo</option>
            <option value="C">Ensino Superior Incompleto</option>
            <option value="D">Ensino Superior Completo</option>
          </Select>
        </label>
      </FormOne>
    </BodyFormOne>
  );
}

export default Step1;