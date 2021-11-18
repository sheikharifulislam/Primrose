import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import SingleManageOrders from '../singleManageOrders/SingleManageOrders';

const ManageAllProduct = () => {
    
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        axios.get('https://glacial-ridge-32887.herokuapp.com/all-products') 
        .then((response) => {
            setAllProducts(response.data);            
        })
        .catch((error) => {
            console.log(error.message);
        })
    },[])

    

    return (
        <div>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Main Price</TableCell>
                            <TableCell align="center">Offer Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>  
                            <TableCell align="center">Action</TableCell>           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allProducts.map((product) => <SingleManageOrders key={product._id} product={product}/>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllProduct;