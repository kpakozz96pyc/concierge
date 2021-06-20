import {ActionType, StateType} from "typesafe-actions";
import {Actions} from "../store/actions";
import { combineReducers } from "redux";
import {catalogReducer} from "../store/catalog-reducer";
import {userReducer} from "../store/user-reducer";
import {cartReducer} from "../store/cart-reducer";

export const rootReducer = () =>
    combineReducers({
        catalog: catalogReducer(),
        user: userReducer(),
        cart: cartReducer()
    });

export type RootState = StateType<ReturnType<typeof rootReducer>>;
export type RootAction = ActionType<typeof Actions>;