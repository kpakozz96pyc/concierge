import {RootState} from "../root/root";

export const cartSelector = (state: RootState) => state.cart.cart;