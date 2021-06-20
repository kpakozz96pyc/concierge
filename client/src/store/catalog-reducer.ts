import {createReducer} from "typesafe-actions";
import {Actions} from "./actions";
import {combineReducers} from "redux";
import {ProductFilter} from "../../corelib/product-filter";
import {Product} from "../../corelib/product";

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
        return action.payload
    });

export const catalogReducer = () =>
    combineReducers({
        productList,
        currentProduct,
        productListFilter
    });