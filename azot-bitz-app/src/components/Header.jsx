import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CustomLink from "./CustomLink";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {useNavigate} from "react-router-dom";
import {logoutInitiate} from "../redux/reducers/userReducer/userReducer";


const Header = (props) => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const drawerWidth = 240;
    const navItems = [
        {btn: <CustomLink to={'/'}>Contact Page</CustomLink>, id: 1},
        {btn: <CustomLink to={'add/:id'}>Add Contact</CustomLink>, id: 2},
        {btn: <CustomLink to={'/todos'}>Todos</CustomLink>, id: 3},
        {btn: <CustomLink to={'/chats'}>Chats</CustomLink>, id: 4},
        {btn: <CustomLink to={'/about'}>About</CustomLink>, id: 5}
    ];
    const navItems2 = [{btn: <CustomLink to={'/registration'}>Registration</CustomLink>, id: 6}]
    const handleAuth = () => {
        if(user) {
           dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    };
    const navToLogin = () => {
        navigate('/login')
    }
        const { window } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);

        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };
        const drawer = (
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    MUI
                </Typography>
                <Divider />
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.id} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center'}}>
                                <ListItemText primary={item.btn} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );

        const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <header>
            <Box sx={{ display: 'flex'}}>
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="warning"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Azot Bitz App
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            { user ? navItems.map((item) => (
                                <Button key={item.id}>
                                    {item.btn}
                                </Button>
                                ))
                                : navItems2.map((item) => (
                                <Button key={item.id}>
                                    {item.btn}
                                </Button>
                                ))
                            }
                            { user ?
                                <Button variant='outlined' style={{color: "yellow"}} key='10' onClick={handleAuth}>Sign
                                    Out</Button>
                                :
                                    <Button variant='outlined' style={{color: "yellow"}} key='11' onClick={navToLogin}>Sign In</Button>
                            }
                            </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </header>
    );
}


export default Header;

