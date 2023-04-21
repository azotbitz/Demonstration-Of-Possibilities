import React from 'react';
import Button from "@mui/material/Button";
import CustomLink from "../components/CustomLink";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page Not Found. Try Again Later.</h1>
            <hr/>
            <CustomLink to={'/'}><Button variant="contained">Home</Button></CustomLink>
        </div>
    );
};

export default NotFoundPage;