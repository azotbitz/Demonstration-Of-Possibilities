import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, FormGroup, makeStyles} from "@material-ui/core";
import {ADD_MESSAGE, addMessage} from "../redux/actionTypes";
import {useParams} from "react-router-dom";


const useStyles = makeStyles({
    text: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center',
    },
    form: {
        width: 200 + 'px',
        alignItems: 'center',
    }})


const MessageSender = () => {

    const styles = useStyles();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const {id} = useParams();


    const sendMessage = () => {
        const obj = {
            chatId: Number(id),
            message: title,
            id: Math.random()
        }
        dispatch({
            type: ADD_MESSAGE,
            payload: obj
        })

    }


    return (
        <div>
            <FormGroup className={styles.form} action=''>
                <h4 className={styles.text}>TEXT</h4>
                <input type="text" className='input' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <h4 className={styles.text}>SEND MESSAGE</h4>
                <Button onClick={sendMessage}>+</Button>
            </FormGroup>
        </div>
    );
};

export default MessageSender;