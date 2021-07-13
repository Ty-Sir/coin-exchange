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
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();

		this.props.handleRefresh(this.props.ticker);
		// const randomPercentage = .995 + Math.random() * .01;

		// this.setState((oldState) => {
		// 	return {
		// 		price: (oldState.price * randomPercentage).toFixed(2)
		// 	};
		// });
	}

	render() {
		return(
			<tr>
				<Td>{this.props.name}</Td>
				<Td>{this.props.ticker}</Td>
				<Td>${this.props.price}</Td>
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