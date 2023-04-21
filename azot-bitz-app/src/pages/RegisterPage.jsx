import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {registerInitiate} from "../redux/reducers/userReducer/userReducer";
import {useNavigate} from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const RegisterPage = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
            if(!user) {
                return;
            }
            navigate('/login')
            }
    , [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordRepeat){
            alert('Password Invalid')
            return;
        }
        dispatch(registerInitiate(email, password, nickname))
        navigate('/login')
    }

    const logIn = () => {
        navigate('/login')
    }

    return (
        <div>
            <h2>Registration Page</h2>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                }}
                autoComplete="off"
            >
            <form style={{display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}} onSubmit={handleSubmit}>
                <TextField placeholder='Nickname' type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}></TextField>
                <TextField placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}></TextField>
                <TextField placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
                <TextField placeholder='Password Again' type="password" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}></TextField>
                <br/>
                <Button variant='contained' type='submit'>SIGN UP</Button>
            </form>
            </Box>
            <br/>
            <hr/>
            <h2>Do You Have Account Yet?</h2>
            <Button variant='outlined' onClick={logIn}>LOG IN</Button>
        </div>
    );
};

export default RegisterPage;