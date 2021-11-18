import axios from 'axios';
import React, { useState } from 'react';
import './makeAdmin.css';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleInput = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdminForm = e => {
        const userEmail = {email}
        e.preventDefault();
        axios.patch('https://glacial-ridge-32887.herokuapp.com/create-new-admin',userEmail)
        .then((response) => {           
            if(response.data.modifiedCount >= 1) {               
                alert('Succefully Create Admin');
                e.target.reset();
            }
            
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <div className="create-admin-section">
            <h2>Create A New Admin</h2>
            <div className="create-admin-form-section">
                <form onSubmit={handleMakeAdminForm}>
                    <input type="email" placeholder="Enter Your Create Admin Email" onInput={handleInput} required/>
                    <input type="submit" value="Create" id="create-admin-btn"/>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;