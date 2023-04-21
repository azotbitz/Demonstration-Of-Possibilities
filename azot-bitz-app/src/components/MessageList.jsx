import React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import {useDispatch, useSelector} from "react-redux";
import {getMessagesSelector} from "../redux/reducers/messagesReducer/messagesSelector";
import {useParams} from "react-router-dom";
import {DELETE_MESSAGE} from "../redux/actionTypes";
import Button from "@mui/material/Button";

const MessageList = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const chatsMessageList = useSelector(getMessagesSelector);
    const messageList = chatsMessageList.filter((message) => {
        if(!id) return null;

        return message.chatId === Number(id)
    })

    const deleteMessage = (id) => {
        dispatch({type: DELETE_MESSAGE, payload: id, meta: {
            delay: 3000
            }})
    }


    return (
        <div>
            <Box sx={{ marginTop: '30px', width: '100%', maxWidth: 250, minWidth: 250, backgroundColor: 'lightgrey', height: '100vh'}}>
                <List>
                    {messageList.map((msg) => {
                        return (
                        <div key={msg.id}>
                            <ListItemText sx={{border: '3px solid grey'}} primary={`${msg.message}`} />
                            <Button onClick={() => deleteMessage(msg.id)}>X</Button>
                        </div>
                        )
                    })}
                </List>
            </Box>
        </div>
    );
};

export default MessageList;