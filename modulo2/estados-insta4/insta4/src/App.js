import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovoPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  background-color: grey;
`
const Tituloh3 = styled.div`
  text-align: center;
  margin-bottom: 3vh;
`

const Header = styled.div`
  text-align: center;
`
const HeaderH2 = styled.h2`
  text-align: center;
`



class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'Mariana',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/201/150',
      },
      {
        nomeUsuario: 'Yandra',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/202/150',
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotosPosts: ""
  };

  criarPost = () => {
    const novoPost = {
      valorInputNomeUsuario: this.state.valorInputNomeUsuario,
      valorInputFotoUsuario: this.state.valorInputFotoUsuario,
      valorInputFotosPosts: this.state.valorInputFotosPosts
    };
    const novoPosts = [novoPost, ...this.state.post]
    this.setState({post: novoPosts})
    this.setState({valorInputNomeUsuario:"", valorInputFotoUsuario:"", valorInputFotosPosts:""})
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value});
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value});
  };

  onChangeInputFotosPosts = (event) => {
    this.setState({valorInputFotosPosts: event.target.value});
  };

  render() {
    const postUsuario = this.state.post.map((post => {
      return (
        <Post key={post.nomeUsuario} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost} />
      );
    }))
    return (
      <MainContainer>
        <Header>
          <HeaderH2>Insta4</HeaderH2>
        </Header>

        <NovoPost>
          <Tituloh3>Adicionar Post</Tituloh3>
          <input type="text"
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
          />

          <input type="text"
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link foto usuário"}
          />

          <input type="text"
            value={this.state.valorInputFotosPosts}
            onChange={this.onChangeInputFotosPosts}
            placeholder={"Link foto post"}
          />

          <button onClick={this.criaPost}>Criar Post</button>
        </NovoPost>


        <div>{postUsuario}</div>
      </MainContainer>
    )
  }
}

export default App;