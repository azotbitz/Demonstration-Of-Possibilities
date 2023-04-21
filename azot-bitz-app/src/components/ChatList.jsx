import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Button, Divider, FormGroup} from "@material-ui/core";
import CustomLink from "./CustomLink";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {getChatSelector} from "../redux/reducers/chatsReducer/chatsSelector";
import {ADD_CHAT} from "../redux/actionTypes";


export default function NestedList() {
    const [open, setOpen] = React.useState(true);
    const [chatUser, setChatUser] = useState('');
    const handleClick = () => {
        setOpen(!open);
    };



    const chatList = useSelector(getChatSelector);
    const dispatch = useDispatch();

    const addChatUser = () => {
        const obj = {
            id: Math.random(),
            name: chatUser
        }
        dispatch({type: ADD_CHAT, payload: obj})
    }
    const deleteChatUser = (chatUser) => {
        dispatch({type: "DELETE_CHAT", payload: chatUser})
    }

        return(
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    ChatList
                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Chats" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider/>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormGroup action=''>
                <input placeholder='Add Chat' type="text" className='input'
                       value={chatUser} onChange={(e) => setChatUser(e.target.value)}/>
                    <Button variant="contained" onClick={addChatUser}>+</Button>
                </FormGroup>
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {chatList.map((cUser) => {
                    return(
                        <List component="div" disablePadding key={cUser.id}>
                            <Divider/>
                            <CustomLink to={`/chats/${cUser.id}`}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon/>
                                    </ListItemIcon>
                                    <ListItemText style={{color:'darkgrey'}} primary={<p>{cUser.name}</p>}/>
                                </ListItemButton>
                            </CustomLink>
                            <Button variant="contained" onClick={() => deleteChatUser(cUser.id)}>-</Button>
                            <Divider/>
                        </List>
                    )
                })}
            </Collapse>
        </List>
        )}
