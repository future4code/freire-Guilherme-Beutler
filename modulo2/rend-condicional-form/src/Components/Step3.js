import React from "react";
import styled from "styled-components";





const BodyFormTree = styled.p`
  text-align: left;
`
const FormTree= styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
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

function Step3() {
  return (
    <BodyFormTree>
      <h1>Informações de Ensino</h1>
      <FormTree>
        <label>
          <p>Por que não terminou a graduação?</p>
          <Input type="text" placeholder="Descreva" />
        </label>
        <label>
          <p>Você fez algum curso complementar?</p>
          <Select id="complementary-course">
            <option value="A">Nenhum</option>
            <option value="B">Curso Técnico</option>
            <option value="C">Curso de Inglês</option>
          </Select>
        </label>
      </FormTree>
    </BodyFormTree>
  );
}

export default Step3;