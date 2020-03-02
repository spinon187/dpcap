import React from 'react';
import styled from 'styled-components';
import cta from '../img/cta.svg';
import {green, white, gray} from './Colors';

const Landing = props => {
  return(
    <LandingBox>
      <img src={cta} alt='Join the DPCAP!' className='cta'/>
      <div>
      	<h1>Why Dallas Needs a Radical Climate Plan</h1>
      	<br />
      	<h2>How We Got Here</h2>
      	<p>
      	In 2019, the City of Dallas hired AECOM to write a climate action plan to be passed by Earth Day 2020. Since then, members of the Dallas People’s Climate Action Plan (DPCAP) coalition have been following the development of the Comprehensive Environmental & Climate Action Plan (CECAP). 
      	</p>
      	<br />
		<p>
		What we’ve found is that the CECAP is not a good climate plan. It was developed behind closed doors, with big business stakeholders, and without meaningful public interaction. The CECAP proposes lukewarm reforms in a protracted time period that prioritizes protecting the profits of businesses over addressing climate change. It doesn’t even meet its own emission reduction goals, much less the goals set forth by the Intergovernmental Panel on Climate Change (IPCC) to avoid 1.5 degrees Celsius of warming. Read more about why the CECAP is not enough here.
		</p>
		<br />
		<p>
		In light of the City considering to pass the CECAP in April, the DPCAP coalition has been developing our own climate plan that we will use to convince Dallas City Council to consider more radical and equitable actions.
		</p>
		<br />

      </div>
    </LandingBox>
  )
}

const LandingBox = styled.div`
  width: 98vw;
  img {
    width: 100%
  }
    padding: 2rem;
  background: ${green};
  color: ${white};
  .indent {
    padding-right: 1.5rem;
    @media(max-width: 640px){
      padding-right: .75rem;
    }
  }
  font-size: 1.2rem;
  @media(max-width: 640px){
    font-size: 1rem;
    line-height: 1.4rem;
    padding: 1rem;
  }
  line-height: 2rem;
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    @media(max-width: 640px){
      font-size: 1.6rem;
    }
  }
  h3 {
    text-align: center;
    color: ${gray};
    font-size: 1rem;
    font-style: italic;
  }
  h2 {
    font-weight: bold;
    padding: 1rem 0;
    font-size: 1.4rem;
  }
  .sub {
    display: flex;
  }
  .subsub {
    padding-right: 2rem;
    @media(max-width: 640px){
      padding-right: .7rem;
    }
  }
`

export default Landing;