import React from 'react'
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div>
        <nav id='navbar'>
            <h2> <Link to="/"><BiCameraMovie/>moviesLib</Link> </h2>
            <form action="/search" method=''>
                <input type="text" placeholder='Busque um filme'/>
                <button type='submit'>
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    </div>
  )
}

export default Navbar;
