import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import Icon4 from '../../images/svg-7.svg';

import {
	ServicesContainer,
	ServicesH1,
	ServiceWrapper,
	ServiceCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServiceElements'

const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServiceWrapper>
				<ServiceCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>REGISTER</ServicesH2>
					<ServicesP>Register your existing Bitcoin Wallet Address.</ServicesP>	
				</ServiceCard>
				<ServiceCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>TRANSACT</ServicesH2>
					<ServicesP>Make transactions using the registered Bitcoin Wallet.</ServicesP>	
				</ServiceCard>
				<ServiceCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>TRACKING</ServicesH2>
					<ServicesP>Blocksaves will track down your transaction using registered Bitcoin Wallet.</ServicesP>	
				</ServiceCard>
				<ServiceCard>
					<ServicesIcon src={Icon4} />
					<ServicesH2>PLANTING</ServicesH2>
					<ServicesP>Blocksaves will plant trees based on the corresponding number of transactions you make.</ServicesP>	
				</ServiceCard>
			</ServiceWrapper>
		</ServicesContainer>
	)
}

export default Services