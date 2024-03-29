import React, {useState, useEffect} from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinExchangeHeader from './components/CoinExchangeHeader/CoinExchangeHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: rgb(243, 235, 235);
  border-radius: 0 0 15px 15px;
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App(props) {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(response =>{
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price)
      }
    })
    setCoinData(coinPriceData);
  };

  useEffect(() => {
    if(coinData.length === 0){
      //component did mount
      componentDidMount();
    }
  });

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map((values) => {
      let newValues = {...values};
      if(valueChangeId === newValues.key){
        newValues.price = newPrice;
      }
      return newValues;
    });
     setCoinData(newCoinData);
  };

  const toggleBalance = () => {
    setShowBalance(showBalance => !showBalance);
  };

  return (
    <Div>
      <CoinExchangeHeader/>
      <AccountBalance amount={balance} 
          showBalance={showBalance}
          toggleBalance={toggleBalance}/>
      <CoinList coinData={coinData} 
          handleRefresh={handleRefresh}
          showBalance={showBalance}/>
    </Div>
  );
};

export default App;
