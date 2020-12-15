import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ChevronLeft';

export default function Salary(props) {
    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="salary" name="salary" value={props.values.salary} onChange={props.handleChange('salary')}>
                {props.salaries.map((salary, index) => (
                    <FormControlLabel key={index} value={salary.id} control={<Radio />} label={salary.label} />
                ))}
            </RadioGroup>
            <div>
                <IconButton aria-label="back" onClick={props.handleBack}>
                    <BackIcon />
                </IconButton>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleNext}>
                    Next
                </Button>
            </div>
        </FormControl>
    );
}
