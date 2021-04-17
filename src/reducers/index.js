import {combineReducers} from "redux";
import {createStore} from "redux";
import {FindCoupleReducer} from "./find_couple";

const reducerBox = combineReducers({
    FindCoupleReducer: FindCoupleReducer
});
export const store = createStore(reducerBox)