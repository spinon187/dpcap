import React, {Component} from 'react';
import './App.css';
import {Nav, Landing, Platform, Background, Join} from './components';
import styled from 'styled-components';
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
  .body-box{
    max-width: 900px;
    min-width: 900px; //remember to fix
    margin: auto;
    display: flex;
    height: 90rem;
    min-height: 100vh;
    overflow-y: hidden;
    // background-image: linear-gradient(to bottom right, #DEDEDE, #5F5F5F);
    // overflow-x: hidden;
    // border: 3px solid #5F5F5F;
    // border-radius: 12px;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
    line-height: 4.5rem;
    font-size: 3.5rem;
    color: white;
    font-family: 'Staatliches', cursive;
    // z-index: -1;
    @media(max-width: 640px){
      max-width: 640px;
      min-width: 98.7vw;
    }
  }
`
