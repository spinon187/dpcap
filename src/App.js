import React, {Component} from 'react';
// import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs'
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
        <header>
          <div>
            <h1>DPCAP</h1>
            <h2>Dallas People's Climate Action Plan</h2>
          </div>
          <Nav />
        </header>
        
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
  min-width: 98vw;
  // min-height: 90rem;
  // max-height: 100vh;
  @media(max-width: 640px){
    max-width: 640px
  }
  font-family: 'Source Sans Pro', sans-serif;
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 2rem;
    margin: auto;
    background-color: ${white};
    color: ${green};
    padding: 3rem;
    padding-bottom: 0;
    h1 {
      font-weight: bold;
      font-size: 2.4rem;
      letter-spacing: .3rem;
      @media(max-width: 640px){
        font-size: 1.8rem;
      }
    }
    h2 {
      font-size: 1.8rem;
      letter-spacing: .25rem;
      @media(max-width: 640px){
        font-size: 1.4rem;
      }
    }
    nav {
      width: 35%;
      font-size: 1rem;
      @media(max-width: 640px){
        width: 100%;
      }
    }
    @media(max-width: 640px){
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      padding-bottom: 0;
    }
  }
  .body-box{
    margin: auto;
    display: flex;
    min-height: 100vh;
    overflow-y: hidden;
    flex-direction: column;
    // align-items: center;
    padding-top: 1rem;    
    // z-index: -1;
    @media(max-width: 640px){
      max-width: 640px;
      min-width: 98.7vw;
      padding-top: 0;
    }
  }
`
