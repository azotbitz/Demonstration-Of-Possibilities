import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


const Footer = () => {
    return (
        <>
            <Paper sx={{marginTop: 'calc(10% + 60px)', bottom: 0, backgroundColor: 'bisque'}} component="footer" square variant="outlined">
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            my:1
                        }}
                    >
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "center",
                            display: "flex",
                            mb: 2,
                        }}
                    >
                        <Typography variant="caption" color="initial">
                            Copyright © 2022
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </>
    );
};

export default Footer;