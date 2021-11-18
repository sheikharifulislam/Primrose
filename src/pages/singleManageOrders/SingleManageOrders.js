import React from 'react';
import TableCell from '@mui/material/TableCell';
import {Button} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SingleManageOrders = ({product}) => {

    const {_id,productName,mainPrice,offerPrice,ProductQuantity} = product;
    const navigate = useNavigate();

    const handleDeleteProduct = (e) => {        
        const confirm = window.confirm('Are you sure you want to delete Product');
        if(confirm) {
            axios.delete(`https://glacial-ridge-32887.herokuapp.com/delete-single-product?productId=${_id}`)
            .then((response) => {
                if(response.data.deletedCount) {
                e.target.parentElement.parentElement.remove();
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
        }
        
    }


    const handleUpdateProduct = () => {
        navigate(`dashboard/update-product-informations/${_id}`,{
            replace: true,
        })
    }

    return (
        <TableRow
        key={_id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                            
        >
            <TableCell component="th" scope="row" style={{width: '30%'}}>
                {productName}
            </TableCell>
            <TableCell align="center">
                {mainPrice} $
            </TableCell>
            <TableCell align="center">
                {offerPrice} $
            </TableCell>
            <TableCell align="center">
                {ProductQuantity}
            </TableCell>
            <TableCell align="center">
                <Button style={{
                    textAlign: 'right',
                    marginRight: '7px',
                    backgroundColor: 'dodgerblue',
                    color: '#f5f5f5',
                    }}
                    variant="outlined"
                    onClick={handleUpdateProduct}
                    >
                        Update
                </Button>
                <Button style={{
                    textAlign: 'right',
                    backgroundColor: 'red',
                    color: '#f5f5f5',
                    }}
                    variant="outlined"
                    onClick={handleDeleteProduct}
                    >
                        Delete
                </Button>
            </TableCell>                            
        </TableRow>
    );
};

export default SingleManageOrders;