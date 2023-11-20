import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    </>
  )
}

export default Dashboard;