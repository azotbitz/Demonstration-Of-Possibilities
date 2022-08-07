import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginInitiate} from "../redux/reducers/userReducer/userReducer";
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {useNavigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate('/')
        }
    },[user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || ! password) {
            return;
        }
        dispatch(loginInitiate(email, password))
    }

    const signUp = () => {
        navigate('/registration')
    }

    return (
        <div>
            <h2>Login Page</h2>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                }}
                autoComplete="off"
            >
            <form style={{display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}} onSubmit={handleSubmit}>
                <TextField type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <Button variant='contained' type={'submit'}>LOG IN</Button>
            </form>
            </Box>
            <br/>
            <hr/>
            <h2>You Have Not Login?</h2>
            <Button variant='outlined' onClick={signUp}>SIGN UP</Button>
        </div>
    );
};

export default LoginPage;