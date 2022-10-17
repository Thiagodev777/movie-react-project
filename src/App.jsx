import { Outlet } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './Components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home />
      <Outlet />
    </div>
  )
}

export default App
