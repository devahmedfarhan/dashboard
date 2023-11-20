import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Layout from '../Layout/Layout';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    localStorage.removeItem('authUser');
    navigate('/')
  };

  return (
    <>
      <h1 style={{ color: '#ccc', textAlign: 'center' }}>Welcome to Dashboard</h1>

      <button onClick={() => handleNavigate()}>Logout</button>

      {/* <Layout /> */}
    </>
  )
}

export default Dashboard;