import React, { useContext } from 'react';
import { Context } from '../Store'


import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ChevronLeft';

export default function Summary() {
    const [state, dispatch] = useContext(Context); 

    return (
        <div>
            <div>
                Full name: {state.personalDetails.fullName}
            </div>
            <div>
                Email: {state.personalDetails.email}
            </div>
            <div>
                Phone number: {state.personalDetails.phone}
            </div>
            <div>
                Salary: {state.salary.description}
            </div>
            <div>
                <IconButton aria-label="back" onClick={() => { dispatch({ type: 'PREV_STEP' }) } }>
                    <BackIcon />
                </IconButton>
            </div>

        </div>
    );
}
