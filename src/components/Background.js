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
  	<h2>1. CECAP  was developed behind closed doors with no public involvement</h2>
  	<p>
	The CECAP website boasts that “staff met one-on-one with over 6,000 people and attained over 9,000 individual comments and suggestions for the plan”. These numbers sound impressive, but let’s put them into perspective. Dallas has a population of 1.341 million people (as of 2017). During the “public engagement process”, the City engaged with less than 0.5% of the population they represent about how climate change affects them. Members of the DSA North Texas Ecosocialist Working Group attended all community engagement meetings and found that meetings were not widely publicized nor well-attended (with an average of 20-30 people showing up in each meeting). The City originally scheduled 12 community meetings -- the effort put into outreach was so meager that community groups had to request 180 additional meetings. Is this how you want to be included in the democratic process?
	</p>
	<br />
	<p>
	Lack of any meaningful public engagement aside, the developers of the CECAP overwhelmingly prioritized businesses interests over community advocacy groups, academic institutions, health organizations, and even government entities. This bias is evident in the composition of the Stakeholder Advisory Committee: 17 businesses were included in the stakeholders, compared to 12 advocacy/community groups, 3 university/colleges, 5 health organizations, and 3 government entities. In that list of 17 businesses in the Stakeholder Advisory Committee, 8 of those businesses (about half) have a clear conflict of interest in the development of a climate plan. Those 8 businesses are:
	</p>
	<br />
	<ol className="lista">
  		<li><p>1. Hunt Consolidated, Inc: Hunt Consolidated, Inc. is the one of the largest privately-held oil & gas companies in the United States.</p></li>
  		<br />
  		<li><p>2. JPMorgan Chase: JPMorgan Chase is the world’s largest financial backer of fossil fuel companies, and has invested $75 billion to fund fracking, pipeline projects, and Arctic oil and gas exploration since 2015.</p></li>
  		<br />
  		<li><p>3. American Airlines: American Airlines has been consistently rated as having one of the worst carbon footprints in a number of studies looking at global airline carbon emissions, as well as in response to the climate crisis.</p></li>
		<br />
		<li><p>4. Southwest Airlines: Flying is one of the most carbon-intensive ways to travel. </p></li>
		<br />
		<li><p>5. Toyota Motors North America: Toyota has invested $500 million in Uber. Private vehicle manufacturing interests are in opposition to the development of a robust public transportation system.</p></li>
		<br />
		<li><p>6. Apartment Association of Greater Dallas </p></li>
		<br />
		<li><p>7. Options Real Estate: Real estate firms take advantage of climate change actions to push out low-income communities and gentrify their land after public entities clean up toxic waste sites and unhealthy conditions. </p></li>
		<br />
		<li><p>8.Oncor: Oncor has a monopoly on power distribution in Dallas.</p></li>
	</ol>
	<br />
	<p>The Stakeholder Advisory Committee has held 5 meetings to discuss their interests in the CECAP. Why do the businesses with clear conflicts of interest have a bigger voice than you when it comes to climate change?</p>
    <br />
    <h2>2. The CECAP is insufficient to address climate change on our city’s scale</h2>
    <br />
    
    <p>The Intergovernmental Panel on Climate Change (IPCC) urges reduction in CO2 emissions by 45% in 2030 and to achieve net zero by 2050, which the City and AECOM have agreed are their ultimate goals for  the CECAP. However, the IPCC notes that “even if this is achieved, temperatures would only be expected to remain below the 1.5°C threshold if the actual geophysical response ends up being towards the low end of the currently estimated uncertainty range.” Dallas needs a climate action plan that aims to get us to net-zero as soon as possible. </p>
    <br />
    <p>The implementation of CECAP actions will result in “reductions of GHG emissions by 18 percent in 2030 and 65 percent by 2050.” Why should we accept a climate plan that doesn’t meet its own goals?</p>
    <br />
    <p>While the CECAP has some good points, it ultimately is a plan for the City to shirk its responsibility to address climate change. First, the majority of CECAP proposed actions refuse to call for hard action (e.g. passing binding legislation and hard-coding sustainable practices), preferring instead to “encourage”, “incentivize”, and “promote” climate action that ultimately relies on the good-will of profit-seeking private interests for implementation. Soft language like this shifts climate responsibility to residents -- putting a stop to environmentally harmful practices is “out of the City’s hands”, because it’s up to people to make the right, “green” choice.</p>
    <br />
    <p>If the City does not believe it has the responsibility to protect its own residents from cancer caused by an abandoned electroplating facility, asthma caused by particulate matter from concrete batch plants, a literal mountain of shingles leaching toxic chemicals into the groundwater… If the City systematically approves businesses that harm its residents, what is its purpose?</p>
    <br />
    <p>This unmasks yet another telling aspect of the CECAP: actions push public-private partnerships that allow private businesses to make a fortune breaking up essential public services and selling residents “green” goods and services that ultimately do not reduce our unsustainable consumption habits. Take for example, the CECAP’s transportation section.</p>
    <br />
    <p>Transportation is the 2nd largest contributor of GHG emissions in Dallas. The CECAP proposes to address this by pushing Electric Vehicle (EV) usage and integrate private ride-sharing companies to our public transportation infrastructure. </p>
    <br />
    <p>However, emissions from transportation are most efficiently and equitably reduced with robust, accessible public transportation, not by forcing working class people of Dallas to buy new, expensive private vehicles, and certainly not by selling off bits and pieces of our public transportation to the highest bidder.</p>
    <br />
    <p>Inequality in car ownership is a big issue in the US. Forcing people to purchase electric vehicles (especially considering the cheapest widely available EV costs $27k) deepens the inequality, not lessen it. Additionally, even though EVs do not use fossil fuels to operate, they require a large amount of metal and rare earth minerals to manufacture. And is your EV actually emission-free when the electric grid you’re using to charge it is not 100% carbon-free?</p>
    <br />
    <p>Trying to remedy the current problems with the DART system by selling off services to private companies is illogical, because the best way to improve our transportation is by actually funding and expanding public transit.</p>
    <br />
    <p>For the above reasons, the residents of Dallas deserve a better climate plan than the CECAP.</p>
    <br />
    <h2>Our Priorities</h2>
    <p>Our three priorities while developing the Dallas People’s Climate Action Plan were:</p>
    <ol className="lista">
    	<li>1. Propose ambitious and bold plans that drastically reduce our carbon emissions, consumption, and waste to a level that is ecologically sustainable and healthy for the people and planet.</li>
    	<br />
    	<li>2. Establish democratic control over the systems and environment we interact with daily and in our own communities.</li>
    	<br />
    	<li>3. Elevate the wellbeing of our people, communities, and environment over the profits of businesses.</li>
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
  .lista {
  	padding-left: 1.5rem;
  	font-size: 1.2rem;
  }
`

export default Background;