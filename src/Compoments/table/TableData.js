import React, { useEffect, useState } from 'react';

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
    )
}

export default TableData;