import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';


const Layout = () => {
    return (
        <>
            <Header />
            <Toolbar />
            <Container>
                <Box >
            <main>
                <Outlet />
            </main>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Layout;