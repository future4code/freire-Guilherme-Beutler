import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
// import check from '../img/check.png'

const ContainerUser = styled.div`
color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:30%;
  margin: 0 auto;
  padding: 24px;
  gap: 5px;
`
const Button = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
  color: #fff;
  background-color: #202231;
  text-decoration: none;
  padding: 10px 10px;
  border: 2px solid rgba(10, 180, 180, 1);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    animation: pulsate 1s ease-in-out;
  }
  @keyframes pulsate {
    0%{
      box-shadow: 0 0 25px #5DDCFF, 0 0 50px #4E00C2;
    }
  }
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
        
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: 'guilherme-beutler-freire'
            }
        }).then((resposta) => {
            alert('User registered successfully!')
            this.setState({inputNameUser:"", inputEmailUser:""})
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
                <Button onClick={this.registerUser}>Save</Button>
            </ContainerUser>
        );
    };







}
export default CreateUser;