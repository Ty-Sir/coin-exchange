import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td`
	border: 1px solid grey;
	width: 25vh;
	border-radius: 5px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

export default function Coin(props) {
	const handleClick = (e) => {
		e.preventDefault();

		props.handleRefresh(props.tickerId);
	}

	const balance = props.showBalance ? <Td>{props.balance}</Td> : null;
	
	return(
		<tr>
			<Td>{props.name}</Td>
			<Td>{props.ticker}</Td>
			<Td>${props.price}</Td>
			{balance}
			<Td>
				<form action="#" method="POST">
					<button onClick={handleClick}>Refresh</button>
				</form>
			</Td>
		</tr>
	);

}

Coin.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}