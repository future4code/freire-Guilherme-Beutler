import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerList = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:20%;
    margin: 0 auto;
    padding: 24px;
    gap: 5px;
`
const CardUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid rgba(10, 180, 180, 1);
    border-radius: 10px;
    width: 250px;
    margin: 10px;
    padding: 10px;
`
const Button = styled.button`
    display: inline-block;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #202231;
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

class UserList extends React.Component {
    state = {
        users: [],
    }

    componentDidMount = () => {
        this.getAllUser();
    };

    getAllUser = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "guilherme-beutler-freire"
            }
        }).then(response => {
            this.setState({ users: response.data })
        }).catch(error => {
            console.log(error.data)
        });
    };

    deleteUser = (userId) => {
        if (window.confirm("Do you want to delete this user?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
                headers: {
                    Authorization: "guilherme-beutler-freire"
                }
            }).then((response) => {
                this.getAllUser()
            }).catch((error) => {
                console.log(error.data)
            })
        }
    };

    render() {
        return (
            <div>
                <ContainerList>
                    <h3>Registered Users</h3>
                    <div>
                        {this.state.users.length === 0 && <p>Loading users</p>}
                        {this.state.users.map(user => {
                            return (
                                <CardUser key={user.id}>
                                    {user.name}
                                    <Button onClick={() => this.deleteUser(user.id)}>x</Button>
                                </CardUser>
                            );
                        })}
                    </div>
                </ContainerList>
            </div>
        )
    }
}
export default UserList;


