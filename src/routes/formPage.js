import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

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

const salaries = [
    { id: "0", label: '0 - 1.000' },
    { id: "1", label: '1.000 - 2.000' },
    { id: "2", label: '2.000 - 3.000' },
    { id: "3", label: '3.000 - 4.000' },
    { id: "4", label: 'Mehr als 4.000' },
]

export default function FormPage() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
   
   
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        salary: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step key={'personalDetails'}>
                    <StepLabel></StepLabel>
                    <StepContent>
                        <PersonalDetails values={values} 
                                         handleChange={handleChange} 
                                         handleNext={handleNext} 
                                         handleBack={handleBack}/>
                    </StepContent>
                </Step>
                <Step key={'salary'}>
                    <StepLabel></StepLabel>
                    <StepContent>
                        <Salary values={values} 
                                salaries={salaries}
                                handleChange={handleChange}  
                                handleNext={handleNext} 
                                handleBack={handleBack}/>
                    </StepContent>
                </Step>
                <Step key={'summary'}>
                    <StepLabel></StepLabel>
                    <StepContent>
                        <Summary handleBack={handleBack} 
                                 values={values}
                                 salaries={salaries}/>
                    </StepContent>
                </Step>
            </Stepper>
        </div>
    );
}
