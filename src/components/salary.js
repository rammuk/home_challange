import React, { useContext } from 'react';
import { Context } from '../Store'

import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Button, IconButton }  from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BackIcon from '@material-ui/icons/ChevronLeft';


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm, Controller } from "react-hook-form";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormGroup-root': {
            flexDirection: 'row',
            justifyContent: 'space-even',
        },
        '& .MuiFormControlLabel-root':{
            margin: theme.spacing(2),
            padding: theme.spacing(2),
            backgroundColor: 'rgb(250, 250, 250)',
            borderRadius: 6,         
        }
    },
}));

const GreenRadio = withStyles({
    root: {
        color: 'rgb(122, 196, 85);',
        '&$checked': {
            color: 'rgb(122, 196, 85);',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const schema = yup.object().shape({
    salary: yup.string().required("Required field"),   
});

const salaries = [
    { id: "0", label: '0 - 1.000' },
    { id: "1", label: '1.000 - 2.000' },
    { id: "2", label: '2.000 - 3.000' },
    { id: "3", label: '3.000 - 4.000' },
    { id: "4", label: 'Mehr als 4.000' },
]

export default function Salary(props) {
    const classes = useStyles();
    const [state, dispatch] = useContext(Context); 

    const { control, getValues } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    return (
        <>
            <Typography align="left" component="h2" variant="h4">Salary</Typography>
            <Box className={classes.root}>
                <Controller
                    render={(
                        { onChange, value ,name}                    
                    ) => (
                        <RadioGroup aria-label="salary"
                                    value={value}
                                    name={name}
                                    onChange={onChange}
                        >
                            {salaries.map((salary, index) => (
                                <FormControlLabel key={index} color="rgb(122, 196, 85)" value={salary.id} control={<GreenRadio />} label={salary.label} />
                            ))}                    
                        </RadioGroup>
                    )}                
                    defaultValue={state.salary.value}                
                    name="salary"
                    control={control}
                />
            </Box>
            <div>
                <IconButton aria-label="back" className="BackButton" onClick={ ()=>{dispatch({ type:'PREV_STEP'})} }>
                    <BackIcon />
                </IconButton>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {                              
                            let value = getValues().salary      
                            dispatch({ type: 'SET_SALARY', payload: { value,
                                                                    description: salaries[value].label } 
                                    })
                            dispatch({ type: 'NEXT_STEP' })                          
                    }}                
                >
                    Next
                </Button>
            </div>            
        </>
    );
}
