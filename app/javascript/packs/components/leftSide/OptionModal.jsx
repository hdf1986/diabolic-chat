import React, { Component } from 'react';
import styled from 'styled-components';

const OptionModalContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  background: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  > div{
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 350px;
    width: 100%;
    max-width: 700px;
    color: black;
  }

`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 32px;
  color: black;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;




class OptionModal extends Component {
  constructor(){
    super();
    // this.state = {option : "hidden"}
    // this.optionModal = this.optionModal.bind(this);
  }
  changeDarkTheme = () =>{
    console.log("hola");
  }

  render() {
    return (
      <OptionModalContainer>
        <div>
          <CloseButton className="hola">
            ×
          </CloseButton>
          <h2>
            Change theme:
          </h2>
          <button onClick={this.changeDarkTheme}>
            Dark theme
          </button>
        </div>

      </OptionModalContainer>
    );
  }

}

export default OptionModal;
