import React, { useContext } from 'react';
import { Context } from '../Store'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Paper, Box, Stepper, Step, StepLabel, StepContent } from '@material-ui/core';

import PersonalDetails from '../components/personalDetails';
import Salary from '../components/salary';
import Summary from '../components/summary';


const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                padding: '10px 30px',
                background: 'rgb(122, 196, 85)!important',
                borderRadius: '6.25rem',
            },
        },
        MuiIconButton:{
            root: {
                '&.BackButton':{
                    marginRight: '20px',
                    color: 'rgb(122, 196, 85)',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px, rgba(182, 182, 182, 0.5) 0px 1px 2px'
                }
            }
        },
        MuiStepIcon:{
            active:{
                color: 'rgb(122, 196, 85)!important',
            },
            completed:{
                color: 'rgb(122, 196, 85)!important'
            }
        }
    },
});

export default function FormPage() {
    
    const [state] = useContext(Context);    
    
    return (        
        <ThemeProvider theme={theme}>
            <Paper elevation={0} square>
                <Stepper activeStep={state.activeStep} orientation="vertical">
                    <Step key={'personalDetails'}>
                        <StepLabel></StepLabel>
                        <StepContent>
                            <Box width="100%">
                                <PersonalDetails/>
                            </Box>
                        </StepContent>
                    </Step>
                    <Step key={'salary'}>
                        <StepLabel></StepLabel>
                        <StepContent>
                            <Box width="100%">
                                <Salary />
                            </Box>
                        </StepContent>
                    </Step>
                    <Step key={'summary'}>
                        <StepLabel></StepLabel>
                        <StepContent>
                            <Box width="100%">
                                <Summary />
                            </Box>
                        </StepContent>
                    </Step>
                </Stepper>
            </Paper>
        </ThemeProvider>
    );
}
