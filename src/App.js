import './App.css'

import Offers from "./components/Offers";


function App() {
  return (
    <div>
      <h1>Crypto Recs</h1>
      <div className="container">
        <Offers /> 
        <div className="recs">Recommendations</div>
      </div>
    </div>
  );
}

export default App;
