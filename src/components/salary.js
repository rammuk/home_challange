import React, { useContext } from 'react';
import { Context } from '../Store'

import { Radio, RadioGroup, FormControlLabel, FormControl, Button, IconButton }  from '@material-ui/core';
import BackIcon from '@material-ui/icons/ChevronLeft';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm, Controller } from "react-hook-form";

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
    const [state, dispatch] = useContext(Context); 

    const { control, getValues } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    return (
        <FormControl component="fieldset">
            <Controller
                render={(
                    { onChange ,name}                    
                ) => (
                    <RadioGroup aria-label="salary"
                            defaultValue={state.salary.value}
                                name={name}
                                onChange={ e=>{onChange(e.target.value)} }
                    >
                        {salaries.map((salary, index) => (
                            <FormControlLabel key={index} value={salary.id} control={<Radio />} label={salary.label} />
                        ))}                    
                    </RadioGroup>
                )}                
                defaultValue={state.salary.value}                
                name="salary"
                control={control}
            />
            <div>
                <IconButton aria-label="back" onClick={ ()=>{dispatch({ type:'PREV_STEP'})} }>
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
        </FormControl>
    );
}
