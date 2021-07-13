import React from 'react';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Coin Exchange
        </h1>
      </header>
      <AccountBalance amount={10000}/>
      <table className="coin-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Ticker</th>
					<th>Price</th> 
				</tr>
			</thead>
			<tbody>
        <Coin name="Bitcoin" ticker="BTC" price={39000} />
				<Coin name="Ethereum" ticker="ETH" price={3000} />
        <Coin name="Tether" ticker="USDT" price={1} />
      </tbody>
		</table>
    </div>
  );
}

export default App;
