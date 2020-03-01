import React from 'react';
import styled from 'styled-components';
import {green, white, gray} from './Colors';
import dsaImg from '../img/dsantx_logo_placeholder.png';
import treeFiddy from '../img/square/dallas350.svg';
import dga from '../img/dga.png';
import gntx from '../img/gntx.png';
import jwj from '../img/jwj.jpg';
import nttr from '../img/nttr.png';
import sunrise from '../img/sunrise.jpg';
import tce from '../img/tce.jpg';
import vfp from '../img/vfp.jpg';

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
function OrgChart(props){
	const imgPerRow = 3;
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	var orgList = [];
	var imgWidth = 0.8*(windowWidth/imgPerRow)
	return(
		orgs.map((e,i) =>
			<img src={e.photo}
			text = {e.text}
			width={imgWidth}
			class="a"
			key={i}
			/>
		)
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
    	<RandomText text="test"/>
    	<OrgChart/>
    	<br />
    	<br />
    	</div>

    	<div style={{width: 800}}>
	    	<h1>Join Us</h1>
	    	<div style={{width: 300}}>
		    	<h2>Are you a volunteer</h2>
		    	If you want to volunteer to help us improve the DPCAP, contact us at:
		    	volunteer@dallaspcap.com
			</div>
    		<div style={{width: 300}}>
		    	<h2>Are you a organization interested in joining the coalition?</h2>
		    	If you represent an orginzation that is interested in supporting the Dallas People's Climate Action Plan, contatct us at:
		    	join@dallaspcap.com
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
`

export default Join;