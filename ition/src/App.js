import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Movies/>
    </div>
  );
}

export default App;
