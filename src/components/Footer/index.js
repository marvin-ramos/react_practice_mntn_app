import React from 'react'
import {
	FooterContainer,
	FooterWrap,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkH1,
	FooterLinkH2,
	FooterLinkP,
	FooterLinkTitle,
	FooterLink,
	FooterLinksContainer,
	FooterLinkItemsContent
} from './FooterElements';
const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItemsContent>
							<FooterLinkH1>MNTN</FooterLinkH1>
							<FooterLinkH2>Get out there & discover your next slope, mountain & destination</FooterLinkH2>
							<FooterLinkP>Copyright 2019 MNTN, Inc, Terms & Privacy</FooterLinkP>
						</FooterLinkItemsContent>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>More on The Blog</FooterLinkTitle>
							<FooterLink to="/">About MNTN</FooterLink>
							<FooterLink to="/">Contributors & Writers</FooterLink>
							<FooterLink to="/">Write For us</FooterLink>
							<FooterLink to="/">Contact Us</FooterLink>
							<FooterLink to="/">Privacy Policy</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>More on MNTN</FooterLinkTitle>
							<FooterLink to="/">The Team</FooterLink>
							<FooterLink to="/">Jobs</FooterLink>
							<FooterLink to="/">Press</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer