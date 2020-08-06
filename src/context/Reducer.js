const Reducer = (state,action) => {
    switch(action.type) {
        case 'SET_TIMELINE_DATA':
            return {
                ...state,
                timelineData : action.payload
            }
        case 'UPDATE_TIMELINE_DATA':
            return {
                ...state,
                timeLineData : [...state.timelineData,action.payload]
            }
        case 'SET_MONTHLY_CREDIT':
            return {
                ...state,
                totalCreditedMonthly : action.payload
            }
        case 'SET_MONTHLY_DEBIT':
            return {
                ...state,
                totalDebitedMonthly : action.payload
            }
        case 'SET_WEEKLY_CREDIT':
            return {
                ...state,
                totalCredeitedWeekly : action.payload
            }
        case 'SET_WEEKLY_DEBIT':
            return {
                ...state,
                totalDebitedWeekly : action.payload
            }
        default:
            return state;
    }
};

export default Reducer;