import React, { useContext } from 'react';
import { Context } from '../Store'

import { makeStyles } from '@material-ui/core/styles';

import {Typography, IconButton, Box} from '@material-ui/core';
import BackIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-even',
        '& .MuiBox-root': {
            margin: theme.spacing(2),

        },
    },
}));

export default function Summary() {
    const classes = useStyles();
    const [state, dispatch] = useContext(Context); 

    return (
        <>
            <Typography align="left" component="h2" variant="h4">Summary</Typography>
            <Box className={classes.root}>
                <Box>
                    <Typography align="left" component="h6" variant="h6">Full name</Typography> 
                    <Typography align="left" component="span" variant="body2">{state.personalDetails.fullName}</Typography>
                </Box>
                <Box>
                    <Typography align="left" component="h6" variant="h6">Email</Typography>
                    <Typography align="left" component="span" variant="body2">{state.personalDetails.email}</Typography> 
                </Box>
                <Box>
                    <Typography align="left" component="h6" variant="h6">Phone number</Typography> 
                    <Typography align="left" component="span" variant="body2">{state.personalDetails.phone}</Typography>
                </Box>
                <Box>
                    <Typography align="left" component="h6" variant="h6">Salary</Typography> 
                    <Typography align="left" component="span" variant="body2">{state.salary.description}</Typography>
                </Box>                
            </Box>
            <div>
                <IconButton aria-label="back" className="BackButton" onClick={() => { dispatch({ type: 'PREV_STEP' }) }}>
                    <BackIcon />
                </IconButton>
            </div>
        </>
    );
}
