import React from 'react';
import {FaBars} from 'react-icons/fa';
import { HiUserCircle } from "react-icons/hi";

import { 
	Nav, 
	NavbarContainer, 
	NavLogo, 
	MobileIcon, 
	NavMenu, 
	NavItem, 
	NavLinks,
	} from './NavbarElements';

const index = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">MNTN</NavLogo>
					
					<MobileIcon>
						<FaBars />
					</MobileIcon>

					<NavMenu>
						<NavItem>
							<NavLinks to='about'>About us</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='project'>Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='service'>Services</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='join'>Join us</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='update'>Updates</NavLinks>
						</NavItem>
					</NavMenu>

					<NavMenu>
						<NavItem>
							<NavLinks to='accoun'><HiUserCircle/> Account</NavLinks>
						</NavItem>
					</NavMenu>		
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default index