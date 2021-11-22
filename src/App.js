const container = {
  display: 'flex',
  flexDirection: 'row',
  height: 400
}

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

const recs = {
  height: '85%',
  width: '40%',
  backgroundColor: '#fef7ff',
  borderRadius: '20px',
  border: '3px solid pink',
  margin: '10px',
  padding: '10px'  
}

function App() {
  return (
    <div>
      <h1>Crypto Recs</h1>
      <div style={container}> 
        <div style={offersContainer}>
          <div style={offers}>Best buying offer:</div>
          <div style={offers}>Best selling offer:</div>
        </div>
        <div style={recs}>Recommendations</div>
      </div>
    </div>
  );
}

export default App;
