const ACTION_TYPE_1 = 'ACTION_TYPE_1',
ACTION_TYPE_2 = 'ACTION_TYPE_2' 
const nameInitialState = {}
const calendarReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}

export default calendarReducer 