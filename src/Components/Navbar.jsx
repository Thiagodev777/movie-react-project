import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div>
      <nav id="navbar">
        <h2>
          {" "}
          <Link to="/">
            <BiCameraMovie />
            Devsmovie
          </Link>{" "}
        </h2>
        <form action="/search" method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            required
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
