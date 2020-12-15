import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ChevronLeft';

export default function Summary(props) {
    return (
        <div>
            <div>
                Full name: {props.values.fullName}
            </div>
            <div>
                Email: {props.values.email}
            </div>
            <div>
                Phone number: {props.values.phoneNumber}
            </div>
            <div>
                Salary: {props.salaries[props.values.salary].label}
            </div>
            <div>
                <IconButton aria-label="back" onClick={props.handleBack}>
                    <BackIcon />
                </IconButton>
            </div>

        </div>
    );
}
