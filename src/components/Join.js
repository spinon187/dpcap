import React from 'react';
import styled from 'styled-components';
import {green, white, gray} from './Colors';
import dsaImg from '../img/square/dsantx_logo.png';
import treeFiddy from '../img/square/dallas350.svg';
import dga from '../img/square/dga.png';
import gntx from '../img/square/gntx.png';
import jwj from '../img/square/jwj.png';
import nttr from '../img/square/nttr.png';
import sunrise from '../img/square/sunrise.png';
import tce from '../img/square/tce.png';
import vfp from '../img/square/vfp.png';

const orgPics = [dsaImg, treeFiddy, dga, gntx, jwj, nttr, sunrise, tce, vfp];

var orgs = []
for (var j = 0; j<orgPics.length; j++){
	var orgPic = {
		photo: orgPics[j],
		text: "this is the text"
	}
	orgs.push(orgPic)
}


function RandomText(props){
	return <h3>This is a {props.text}</h3>
}
//this function should display a single org pic
function OrgPic(props){
	return(
		<img className="orgPic" src={orgPics} alt=""/>
		);
}

//this function should display all org pics
function OrgChart(o){
	const imgPerRow = 3;
	const windowWidth = window.innerWidth;
	console.log(windowWidth);
	const windowHeight = window.innerHeight;
	var orgList = [];
	var imgWidth = 0.8*(windowWidth/imgPerRow)
	//for (var i = 0; i<orgPics.length/3; i++){
		return(
			<div className="grid">
			{o.map((e,i) =>
				<img src={e.photo}
				text = {e.text}
				width={imgWidth}
				height={imgWidth}
				className="a"
				key={i}
				style={{padding: "20px"}}
				/>
			)}
			</div>
		);
	
}

function GetImageWidth(props){
	const imgPerRow = 3;
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	return 0.9*(windowWidth/imgPerRow);
}

const Join = props => {
  return(
    <JoinBox>
    	<div>
    	<h1>Dallas People’s Climate Action Coalition Members</h1>
    	{OrgChart(orgs)}
    	<br />
    	<br />
    	</div>
    	<h1>Join Us</h1>
    	<div className="joinusblock">
	    	<div style={{width: 500}}>
		    	<h2>As a Volunteer</h2>
		    	<p>
		    	Want to get more involved? We are looking for volunteers to help us coordinate actions & events, create digital media, canvass communities to raise awareness, meet with City staff and council people, and much more!
				</p>
				<br />
				<p>
				Be a part of our movement by emailing <u>volunteer@dallaspcap.com</u>.
				</p>
			</div>
    		<div style={{width: 500}}>
		    	<h2>As an Coalition Partner</h2>
		    	<p>
		    	Are you part of an organization that is willing to fight for a democratic, equitable, and just climate plan that puts the wellbeing of the people and planet above profits? We are looking for organizations that will endorse the Dallas People’s Climate Action Plan and support our efforts in pressuring the City of Dallas to adopt our climate actions.
		    	</p>
		    	<br />
		    	<p>
				Join the DPCAP coalition by emailing <u>join@dallaspcap.com</u>.
	    		</p>
	    	</div>
    	</div>
    </JoinBox>
  );
}

const JoinBox = styled.div`
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
  .joinusblock {
  	display: flex;
  	justify-content: space-around;
  	// padding: 0 15%;
  	width: 100%;
  	text-align : center
  }
  .grid {
  	display: flex;
  	flex-wrap: wrap;
  	justify-content: space-around;
  }
`

export default Join;