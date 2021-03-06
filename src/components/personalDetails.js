
import React, { useContext } from 'react';
import { Context } from '../Store'


import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, TextField, Button } from '@material-ui/core';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexWrap:'wrap',
        justifyContent: 'space-even',
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            minWidth: '250px',   
            width: '30%',
        },
    },
}));

const schema = yup.object().shape({
    fullName: yup.string().required("Required field"),
    email: yup.string().required("Required field").email("Please enter valid email address"),
});


export default function PersonalDetails(props) {
    const classes = useStyles();
    const [state, dispatch] = useContext(Context); 

    const { register, errors, trigger , getValues } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    
    return (
        <>        
            <Typography align="left" component="h2" variant="h4">Personal details</Typography>
            <Box className={classes.root}>
                <TextField                  
                    inputRef={register({ required: true })}
                    error={ (errors.fullName)?true:false }                  
                    name="fullName"                                 
                    helperText={errors.fullName?.message}                
                    variant="outlined"                
                    placeholder="Full name*"
                    defaultValue={state.personalDetails.fullName}                
                />
                <TextField
                    inputRef={register({ required: true })}
                    error={(errors.email)?true:false}                
                    name="email"                                                                
                    helperText={errors.email?.message }
                    variant="outlined"
                    type="email"
                    placeholder="Email*"
                    defaultValue={state.personalDetails.email} 
                    
                />            
                <TextField
                    inputRef={register}
                    name="phone"                
                    helperText=""
                    variant="outlined"
                    placeholder="Phone number"                
                    defaultValue={state.personalDetails.phone} 
                />
            </Box>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={async () => {
                        let result = await trigger(['fullName', 'email']);                        
                        if (result) { 
                            dispatch({ type: 'SET_PERSONAL_DETAIL', payload: getValues() }) 
                            dispatch({ type: 'NEXT_STEP' }) 
                        }
                    }}
                >
                    Next
                </Button>
            </div>
        </>
    );
}
