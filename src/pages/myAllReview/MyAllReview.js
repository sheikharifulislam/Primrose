import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import UseFirebaseAuth from '../../customhook/UseFirebaseAuth';

const MyAllReview = () => {

    const [allReviews, setAllReviews] = useState([]);
    const {user} = UseFirebaseAuth();

    useEffect(() => {
        axios.get(`http://localhost:5000/all-reviews?userEmail=${user.email}`)
        .then((response) => {
            setAllReviews(response.data);           
        })
        .catch((error) => {
            console.log(error.message);
        })
    },[user.email])  

    return (
        <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Review Text</TableCell>
                            <TableCell align="center">Review Data</TableCell>
                            <TableCell align="center">Star</TableCell>
                                      
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allReviews.map((review) => (
                                <TableRow
                                key={review._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row" style={{width: '50%'}}>
                                    {review?.reviewText}
                                </TableCell>
                                <TableCell align="center">{review?.reviewData}</TableCell>
                                <TableCell align="center">{review.star}</TableCell>  
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
};

export default MyAllReview;