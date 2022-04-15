
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Second from './pages/second/Second';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <Second/>
    </div>
  );
}

export default App;
