import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {ProductFilter} from "../../corelib/product-filter";
import {Product} from "../../corelib/product";
import {HallHelper} from "../healpers/hall-helper";
import {SeatStatus} from "../../corelib/seat-status";

const productList = createReducer<Product[]>([])
    .handleAction(Actions.catalog.searchCatalog.success, (state: any, action: any) => {
        return action.payload
    });

const productListFilter = createReducer<ProductFilter           >({pageNumber:0, pageSize: 10} as ProductFilter)
    .handleAction(Actions.catalog.updateProductFilter, (state: any, action: any) => {
        return action.payload
    });

const currentProduct = createReducer<Product| null>(null)
    .handleAction(Actions.catalog.loadProduct.success, (state: any, action: any) => {
        return action.payload;
    })
    .handleAction(Actions.cart.addToCart, (state: Product, action: any) => {
        const buySeat = action.payload.description.seat;
        const seat = HallHelper.FindSeat(state.extended.hall, buySeat.type, buySeat.number, buySeat.row);
        seat.status = SeatStatus.Reserved;
        return {...state};
    });

export const catalogReducer = () =>
    combineReducers({
        productList,
        currentProduct,
        productListFilter
    });