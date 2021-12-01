import './styles/Offers.css';

let data = {
  coinbase: {
    buyPrice: 5.0,
    sellPrice: 10.0,
    buySize: 0.5,
    sellSize: 0.5,
  },
  bitstamp: {
    buyPrice: 5.0,
    sellPrice: 10.0,
    buySize: 0.5,
    sellSize: 0.5,
  }
}

const exchangeView = (buyOrSell) => {
  let exchanges = Object.keys(data);
  let rows = [];

  for(let i = 0; i < exchanges.length; i++) {
    
    let name = exchanges[i];
    let { buyPrice, buySize, sellPrice, sellSize } = data[name];
    let price, size = 0;
    if(buyOrSell === "buy") {
      price = buyPrice;
      size = buySize;
    } else {
      price = sellPrice;
      size = sellSize;
    }
    rows.push(
      <tr key={i}>
        <td>{name}</td>
        <td>{price}</td>
        <td>{size}</td>
        <td>{price * size}</td>
      </tr>
    );
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Exchange</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Value</th>
        </tr>
        {rows}
      </tbody>
    </table>
  )

}

const Offers = () => {
  return (
    <div className="offer-container">
      <div className="offer">
        <div>Best buying offers:</div>
        {exchangeView("buy")}
      </div>
      <div className="offer">
        <div>Best selling offers:</div>
        {exchangeView("sell")}
      </div>
    </div>
  );
}

export default Offers;