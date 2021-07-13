import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
	text-align: left;
	font-size: 2rem;
	font-weight: 700;
	padding: 10px;
`;

export default class AccountBalance extends Component {
	render() {
		return (
			<Section>
				Balance ${this.props.amount}
			</Section>
		);
	}
}


AccountBalance.propTypes = {
	amount: PropTypes.number.isRequired
}