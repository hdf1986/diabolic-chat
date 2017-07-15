import React from 'react'
import PropTypes from 'prop-types'
import MenuLeft from './leftSide/MenuLeft'
import MainChat from './MainChat'
import NotificationBar from './NotificationBar'
import styled, {ThemeProvider}  from 'styled-components';
import './notifications'
const MainContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

// changin my theme
const colorTheme = {
	color1: "#18192B",
	color2: "#1D1F34",
	color3: "#151424",
  color4: "#232345"
};
// changin my theme
const darkTheme = {
	color1: "black",
	color2: "red"
};

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUser: {
        id: -1
      }
    }
  }

  componentWillMount () { window.checkUser(this); }

  render () {
    return (
      <ThemeProvider theme={colorTheme}>
        <MainContainer>
          <NotificationBar/>
          <MenuLeft />
          <MainChat currentUser={this.state.currentUser}/>

        </MainContainer>
      </ThemeProvider>
    )
  }
};
