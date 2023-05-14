import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./reducers/restReducer";



//create reducer
const reducer=combineReducers({
         reducer1:restReducer

})
//create middleware
const middleware=[thunk]

const store=createStore(reducer,applyMiddleware(...middleware))
 
export default store