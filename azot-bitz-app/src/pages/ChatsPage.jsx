import React, {useEffect, useRef, useState} from 'react';
import {Button, Container, CssBaseline, FormGroup, makeStyles, useTheme} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import NestedList from "../components/ChatList";
import MessageList from "../components/MessageList";
import MessageSender from "../components/MessegeSender"
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const ChatsPage = () => {

        const [author, setAuthor] = useState('');
        const [changer, setChanger] = useState(false);
        const [messageList2, setMessageList2] = useState([]);
        const [chatArray, setChatArray] = useState([]);

        useEffect(() => {

                if(changer) {
                    setChanger(!changer);
                    setAuthor('')
                }
            }, [messageList2]
        );




        return (
            <div>
                <CssBaseline />
                <Container fixed >
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Item>
                            <NestedList />
                        </Item>
                        <Item>
                            <MessageList />
                        </Item>
                        <Item>
                            <MessageSender />
                        </Item>
                    </Stack>
                </Container>
            </div>
    );
};

export default ChatsPage;