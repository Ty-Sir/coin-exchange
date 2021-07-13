import React, { Component } from 'react';
import './Coin.css';
import PropTypes from 'prop-types';

export default class Coin extends Component {
	constructor(props){
		super(props)
		this.state = {
			price: this.props.price
		}
		this.handleClick = this.handleClick.bind(this);
	}
	// UPDATES PRICE AUTOMATICALLY -- CURRENTLY HAVE A REFRESH BUTTON INSTEAD
	// componentDidMount() {
	// 	const callback = () => {
	// 		//set the state to a new random value
	// 		const randomPercentage = .995 + Math.random() * .01;

	// 		this.setState((oldState) => {
	// 			return {
	// 				price: (oldState.price * randomPercentage).toFixed(2)
	// 			};
	// 		});
	// 	}
	// 	setInterval(callback, 2000);
	// }

	handleClick(e){
		e.preventDefault();

		const randomPercentage = .995 + Math.random() * .01;

		this.setState((oldState) => {
			return {
				price: (oldState.price * randomPercentage).toFixed(2)
			};
		});
	}

	render() {
		return(
			<tr className="coin-row">
				<td>{this.props.name}</td>
				<td>{this.props.ticker}</td>
				<td>${this.state.price}</td>
				<td>
					<form action="#" method="POST">
						<button onClick={this.handleClick}>Refresh</button>
					</form>
				</td>
			</tr>
		);
	}
}

Coin.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}