import React, {Component} from 'react';
// import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Platform from './components/Platform';
import Background from './components/Background';
import Join from './components/Join';
import styled from 'styled-components';
import {green, gray, white} from './components/Colors';
import { Route } from 'react-router-dom';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <AppBox>
        <header>Dallas People's Climate Action Plan</header>
        <Nav />
        <div className='body-box'>
          <Route exact path='/' component={Landing}/>
          <Route path='/platform' component={Platform} />
          <Route path='/join' component={Join} />
          <Route path='/about' component={Background} />
        </div>
      </AppBox>
    );
  }
}



const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  min-width: 98.7vw;
  min-height: 90rem;
  max-height: 100vh;
  @media(max-width: 640px){
    max-width: 640px
  }
  font-family: 'Source Sans Pro', sans-serif;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 2rem;
    text-align: center;
    margin: auto;
    background-color: ${green};
    color: ${white};
    padding: 1rem 0;
    @media(max-width: 640px){
      flex-direction: column;
      align-items: center;
      padding-left: 7%;
      padding-right: 7%;
    }
  }
  .body-box{
    max-width: 900px;
    min-width: 900px; //remember to fix
    margin: auto;
    display: flex;
    height: 90rem;
    min-height: 100vh;
    overflow-y: hidden;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    line-height: 4.5rem;
    font-size: 3.5rem;
    
    // z-index: -1;
    @media(max-width: 640px){
      max-width: 640px;
      min-width: 98.7vw;
    }
  }
`
