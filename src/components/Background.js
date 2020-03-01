import React from 'react';
import styled from 'styled-components';
import {green, white, gray} from './Colors';

const Background = props => {
  return(
    <BackgroundBox>
    <h1> About Us</h1>
    <br />
    <h2>Who We Are</h2>
    <p>We are a coalition of like-minded local organizations who are concerned that the official climate action plan commissioned by the City of Dallas is not enough to address climate change in an adequate, equitable, and just way. The founding organizations of the coalition are: the Democratic Socialists of America North Texas Ecosocialist Working Group, Texas Campaign for the Environment, and the Dallas Sunrise Movement.
    </p>
    <br />
    <h2>Why Develop the DPCAP</h2>
    <p>
    We developed the Dallas People’s Climate Action Plan because the Comprehensive Environmental & Climate Action Plan (CECAP) was 1) developed behind closed doors with no public involvement, and 2) insufficient to address climate change on our city’s scale.
  	</p>
  	<br />
  	<h2>CECAP  was developed behind closed doors with no public involvement</h2>
  	<p>
  	We developed the Dallas People’s Climate Action Plan because the Comprehensive Environmental & Climate Action Plan (CECAP) was 1) developed behind closed doors with no public involvement, and 2) insufficient to address climate change on our city’s scale.

	CECAP was developed behind closed doors with no public involvement
	The CECAP website boasts that “staff met one-on-one with over 6,000 people and attained over 9,000 individual comments and suggestions for the plan”. These numbers sound impressive, but let’s put them into perspective. Dallas has a population of 1.341 million people (as of 2017). During the “public engagement process”, the City engaged with less than 0.5% of the population they represent about how climate change affects them. Members of the DSA North Texas Ecosocialist Working Group attended all community engagement meetings and found that meetings were not widely publicized nor well-attended (with an average of 20-30 people showing up in each meeting). The City originally scheduled 12 community meetings -- the effort put into outreach was so meager that community groups had to request 180 additional meetings. Is this how you want to be included in the democratic process?

	Lack of any meaningful public engagement aside, the developers of the CECAP overwhelmingly prioritized businesses interests over community advocacy groups, academic institutions, health organizations, and even government entities. This bias is evident in the composition of the Stakeholder Advisory Committee: 17 businesses were included in the stakeholders, compared to 12 advocacy/community groups, 3 university/colleges, 5 health organizations, and 3 government entities. In that list of 17 businesses in the Stakeholder Advisory Committee, 9 of those businesses (more than half) have a clear conflict of interest in the development of a climate plan. Those 9 businesses are:
	</p>
	<ol>
  		<li><p>Hunt Consolidated, Inc: Hunt Consolidated, Inc. is the one of the largest privately-held oil & gas companies in the United States.</p></li>
  		<li><p>JPMorgan Chase: JPMorgan Chase is the world’s largest financial backer of fossil fuel companies, and has invested $75 billion to fund fracking, pipeline projects, and Arctic oil and gas exploration since 2015.</p></li>
  		<li><p>American Airlines: American Airlines has been consistently rated as having one of the worst carbon footprints in a number of studies looking at global airline carbon emissions, as well as in response to the climate crisis.</p></li>
	</ol>
    </BackgroundBox>
  )
}

const BackgroundBox = styled.div`
  padding: 2rem;
  background: ${green};
  color: ${white};
  .indent {
    padding-right: 1.5rem;
    @media(max-width: 640px){
      padding-right: .75rem;
    }
  }
  font-size: 1.4rem;
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

export default Background;