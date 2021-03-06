import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import ConversationList from './ConversationList';

const Header = styled.nav`
  height: 100vh;
  flex: 0 1 250px;
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
  background: ${props => props.theme.color1};
  > h2{
    margin: 5px 0 15px 15px;
    font-size: 0.75em;
  }
`;



class MenuLeft extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentConversationId: props.currentConversationId || -1
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      currentConversationId: props.currentConversationId || -1
    })
  }

  changingTheme = () =>{
    if (this.props.changeTheme) {
      this.props.changeTheme()
    }
  }

  render() {
    return (
      <Header>
        <HeaderTop changeTheme = {this.changingTheme} />

        <h2>
          My conversations
        </h2>

        <ConversationList currentConversationId={this.state.currentConversationId}/>

      </Header>
    );
  }

}

export default MenuLeft;
