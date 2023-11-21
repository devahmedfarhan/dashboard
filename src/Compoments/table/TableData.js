import Table from '@mui/joy/Table';
import React, { useEffect, useState } from 'react';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/joy';


const TableData = () => {
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
            <div >
                <h1>User List</h1>
                <Button>Add User</Button>
                <Table>
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Fullname</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.fullname}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.location}</td>
                                    <td>
                                        <Dropdown>
                                            <MenuButton><MoreVertIcon fontSize="small" /></MenuButton>
                                            <Menu>
                                                <MenuItem>Edit</MenuItem>
                                                <MenuItem>Delete</MenuItem>
                                            </Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>

        </>
    )
}

export default TableData;