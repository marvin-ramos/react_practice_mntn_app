import React from 'react'
import { HiUserCircle } from "react-icons/hi";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>

			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='about' onClick={toggle}>About us</SidebarLink>						
					<SidebarLink to='project' onClick={toggle}>Projects</SidebarLink>
					<SidebarLink to='join' onClick={toggle}>Join us</SidebarLink>						
					<SidebarLink to='service' onClick={toggle}>Services</SidebarLink>												
					<SidebarLink to='update' onClick={toggle}>Updates</SidebarLink>	
					<SidebarLink to='accoun' onClick={toggle}><HiUserCircle/> Account</SidebarLink>			
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar