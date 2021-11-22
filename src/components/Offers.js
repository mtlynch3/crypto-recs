const offersContainer = {
  width: '60%',
}

const offers = {
  height: '30%',
  backgroundColor: '#fef7ff',
  borderRadius: '20px',
  border: '3px solid pink',
  margin: '10px',
  padding: '10px'
}

const Offers = () => {
  return (
    <div style={offersContainer}>
      <div style={offers}>Best buying offer:</div>
      <div style={offers}>Best selling offer:</div>
    </div>
  );
}

export default Offers;