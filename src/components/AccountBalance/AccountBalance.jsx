import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
	text-align: left;
	font-size: 2rem;
	font-weight: 700;
	padding: 10px;
`;

const BalanceBtn = styled.button`
	border-radius: 25px;
	padding: 10px 25px;
	margin-right: 10px;
	font-weight: 700;
	border: none;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
	background: -webkit-linear-gradient(260deg, rgba(0,222,249,1) 0%, rgba(63,94,251,1) 80%);
	cursor: pointer;
	color: white;
`;

export default function AccountBalance(props) {
	const buttonText = props.showBalance ? "Hide Balance" : 'Show Balance';
	let balance = props.showBalance ? <span>Balance: ${props.amount}</span> : null;
	return (
		<Section>
			<BalanceBtn onClick={props.toggleBalance}>{buttonText}</BalanceBtn>
			{balance}				
		</Section>
	);
}


AccountBalance.propTypes = {
	amount: PropTypes.number.isRequired
}