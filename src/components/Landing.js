import React from 'react';
import styled from 'styled-components';
import cta from '../img/cta.svg';

const Landing = props => {
  return(
    <LandingBox>
      <img src={cta} alt='Join the DPCAP!' className='cta'/>
    </LandingBox>
  )
}

const LandingBox = styled.div`
  width: 98vw;
  img {
    width: 100%
  }
`

export default Landing;