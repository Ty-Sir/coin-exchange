import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinExchangeHeader from './components/CoinExchangeHeader/CoinExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: rgb(243, 235, 235);
  border-radius: 0 0 15px 15px;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 1.5,
        price: 33000
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 21,
        price: 2800
      },
      {
        name: 'USDC',
        ticker: 'USDC',
        balance: 7500,
        price: 1
      },
      {
        name: 'Augury Finance',
        ticker: 'OMEN',
        balance: 18234,
        price: 0.44
      },
    ]
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map((values) => {
      let newValues = {...values};
      if(valueChangeTicker === newValues.ticker){
        const randomPercentage = .995 + Math.random() * .01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
     this.setState({coinData: newCoinData});
  }

  toggleBalance = () => {
    this.setState({showBalance: !this.state.showBalance});
  }

  render(){
    return (
      <Div>
        <CoinExchangeHeader/>
        <AccountBalance amount={this.state.balance} 
            showBalance={this.state.showBalance}
            toggleBalance={this.toggleBalance}/>
        <CoinList coinData={this.state.coinData} 
            handleRefresh={this.handleRefresh}
            showBalance={this.state.showBalance}/>
      </Div>
    );
  }
}

export default App;
