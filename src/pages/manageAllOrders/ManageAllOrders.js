import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import SingleManageOrder from '../singleManageOrder.js/SingleManageOrder';

const ManageAllOrders = () => {

    const [myAllOrders, setMyAllOrders] = useState([]);

    useEffect(() => {
        axios.get(`https://glacial-ridge-32887.herokuapp.com/all-orders`)
        .then((response) => {
            setMyAllOrders(response.data)
        })
        .catch((error) => {
            console.log(error.message)
        })
    },[])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="center">Product Price</TableCell>
                            <TableCell align="center">Order Date</TableCell>
                            <TableCell align="center">Order Time</TableCell>
                            <TableCell align="center">Order Status</TableCell>    
                            <TableCell align="center">Action</TableCell>           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            myAllOrders.map((product) => <SingleManageOrder key={product._id} product={product}/>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;