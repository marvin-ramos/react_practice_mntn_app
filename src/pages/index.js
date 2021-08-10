import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
	InfoObjOne, 
	InfoObjTwo, 
	InfoObjThree 
} from '../components/InfoSection/Data'; 

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />	
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...InfoObjOne} />
			<InfoSection {...InfoObjTwo} />
			<InfoSection {...InfoObjThree} />
		</>
	)
}

export default Home