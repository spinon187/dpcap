import React from 'react';
import styled from 'styled-components';
import ctav1 from '../img/ctav1.svg';

const Landing = props => {
  return(
    <LandingBox>
      <img src={ctav1} alt='Join the DPCAP!' className='cta'/>
    </LandingBox>
  )
}

const LandingBox = styled.div`
  img {
    width: 100%
  }
`

export default Landing;