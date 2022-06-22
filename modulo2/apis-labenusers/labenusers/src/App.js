import React from 'react';
import styled from 'styled-components';
import CreateUser from './Components/CreateUser';
import UserDetail from './Components/UserDetail';
import UserList from './Components/UserList';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #202231;
  color: $fff;

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
const Buttons = styled.div`

`

class App extends React.Component {

  state = {
    render: 'create-user',
  };

  renderCreateUser = () => {
    this.setState({ render: 'create-user' })
  };

  renderUserList = () => {
    this.setState({ render: 'user-list' })
  };

  renderUserDetail = () => {
    this.setState({ render: 'user-detail' })
  }

  render() {
    const render = () => {
      switch (this.state.render) {
        case 'create-user':
          return <CreateUser />
        case 'user-list':
          return <UserList />
        case 'user-detail':
          return <UserDetail />
      }
    }
    return (
      <ContainerApp>
        <div>
          <Button onClick={this.renderCreateUser}>Create User</Button>
          <Button onClick={this.renderUserList}>User List</Button>
          <Button onClick={this.renderUserDetail}>User Details</Button>
        </div>
        {render()}
      </ContainerApp>
    )

  }

}

export default App;
