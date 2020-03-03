import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {green, gray, white} from './Colors';

const Nav = props => {
  return(
    <NavBox>
      <NavLink exact to='/' activeClassName='activeNav'>HOME</NavLink>
      <NavLink to='/about' activeClassName='activeNav'>ABOUT</NavLink>
      <NavLink to='/platform' activeClassName='activeNav'>PLATFORM</NavLink>
      <NavLink to='/join' activeClassName='activeNav'>JOIN US</NavLink>
    </NavBox>
  )
}

const NavBox = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  // width: 35%;
  background-color: ${white};
  padding: 1rem 0;
  a {
    text-decoration: none;
    color: ${green};
    font-family: 'Source Sans Pro', sans-serif;
    &:hover {
      font-weight: bold;
    }
  }
  .activeNav {
    font-weight: bold;
  }
`

export default Nav;