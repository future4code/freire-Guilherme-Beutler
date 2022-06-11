import React from "react"
import styled from "styled-components";
import img from "./img/imgbackground.jpg"

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const SectionTwo = styled.div`
  height: 75vh;
  width: 50vh;
  border: 1px solid black;
  display: flex;
  padding: 20px 20px;
  background-image: url(${img});
`
const Filds = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 10px;
  gap: 5px;
`
const BalloonMessage = styled.div`
margin-bottom: 2em;
padding: 0.9em 0.8em;
border-radius: 0.5em;
font-weight: 450;
line-height: 1.3;
box-shadow: 0px 3px 3px 0px rgba(243, 240, 240, 0.521);
color: white;

background-color: ${props => {
    if (props.tipo === "eu") {
      return "#005C53"
    } else if (props.tipo === "outro") {
      return "#4B4952"
    }
  }};

align-self:  ${props => {
    if (props.tipo === "eu") {
      return "flex-end"
    } else {
      return "flex-start"
    }
  }};
`
const NameContain = styled.div`
  color: #9AAC8C;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0.2em;
`
const Input = styled.input`
  height: 3vh;
  border-radius: 15px;
  text-align: center;
`

class App extends React.Component {
  state = {
    chat: [],
    valueInputUserName: "",
    valueInputUserMessage: "",
  };

  createMessage = () => {
    const newMessage = {
      user: this.state.valueInputUserName,
      message: this.state.valueInputUserMessage
    }
    const newMessages = [...this.state.chat, newMessage];
    this.setState({ chat: newMessages });
    this.setState({ valueInputUserName: "" });
    this.setState({ valueInputUserMessage: "" })
  };

  onChangeInputUser = (event) => {
    this.setState({ valueInputUserName: event.target.value });
  };

  onChangeInputMessage = (event) => {
    this.setState({ valueInputUserMessage: event.target.value });
  };

  render() {
    const listChat = this.state.chat.map((user) => {
      if (user.user === "eu") {
        return (
          <BalloonMessage tipo={'eu'}>{user.message}</BalloonMessage>
        )
      } else {
        return (
          <BalloonMessage tipo={'outro'}>
            <NameContain>{user.user}</NameContain>
            <div>{user.message}</div>
          </BalloonMessage>
        )
      }

    })

    return (
      <body>
        <Main>
          <header>
            <h1>Welcome to WhatsLab</h1>
          </header>
          <SectionTwo>
            <div>
              {listChat}
            </div>
            <Filds>
              <div>
                <div >
                  <Input class="input-one"
                    value={this.state.valueInputUserName}
                    onChange={this.onChangeInputUser}
                    placeholder={"Usuário"}
                  />
                </div>
              </div>
              <div>
                <Input class="input-two"
                  value={this.state.valueInputUserMessage}
                  onChange={this.onChangeInputMessage}
                  placeholder={"Mensagem"}
                />
              </div>
              <div>
                <button onClick={this.createMessage}>Enviar</button>
              </div>
            </Filds>
          </SectionTwo>
        </Main>
      </body>
    );
  }
}
export default App;
