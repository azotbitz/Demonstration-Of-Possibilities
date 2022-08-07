import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AboutPage() {
    return (
        <Card sx={{ maxWidth: 700, paddingTop: '20px',margin: '0 auto', justifyContent: 'center' }}>
            <CardMedia
                component="img"
                height="700"
                image={require('../images/VK.jpg')}
                alt="Vasily"
                border='4px solid black'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Profile
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Vasily Kulikov
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};