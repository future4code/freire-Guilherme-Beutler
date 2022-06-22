import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerUserDetail = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:20%;
    margin: 0 auto;
    padding: 24px;
    gap: 5px;
`
const Users = styled.div`
    display: flex;
    justify-content: space-around;
    border: 2px solid rgba(10, 180, 180, 1);
    border-radius: 10px;
    width: 250px;
    margin: 10px;
    padding: 10px;
`
const UsersButton = styled.button`
    /* display: inline-block;
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
  } */
`

class UserDetail extends React.Component {
    state = {
        users: [],
        render: false,
        userDetail: {}
    }

    componentDidMount = () => {
        this.searchAllUsers();
    };

    searchAllUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "guilherme-beutler-freire"
            }
        }).then(response => {
            this.setState({ users: response.data })
        }).catch(error => {
            console.log(error.data)
        })
    };

    deleteUser = (userId) => {
        if (window.confirm("Do you want to delete this user?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
                headers: {
                    Authorization: "guilherme-beutler-freire"
                }
            }).then((response) => {
                this.searchAllUsers()
            }).catch((error) => {
                console.log(error.data)
            })
        }
    };

    renderDetail = () => {
        this.setState({ render: !this.state.render })
    };

    render() {
        const userDetail = () => {
            if (this.state.render === true) {
                return (
                    <div>
                        <div>Nome: {this.state.userDetail.name}</div>
                        <div>Email: {this.state.userDetail.email}</div>
                    </div>
                )
            } else {
                return <div></div>
            }
        }
        return (
            <ContainerUserDetail>
                
                    <h3>User Details</h3>
                    
                        {this.state.users.length === 0 && <p>Loading users</p>}
                        {this.state.users.map(user => {
                            return (
                                <Users key={user.id}>
                                    {user.name}
                                    <button onClick={() => this.deleteUser(user.id)}>x</button>
                                    <button onClick={this.renderDetail}>Detail</button>
                                    {userDetail()}
                                </Users>)
                        })}
                    
                
            </ContainerUserDetail>
        )
    };
}

export default UserDetail