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
  constructor(props) {
    super(props);
    this.state = {
      balance:10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 33000
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 2800
        },
        {
          name: 'USDC',
          ticker: 'USDC',
          price: 1
        },
        {
          name: 'Augury Finance',
          ticker: 'OMEN',
          price: 0.44
        },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map(({ticker, name, price}) => {
      let newPrice = price;
      if(valueChangeTicker === ticker){
        const randomPercentage = .995 + Math.random() * .01;
        newPrice = (newPrice * randomPercentage).toFixed(2);
      }
      return {
        ticker,
        name,
        price: newPrice
      }
    });
     this.setState({coinData: newCoinData})
  }

  render(){
    return (
      <Div>
        <CoinExchangeHeader/>
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
      </Div>
    );
  }
}

export default App;
