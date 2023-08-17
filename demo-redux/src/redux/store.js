import {createStore, applyMiddleware, combineReducers} from "redux";
import productReducer from "./productReducer";
import thunk from "redux-thunk";
import studentReducer from "./studentReducer";
const reducer = combineReducers({
    products: productReducer,
    students: studentReducer
})
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
