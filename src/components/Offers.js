import './styles/Offers.css';

let data = {
  coinbase: {
    buyPrice: 5.0,
    sellPrice: 5.0,
    buySize: 0.5,
    sellSize: 0.5,
  },
  bitstamp: {
    buyPrice: 10.0,
    sellPrice: 10.0,
    buySize: 0.5,
    sellSize: 0.5,
  }
}

const exchangeView = () => {
  let exchanges = Object.keys(data);
  let rows = [];

  for(let i = 0; i < exchanges.length; i++) {
    let name = exchanges[i];
    let { buyPrice, buySize } = data[name];
    rows.push(
      <tr key={i}>
        <td>{name}</td>
        <td>{buyPrice}</td>
        <td>{buySize}</td>
        <td>{buyPrice * buySize}</td>
      </tr>
    );
  }

  return rows;

}

const Offers = () => {
  return (
    <div className="offer-container">
      <div className="offer">
        <div>Best buying offers: </div>
        <table>
          <tbody>
            <tr>
              <th>Exchange</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Value</th>
            </tr>
            {exchangeView()}
          </tbody>
        </table>
      </div>
      <div className="offer">
        Best selling offers:
      </div>
    </div>
  );
}

export default Offers;