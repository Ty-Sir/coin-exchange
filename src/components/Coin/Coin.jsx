import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Td = styled.td`
	border: 1px solid grey;
	width: 25vh;
	border-radius: 5px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

export default class Coin extends Component {
	handleClick = (e) => {
		e.preventDefault();

		this.props.handleRefresh(this.props.ticker);
	}

	render() {
		const balance = this.props.showBalance ? <Td>{this.props.balance}</Td> : null;
		
		return(
			<tr>
				<Td>{this.props.name}</Td>
				<Td>{this.props.ticker}</Td>
				<Td>${this.props.price}</Td>
				{balance}
				<Td>
					<form action="#" method="POST">
						<button onClick={this.handleClick}>Refresh</button>
					</form>
				</Td>
			</tr>
		);
	}
}

Coin.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}