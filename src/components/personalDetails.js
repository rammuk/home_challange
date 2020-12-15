
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));


export default function PersonalDetails(props) {
    const classes = useStyles();
    
    return (
        <form className={classes.root} autoComplete="off">
            <TextField
                id="fullName"
                helperText=""
                variant="outlined"
                placeholder="Full name"
                value={props.values.fullName}
                onChange={props.handleChange('fullName')}
            />
            <TextField
                id="email"
                helperText=""
                variant="outlined"
                placeholder="Email"
                value={props.values.email}
                onChange={props.handleChange('email')}
            />
            <TextField
                id="phoneNumber"
                helperText=""
                variant="outlined"
                placeholder="Phone number"
                value={props.values.phoneNumber}
                onChange={props.handleChange('phoneNumber')}
            />
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleNext}>
                    Next
                </Button>
            </div>
        </form>
        
    );
}
