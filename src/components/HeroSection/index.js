import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements'
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroP,
	HeroH1,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from './HeroElements';

const HeroSection = () => {
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	}
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>

			<HeroContent>
				<HeroP>CRYPTO FOR A BETTER TOMORROW</HeroP>
				<HeroH1>Reduce Your Carbon Footprints By Using Crypto.</HeroH1>
				
				<HeroBtnWrapper>
					<Button 
					to='/' 
					onMouseEnter={onHover} 
					onMouseLeave={onHover}
					primary='true'
					dark='true'
					>
						Join Our Community {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>	
				</HeroBtnWrapper>	
			</HeroContent>

		</HeroContainer>
	)
}

export default HeroSection