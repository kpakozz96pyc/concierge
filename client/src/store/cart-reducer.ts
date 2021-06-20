import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {Cart} from "../../corelib/cart";

const cart = createReducer<Cart>( {purchases: []} as Cart)
    .handleAction(Actions.cart.addToCart, (state: any, action: any) => {
        state.purchases.push(action.payload);
        return {...state};
    });

export const cartReducer = () =>
    combineReducers({
        cart
    });