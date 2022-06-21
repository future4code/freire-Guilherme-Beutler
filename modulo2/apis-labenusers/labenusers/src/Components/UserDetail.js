import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const ContainerUserDetail = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  width:30%;
  margin: 0 auto;
  padding: 24px;
  gap: 5px;
`
const Users = styled.div`
    display: flex;
    justify-content: space-around;
`
const SectionUsers = styled.div`
   
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
          this.setState({users: response.data})
        }).catch(error => {
          console.log(error.data)
        })
    };
    
    deleteUser = (userId) => {
        if(window.confirm("Do you want to delete this user?")){
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
                headers: {
                    Authorization:"guilherme-beutler-freire"
                }
            }).then((response) => {
                this.searchAllUsers()
            }).catch((error) => {
                console.log(error.data)
            })
        }
    };

    renderDetail = () => {
        this.setState({render: !this.state.render})
    };

    render(){
        const userDetail = () => {
            if (this.state.render === true){
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
        return(
            <ContainerUserDetail>
                <div>
                    <h3>User Details</h3>
                    <SectionUsers>
                        {this.state.users.length === 0 && <p>Loading users</p>}
                        {this.state.users.map(user => {
                        return (
                            <Users key={user.id}>
                                <p onClick={this.renderDetail}>{user.name}</p> 
                                <button onClick={() => this.deleteUser(user.id)}>x</button>
                                {userDetail()}
                            </Users>)
                        })}
                    </SectionUsers>
                </div>  
            </ContainerUserDetail>
        )
    };
}

export default UserDetail