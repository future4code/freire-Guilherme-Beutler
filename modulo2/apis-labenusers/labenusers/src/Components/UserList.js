import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerList = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  width:30%;
  margin: 0 auto;
  padding: 24px;
  gap: 5px;
`

class UserList extends React.Component {
    state = {
        users: [],
    }

    componentDidMount = () => {
        this.searchUser();
    };

    searchUser = () => {
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

    deletUser = (userId) => {
        if (window.confirm("Do you want to delete this user?")) {
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
                headers: {
                    Authorization: "guilherme-beutler-freire"
                }
            }).then((response) => {
                this.serchUser()
            }).catch((error) => {
                console.log(error.data)
            })
        }
    };

    render() {
        return(
            <div>
                <ContainerList>
                    <h3>Registered Users</h3>
                    <div>
                        {this.state.users.length === 0 && <p>Loading users</p>}
                        {this.state.users.map(user => {
                            return <p key={user.id}>{user.name}<button onClick={() => this.deletUser(user.id)}>x</button></p>;
                        })}
                    </div>
                </ContainerList>
            </div>
        )
    }







}
export default UserList;


