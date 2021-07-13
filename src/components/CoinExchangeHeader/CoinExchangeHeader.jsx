import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
	background-color: #282c34;
	min-height: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: white;
	border-radius: 0 0 25px 25px;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export default class CoinExchangeHeader extends Component {
	render() {
		return (
			<Header>
				<h1>
					Coin Exchange
				</h1>
			</Header>
		)
	}
}
