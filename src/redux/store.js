import { createStore, combineReducers  } from "redux";
import { reducer as formReducer } from 'redux-form' 
import calendarReducer from "./reducers/calendarReducer";

const rootReducer = combineReducers({
    calendar: calendarReducer,
    form: formReducer,
})

let store = createStore(rootReducer)
export default store