import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/page1">Sida 1</Link>
      <Link to="/page2">Sida 2</Link>
    </div>
  );
}

export default App;
