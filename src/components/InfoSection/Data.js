import svgOne from '../../images/svg-1.svg';
import svgTwo from '../../images/svg-2.svg';
import svgThree from '../../images/svg-3.svg';

// for InfoSection Area Details
export const InfoObjOne = {
	id: 'about',
	lightBg: false,
	lightText: true,
	lightTextDesc: true,
	topLine: 'Premium Bank',
	headLine: 'Unlimited Transaction with zero fees',
	description: 'Get Access to our exclusive app that allows you to send Unlimited transactions without getting charged in any fees.',
	buttonLabel: 'Get Started',
	imgStart: true,
	img: svgOne,
	alt: 'Premium Bank',
	dark: true,
	primary: true,
	darkText: false
}
export const InfoObjTwo = {
	id: 'project',
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: 'Unlimited Access',
	headLine: 'Login to your account at any time',
	description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
	buttonLabel: 'Learn More',
	imgStart: true,
	img: svgTwo,
	alt: 'Unlimited Access',
	dark: false,
	primary: false,
	darkText: true
}
export const InfoObjThree = {
	id: 'join',
	lightBg: true,
	lightText: false,
	lightTextDesc: false,
	topLine: 'Join our Team',
	headLine: 'Creating an account is extremely easy',
	description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and youre ready to go.',
	buttonLabel: 'Start Now',
	imgStart: false,
	img: svgThree,
	alt: 'Premium Bank',
	dark: false,
	primary: false,
	darkText: true
}