import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerUser = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  width:30%;
  margin: 0 auto;
  padding: 24px;
  gap: 5px;
`

class CreateUser extends React.Component {
    state = {
        users: [],
        inputNameUser: '',
        inputEmailUser: '',
    };

    registerUser = () => {
        const body = {
            name: this.state.inputNameUser,
            email: this.state.inputEmailUser
        };
        this.setState.inputNameUser = '';

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: 'guilherme-beutler-freire'
            }
        }).then((resposta) => {
            console.log(resposta.data);
        }).catch((error) => {
            console.log(error.message);
        });
    };

    onChangeInputName = (event) => {
        this.setState({inputNameUser: event.target.value});
    };

    onChangeInputEmail = (event) => {
        this.setState({inputEmailUser: event.target.value});
    };

    render () {
        return (
            <ContainerUser>
                <h3>User Registration</h3>
                <label>Name: </label>
                <input 
                    placeholder='Inform your name'
                    value={this.state.inputNameUser}
                    onChange={this.onChangeInputName}
                />
                <label>E-mail: </label>
                <input 
                    placeholder='Inform your e-mail'
                    value={this.state.inputEmailUser}
                    onChange={this.onChangeInputEmail}
                />
                <button onClick={this.registerUser}>Save User</button>
            </ContainerUser>
        );
    };







}
export default CreateUser;