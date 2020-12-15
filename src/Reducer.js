const Reducer = (state, action) => {
    
    switch (action.type) {
        case 'SET_PERSONAL_DETAIL':
            return {
                ...state,
                personalDetails: action.payload
            };
        case 'SET_SALARY':
            return {
                ...state,
                salary: action.payload
            };
        case 'NEXT_STEP':            
            return {
                ...state,
                activeStep: state.activeStep + 1
            };
        case 'PREV_STEP':
            return {
                ...state,
                activeStep: state.activeStep - 1
            };
        default:
            return state;
    }
};

export default Reducer;