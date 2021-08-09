import React from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const index = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">MNTN</NavLogo>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default index