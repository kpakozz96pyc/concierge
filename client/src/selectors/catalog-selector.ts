import {RootState} from "../root/root";

export const productListSelector = (state: RootState) => state.catalog.productList;

export const productListFilterSelector = (state: RootState) => state.catalog.productListFilter;

export const currentProductSelector = (state: RootState) => state.catalog.currentProduct;
