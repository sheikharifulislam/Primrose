import React,{useState} from 'react';
import TableCell from '@mui/material/TableCell';
import {Button} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import axios from 'axios';

const SingleManageOrder = ({product}) => {
    const {productName,productPrice,orderDate,orderTime} = product.orderInfo;
    
    const [newOrderStatus,setNewOrderStatus] = useState(product.orderStatus);
    
    const handleCancleButton = e => {
        const confirm = window.confirm('Are you sure you want to cancel Order?');
        if(confirm) {
            setNewOrderStatus('cancle');       
            axios.patch(`http://localhost:5000/update-product-status?orderId=${product._id}`,{newOrderStatus:'cancle'})
            .then((response) => {
                if(response.data.modifiedCount) {
                    alert('order Cancle Succefull');               
                }           
            })
            .catch((error) => {
                console.log(error.message);
            })
        }
    }
    const handleConfirmOrder = e => {
        setNewOrderStatus('confirm');       
        axios.patch(`http://localhost:5000/update-product-status?orderId=${product._id}`,{newOrderStatus:'confirm'})
        .then((response) => {
            if(response.data.modifiedCount) {
                alert('order confirm Succefull');               
            }           
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
   
    return (
        <TableRow       
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}                            
        >
            <TableCell component="th" scope="row" style={{width: '30%'}}>
                {productName}
            </TableCell>
            <TableCell align="center">
                {productPrice} $
            </TableCell>
            <TableCell align="center">
                {orderDate}
            </TableCell>
            <TableCell align="center">
                {orderTime}
            </TableCell>
            <TableCell align="center">
                {newOrderStatus}
            </TableCell>
            <TableCell align="center">
                {
                    newOrderStatus === 'pending' &&                   
                    <Box>
                        <Button style={{
                            textAlign: 'right',
                            marginRight: '7px',
                            backgroundColor: 'dodgerblue',
                            color: '#f5f5f5',
                            }}
                            variant="outlined"
                            onClick={handleConfirmOrder}                        
                            >
                                Confirm
                        </Button>
                        <Button style={{
                            textAlign: 'right',
                            backgroundColor: 'red',
                            color: '#f5f5f5',
                            }}
                            variant="outlined"
                            onClick={handleCancleButton}
                            >
                                Cancle
                        </Button>
                    </Box>
                }                
            </TableCell>                            
        </TableRow>
    );
};

export default SingleManageOrder;