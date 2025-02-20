import React from 'react'
import './header.css';

const header = () => {
  return (
<div id="header">
		<svg class="Rectangle_15">
			<rect id="Rectangle_15" rx="0" ry="0" x="0" y="0" width="1920" height="160">
			</rect>
		</svg>
		<div id="Logo">
			<svg class="Ellipse_2">
				<ellipse id="Ellipse_2" rx="33.5" ry="33" cx="33.5" cy="33">
				</ellipse>
			</svg>
			<div id="M">
				<span>M</span>
			</div>
			<div id="eals">
				<span>eals</span>
			</div>
		</div>
		<div id="section">
			<div id="Featured">
				<span>Featured</span>
			</div>
			<a href="#About_Us_y">
			<div id="About_Us">
				<span>About Us</span>
			</div>
		    </a>
			<div id="Home">
				<span>Home</span>
			</div>
		</div>
		<div id="button_contact">
			<button id="Contact">
				<span>Contact</span>
			</button>
		</div>
	</div>
	)
}

export default header