import React, {Component} from 'react';
// import './App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
// import AboutUs from './components/AboutUs';
import Platform from './components/Platform';
import Background from './components/Background';
import Join from './components/Join';
import Events from './components/Events';
import styled from 'styled-components';
import {green, white} from './components/Colors';
import { Route } from 'react-router-dom';
import BurgerMenu from 'react-burger-menu'
import {NavLink} from 'react-router-dom';


export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentMenu: 'slide',
      		side: 'right'
		}
	}

	getMenu() {
		const Menu = BurgerMenu[this.state.currentMenu];

		return (
		  <Nav wait={20} side={this.state.side}>
		    <Menu id={this.state.currentMenu} outerContainerId={'outer-container'} right={this.state.side === 'right'}>
		      <NavLink exact to ='/' activeClassName='activeNav'>HOME</NavLink>
		      <NavLink exact to ='/about' activeClassName='activeNav'>ABOUT</NavLink>
		      <NavLink exact to ='/platform' activeClassName='activeNav'>PLATFORM</NavLink>
		      <NavLink exact to ='/join' activeClassName='activeNav'>JOIN US</NavLink>
		      <NavLink exact to ='/events' activeClassName='activeNav'>EVENTS</NavLink>
		    </Menu>
		  </Nav>
		);
	}

	render() {
		return (
		  <AppBox id="outer-container" style={{height: '100%'}}>
		    <header>
		      <div>
		        <h1>DPCAP</h1>
		        <h2>Dallas People's Climate Action Plan</h2>
		      </div>
		      <div className = "hamburgler">
		      	{this.getMenu()}
		      </div>
		    </header>
		    
		    <div className='body-box'>
		      <Route exact path='/' component={Landing}/>
		      <Route path='/platform' component={Platform} />
		      <Route path='/join' component={Join} />
		      <Route path='/about' component={Background} />
		      <Route path='/events' component={Events} />
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
    padding: 1.5rem 5rem 1.4rem;
    // padding-bottom: 0;
    h1 {
      font-weight: bold;
      font-size: 3.2rem;
      letter-spacing: .3rem;
      @media(max-width: 640px){
        font-size: 1.8rem;
      }
    }
    h2 {
      font-size: 2.4rem;
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
      // width: 100%;
      // min-width: 98.7vw;
      padding-top: 0;
    }
  }


.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`
