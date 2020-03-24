import React from 'react';
import styled from 'styled-components';
import {green, white, gray} from './Colors';
import {NavHashLink} from 'react-router-hash-link';

const Events = props => {
  return(
    <EventBox>
    <h1 id='events'> Upcoming Events</h1>
    <br />
    <p>Please check this calendar for a list of upcoming events you may be interested in. If you are able to attend any of these, contact us via the email address at the <NavHashLink to='/join#contact' activeClassName='activeNav'>Join Us</NavHashLink> page. We look forwards to seeing you!</p>
    <div class="responsive-iframe-container large-container">
    <iframe src="https://calendar.google.com/calendar/b/3/embed?height=1200&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=Y3VyZXdpdHpqdXN0aW5AZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZGFsbGFzcGVvcGxlc2NhcEBnbWFpbC5jb20&amp;color=%237CB342&amp;color=%23F6BF26&amp;color=%234285F4&amp;color=%23616161&amp;showTitle=0&amp;showTabs=1&amp;showCalendars=0&amp;showPrint=0&amp;mode=AGENDA" style={{border:"solid 1px #777", width:"1600", height:"1200", frameborder:"0", scrolling:"no"}} ></iframe>
    </div>
    </EventBox>
  )
}

const EventBox = styled.div`
padding: 2rem;
  background: ${green};
  color: ${white};
  .indent {
    padding-right: 1.5rem;
    @media(max-width: 1920px){
      padding-right: .75rem;
    }
  }
  font-size: 1.2rem;
  @media(min-width: 640px){
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
  .responsive-iframe-container {
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px;
	height: 0;
	overflow: hidden;
	}
  .responsive-iframe-container iframe,   
  .vresponsive-iframe-container object,  
  .vresponsive-iframe-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	}
`

export default Events;