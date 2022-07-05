import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Cards from "./card.jsx"
import {Container} from 'react-bootstrap';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar 
				header = "Start Bootstrap"
				home = "Home"
				about = "About"
				service = "Service"
				contact = "Contact"
			/>
			<Jumbotron/>
			<Cards/><Cards/>
			<Cards/>
			<Cards/>
			<Cards/>
			
		</div>
	);
};

export default Home;
