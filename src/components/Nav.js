import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {green, gray, white} from './Colors';

const Nav = props => {
  return(
    <NavBox>
      <NavLink exact to='/' activeClassName='activeNav'>Home</NavLink>
      <NavLink to='/about' activeClassName='activeNav'>About</NavLink>
      <NavLink to='/platform' activeClassName='activeNav'>Platform</NavLink>
      <NavLink to='/join' activeClassName='activeNav'>Join Us</NavLink>
    </NavBox>
  )
}

const NavBox = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: ${green};
  padding: 1rem 0;
  a {
    text-decoration: none;
    color: ${gray};
    font-family: 'Source Sans Pro', sans-serif;

  }
  .activeNav {
    color: ${white}
  }
`

export default Nav;