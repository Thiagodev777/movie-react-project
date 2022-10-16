import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav id='navbar'>
        <h2> <Link to="/">moviesLib</Link> </h2>
        <h2> <Link to="movie/1">movie</Link> </h2>
        <h2> <Link to="/search">search</Link> </h2>
      </nav>

      <Outlet />
    </div>
  )
}

export default App
