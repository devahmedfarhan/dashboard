import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Layout from '../Layout/Layout';
import Button from '@mui/joy/Button';
// import Box from '@mui/joy/Box';
import '../App.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    localStorage.removeItem('authUser');
    navigate('/')
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:5000/api/auth/getData');
      const result = await response.json();
      setData(result);
    };

    getData();
  }, [])

  return (
    <>
      <h1 style={{ color: '#ccc', textAlign: 'center' }}>Welcome to Dashboard</h1>


      <Button onClick={() => handleNavigate()}>Logout</Button>

      {/* <Layout /> */}

      <table>
        <thead>
          <tr>
            <th>S NO.</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {
            data?.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Dashboard;