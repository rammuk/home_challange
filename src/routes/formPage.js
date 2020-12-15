import React, { useContext } from 'react';
import { Context } from '../Store'

import { makeStyles } from '@material-ui/core/styles';
import { Box, Stepper, Step, StepLabel, StepContent } from '@material-ui/core';

import PersonalDetails from '../components/personalDetails';
import Salary from '../components/salary';
import Summary from '../components/summary';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%', 
        height: '100%',
    },
    step:{
        padding: '24px',
    },
    
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function FormPage() {
    const classes = useStyles();
    const [state] = useContext(Context);    
    
    return (
        <div className={classes.root}>
            <Stepper activeStep={state.activeStep} orientation="vertical">
                <Step key={'personalDetails'}>
                    <StepLabel></StepLabel>
                        <StepContent>
                            <Box width={300}>
                                <PersonalDetails/>
                        </Box>
                    </StepContent>
                </Step>
                <Step key={'salary'}>
                    <StepLabel></StepLabel>
                    <StepContent>
                        <Box width={300}>
                            <Salary />
                        </Box>
                    </StepContent>
                </Step>
                <Step key={'summary'}>
                    <StepLabel></StepLabel>
                    <StepContent>
                        <Box width={300}>
                            <Summary />
                        </Box>
                    </StepContent>
                </Step>
            </Stepper>
        </div>
    );
}
