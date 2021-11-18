import React,{useState} from 'react';
import TableCell from '@mui/material/TableCell';
import {Button} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SingleMyOrder = ({product}) => {

    const {productName,productPrice,orderDate,orderTime} = product.orderInfo;   
  
    const [newOrderStatus, setNewOrderStatus] = useState(product.orderStatus);

    const navigate = useNavigate()

    const handleCancleButton = e => {
        const confirm = window.confirm('Are you sure you want to cancel Order');
        if(confirm) {
            setNewOrderStatus('cancle');       
            axios.patch(`https://glacial-ridge-32887.herokuapp.com/update-product-status?orderId=${product._id}`,{newOrderStatus:'cancle'})
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

    const handleProductReview = e => {
        setNewOrderStatus('review');       
        axios.patch(`https://glacial-ridge-32887.herokuapp.com/update-product-status?orderId=${product._id}`,{newOrderStatus:'review'})
        .then((response) => {
            if(response.data.modifiedCount) {
                navigate(`/product-review/${product._id}`,{
                    replace: true,
                })             
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
                    <Button style={{
                        textAlign: 'right',
                        marginRight: '7px',
                        backgroundColor: 'dodgerblue',
                        color: '#f5f5f5',
                        }}
                        variant="outlined"
                        onClick={handleCancleButton}
                        >
                            cancle
                    </Button>
                }
                {
                    newOrderStatus === 'confirm' && 
                    <Button style={{
                        textAlign: 'right',
                        backgroundColor: 'red',
                        color: '#f5f5f5',
                        }}
                        variant="outlined"
                        onClick={handleProductReview}
                        >
                            Review
                    </Button>
                }
            </TableCell>                            
        </TableRow>
    );
};

export default SingleMyOrder;