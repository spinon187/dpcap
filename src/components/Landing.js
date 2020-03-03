import React from 'react';
import styled from 'styled-components';
import cta from '../img/cta.png';
import {green, white, gray} from './Colors';
import strike from '../img/IMG_2115-global-climate-strike.jpg';
import img2 from '../img/img2.png';
import {NavHashLink} from 'react-router-hash-link';





class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: null
    }
  }
  showToggle = cName => {
    this.state.active !== cName ? this.setState({active: cName}) : this.setState({active: null})
  }

  render() {
    return(
      <LandingBox>
        <img src={cta} alt='Join the DPCAP!' className='cta'/>
        <div className='overview-box'>
          <h2>DPCAP OVERVIEW</h2>
          <div className='overview-sub-box'>
            {this.state.active === null || this.state.active === 'cdm' ? <div>
              <h3 onClick={() => this.showToggle('cdm')}>Community Decision Making</h3>
              {this.state.active === 'cdm' 
              ? <div>
                <p>The most important question in the face of climate change is not “Do we believe it’s real?” but “Who gets to decide what we will do?”. We can’t afford to let our response to climate change be controlled by a wealthy and powerful few, who have more concern for maintaining their profits and privilege than the lives of the working class. The Dallas Climate Plan must be democratically accountable to all Dallas residents and Dallas communities.</p>
                <NavHashLink to='/platform#community-decision-making' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            : null
            }
            {this.state.active === null || this.state.active === 'ejz' ? <div>
              <h3 onClick={() => this.showToggle('ejz')}>Environmental Justice and Zoning</h3>
              {this.state.active === 'ejz'
              ? <div>
                <p>A history of irresponsible zoning practices has left many communities, all too often poor neighborhoods and communities of color, dealing with toxic waste sites and polluting facilities near their homes. Any economic development or zoning process must be pursued through the lens of social and environmental equity to ensure that all residents can maintain quality of life.</p>
                <NavHashLink to='/platform#environmental-justice-zoning' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            :null
            }
            {this.state.active === null || this.state.active === 'dr' ? <div>
              <h3 onClick={() => this.showToggle('dr')}>Disaster Response</h3>
              {this.state.active === 'dr'
              ? <div>
                <p>With climate change comes more erratic and extreme weather patterns — circumstances like the four year drought followed by flash flooding in 2015, increasingly hotter summers, and severe storms are predicted to become more frequent in Dallas. The city must develop a comprehensive plan to ensure the safety and well being of all its residents during such extreme weather events.</p>
                <NavHashLink to='/platform#disaster-response' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            : null
            }
            {this.state.active === null || this.state.active === 'rps' ? <div>
              <h3 onClick={() => this.showToggle('rps')}>Rewilding and Public Spaces</h3>
              {this.state.active === 'rps'
              ? <div>
                <p>Climate change is a result of the disruption of Earth’s water and carbon cycles through the steady deforestation and urbanization pursued through conventional development. When natural habitats like forests, swamp lands, peat lands and prairies are removed, water vapor becomes trapped in the upper atmosphere, amplifying other greenhouse gases. In order to restore both the carbon and water cycle, a massive “rewilding” effort must take place. The current predominant mentality in society that shapes our economic policies is that humans are separate from nature, which prevents us from understanding the interdependence between us and the natural world. If we can redefine ourselves as a keystone species within the ecosystem, we can then design policies that weave human society and nature together in a mutually beneficial way- that will ultimately be the key to sustaining civilization in the years to come. </p>
                <NavHashLink to='/platform#rewilding' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            :null
            }
            {this.state.active === null || this.state.active === 'scr' ? <div>
              <h3 onClick={() => this.showToggle('scr')}>Sustainable Construction and Retrofitting</h3>
              {this.state.active === 'scr' 
              ? <div>
                <p>From Architecture 2030: “The world is currently undergoing the largest wave of urban growth in human history. More than half of the global population is now concentrated in urban areas, and by 2060 two thirds of the expected population of 10 billion will live in cities.” Buildings and their construction together account for 36 percent of global energy use and 39 percent of energy-related carbon dioxide emissions annually. As the city of Dallas is expected to grow, it has the opportunity to design its new development to be net-zero from the start, and retrofit .</p>
                <NavHashLink to='/platform#sustainable-construction' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            : null
            }
            {this.state.active === null || this.state.active === 'gat' ? <div>
              <h3 onClick={() => this.showToggle('gat')}>Green and Accessible Transportation</h3>
              {this.state.active === 'gat' 
              ? <div>
                <p>The U.S. transportation sector accounts for nearly thirty percent of global greenhouse gas emissions. In addition, a lack of access to transit exacerbates economic inequality- making it extremely difficult for those without cars to access basic necessities like the workplace, grocery store, or doctor’s office. Transportation should be a human right. Establishing a free, accessible, and expanded public transit system would enable residents of Dallas to opt out of single occupancy vehicles, improve air quality, and make Dallas an easily navigable city for all residents. </p>
                <NavHashLink to='/platform#green-transportation' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            :null
            }
            {this.state.active === null || this.state.active === 'pou' ? <div>
              <h3 onClick={() => this.showToggle('pou')}>Publicly Owned Utilities</h3>
              {this.state.active === 'pou'
              ? <div>
                <p>The private sector is historically terrible at moving whole industries over to new technologies, even when the old tech is harmful and inefficient. To switch over to 100% renewable energy sources as fast as the threat of climate change demands, the city of Dallas needs to take public control of our electric utility. Publicly owned utilities and community-based microgrids aid in both democratizing the energy system and in making the overall grid more resilient — an important development as the city of Dallas is expected to face more extreme weather patterns in the upcoming years. Access to electricity can be a matter of life and death, particularly for elderly or disabled people who use breathing machines and other life-sustaining devices: it should not be left in the hands of unaccountable private owners who can cut service at will.</p>
                <NavHashLink to='/platform#public-utilities' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            :null
            }
            {this.state.active === null || this.state.active === 'zw' ? <div>
              <h3 onClick={() => this.showToggle('zw')}>Zero Waste</h3>
              {this.state.active === 'zw' 
              ? <div>
                <p>Only 9% of the plastic ever made has been recycled, and nearly 40% of landfill waste is organic material that emits methane- a greenhouse gas 30 times more potent than carbon dioxide. Not only is creating waste unsustainable in a world with finite resources, it is also contributing to the climate crisis. The city of Dallas can shift away from the current linear economy and embrace a circular economic model by adopting a comprehensive zero waste program. Waste is not inevitable, it is simply a design flaw.</p>
                <NavHashLink to='/platform#zero-waste' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            : null
            }
            {this.state.active === null || this.state.active === 'rsjfs' ? <div>
              <h3 onClick={() => this.showToggle('rsjfs')}>Resilient, Sustainable, and Just Food System</h3>
              {this.state.active === 'rsjfs' 
              ? <div>
                <p>Intentionally designing where and how food is made poses incredible opportunities for both social and environmental benefits. Creating a network of locally sourced, community owned, and regeneratively grown food would empower residents to grow and have access to fresh produce, eliminating food deserts and improving health, while simultaneously sequestering carbon back into the soil and plant root system. </p>
                <NavHashLink to='/platform#food-system' activeClassName='activeNav'>View in Platform >></NavHashLink>
              </div>
              : null}
            </div>
            :null
            }
          </div>
        </div>
        <div className='why-box'>
          <h1>WHY DALLAS NEEDS A RADICAL CLIMATE PLAN</h1>
          <br />
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
}

const LandingBox = styled.div`
  width: 100%;
  img {
    width: 100%;
    z-index: 1;
    margin-bottom: -4rem;
  }
    // padding: 2rem;
  // background: ${green};
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
    // padding: 1rem;
  }
  line-height: 2rem;
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 3.2rem;
    font-style: italic;
    font-weight: bold;
    @media(max-width: 640px){
      font-size: 1.6rem;
    }
  }
  h3 {
    // text-align: center;
    color: ${white};
    font-size: 2.4rem;
    background-color: ${green};
    border-radius: 3rem;
    padding: 1.8rem;
    margin: .5rem 1rem;
    display: inline-block;
    letter-spacing: .1rem;
    &:hover {
      cursor: pointer;
      font-weight: bold;
    }
    @media(max-width: 640px){
      font-size: 1rem;
      letter-spacing: 0;
      text-align: center;
      margin: 0 1rem;
      padding: 1rem;
      display: block;
    }
  }
  h2 {
    font-weight: bold;
    padding: 1rem 0;
    margin-bottom: 1rem;
    font-size: 3.2rem;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    @media(max-width: 640px){
      font-size: 1.6rem;
    }
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
  .overview-box {
    padding-top: 4.8rem;
    background-image: url(${strike});
    background-size: 100%;
    @media(max-width: 640px){
      background-size: cover;
    }
    display: flex;
    flex-direction: column;
    .overview-sub-box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    p, a {
      font-size: 2rem;
      padding: 1rem 0 1rem 0rem;
      line-height: 2.4rem;
      @media(max-width: 640px){
        font-size: 1rem;
      }
    }
    a {
      text-decoration: underline;
      color: ${white};
      &:hover {
        font-weight: bold;
      }
      padding-left: 3rem;
      @media(max-width: 640px){
        margin-right: 1rem;
        margin-left: 1rem;
        border: none;
        line-height: 1.2rem;
        padding: 0;
      }
    }
    div {
      margin-bottom: 1rem;
    }
    p {
      border-top: 2px solid ${green};
      margin: -3.5rem 10rem 0 3rem;
      padding-top: 5rem;
      @media(max-width: 640px){
        margin-right: 1rem;
        margin-left: 1rem;
        border: none;
        line-height: 1.2rem;
      }
    }
    .overview-sub-box {
      @media(max-width: 640px){
        flex-direction: column;
      }
    }
  }
  .why-box {
    background-image: url(${img2});
    background-size: 100% 100%;
    padding: 3rem;
    @media(max-width: 640px){
      padding: 1rem;
    }
    p {
      font-size: 1.8rem;
      padding: 0 3rem;
      @media(max-width: 640px){
        font-size: 1rem;
        padding: 0 1rem;
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`

export default Landing;