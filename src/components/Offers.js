
const offersContainer = {
  width: '60%',
}

const offers = {
  height: '40%',
  backgroundColor: '#fef7ff',
  borderRadius: '20px',
  border: '3px solid pink',
  margin: '10px',
  padding: '10px'
}

const columnHeaders = {
  display: 'flex',
  flexDirection: 'row',
  width: '80%',
  justifyContent: 'space-between'
}

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
  let boxStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    backgroundColor: '#fef7ff',
    margin: '10px',

  }
  let containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fef1ff',
    flexShrink: 3, /* default 1 */

    //maxWidth: '75%',
    //justifyContent: 'space-around'
  }
  
  let exchanges = Object.keys(data);
  let list = [];

  for(let i = 0; i < exchanges.length; i++) {
    let name = exchanges[i];
    let { buyPrice, buySize } = data[name];
    list.push(
      <div key={i} style={boxStyle}>
        <p>{name}</p>
        <p>{buyPrice}</p>
        <p>{buySize}</p>
        <p>{buyPrice * buySize}</p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {list}
    </div>
  );

}

const Offers = () => {
  return (
    <div style={offersContainer}>
      <div style={offers}>
        <div>Best buying offers: </div>
        <div style={columnHeaders}>
          <p>Exchange</p>
          <p>Price</p>
          <p>Amount</p>
          <p>Value</p>
        </div>

        <div>
          {exchangeView()}
        </div>

      </div>
      <div style={offers}>
        Best selling offers:
      </div>
    </div>
  );
}

export default Offers;