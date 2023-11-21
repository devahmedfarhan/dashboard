import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Button from '@mui/joy/Button';
// import Box from '@mui/joy/Box';
import '../App.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    localStorage.removeItem('authUser');
    navigate('/')
  };

  return (
    <>

      <h1 style={{ color: '#ccc', textAlign: 'center' }}>Welcome to Dashboard</h1>
      <Button onClick={() => handleNavigate()}>Logout</Button>


      {/* <Layout /> */}
    </>
  )
}

export default Dashboard;