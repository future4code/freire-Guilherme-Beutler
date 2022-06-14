import React from "react";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Step4 from "./Components/Step4";
import styled from "styled-components";


const BodyForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#141e30, #243b55);
  color: white;
`
const Button = styled.div`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid rgba(10, 180, 180, 1);
  border-radius: 10px;
  &:hover {
    animation: pulsate 1s ease-in-out;
  }
  @keyframes pulsate {
    0%{
      box-shadow: 0 0 25px #5DDCFF, 0 0 50px #4E00C2;
    }
  }

`

export default class App extends React.Component {

  state = {
    step: 1,
  };

  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step4 />;
    }
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 })
  }

  render() {

    let page;
    if (this.state.step === 1) {
      page = <Step1 />
    } else if (this.state.step === 2) {
      page = <Step2 />
    } else if (this.state.step === 3) {
      page = <Step3 />
    } else {
      page = <Step4 />
    }

    return (
      <BodyForm>
        {this.renderStep()}
        {this.state.step < 4 ? (
          <p>
            <Button
              onClick={this.nextStep}>Próxima Etapa</Button>
          </p>)
          : ""
        }
      </BodyForm>
    );
  }
}

