import React from 'react';
import styled from 'styled-components';
import CreateUser from './Components/CreateUser';
import UserDetail from './Components/UserDetail';
import UserList from './Components/UserList';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0px;
`

class App extends React.Component {

  state = {
    render: 'create-user',
  };

  renderCreateUser = () => {
    this.setState({render: 'create-user'})
  };

  renderUserList = () => {
    this.setState({render: 'user-list'})
  };

  renderUserDetail = () => {
    this.setState({render: 'user-detail'})
  }

  render () {
    const render = () => {
      switch(this.state.render) {
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
        <Button>
          <button onClick={this.renderCreateUser}>Create User</button>
          <button onClick={this.renderUserList}>User List</button>
          <button onClick={this.renderUserDetail}>User Details</button>
        </Button>
        {render()}
      </ContainerApp>
    )

  }

}

export default App;
