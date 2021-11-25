import Offers from "./components/Offers";

const container = {
  display: 'flex',
  flexDirection: 'row',
  height: 500
}

const recs = {
  height: '90%',
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
        <Offers /> 
        <div style={recs}>Recommendations</div>
      </div>
    </div>
  );
}

export default App;
