import React from 'react'
import Header from '../../Compoments/Header/Header';
import Login from '../../Auth/Login';
import Register from '../../Auth/Register';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <button>
        <Link to="/login" style={{ textDecoration: 'none' }}> Login </Link>
      </button>
    </>
  )
}

export default Home