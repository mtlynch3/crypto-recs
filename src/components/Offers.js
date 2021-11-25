
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

      </div>
      <div style={offers}>
        Best selling offers:
      </div>
    </div>
  );
}

export default Offers;