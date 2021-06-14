import {useSelector} from "react-redux";
import {productListSelector} from "../../selectors/catalog-selector";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import React, {useEffect} from "react";
import {Product} from "../../models/product";
import {CatalogComponent} from "../../components/catalog/catalog";
import {ProductFilter} from "../../../corelib/product-filter";
import {CatalogFilterComponent} from "../../components/catalog-filter/catalog-filter";

export const CatalogPage = () => {
    const list = useSelector(productListSelector) as Product[];
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(Actions.catalog.updateProductFilter(
            {pageNumber: 0, pageSize: 10} as ProductFilter
        ));
    }, [dispatch]);

    return (
        <div>
            <CatalogFilterComponent/>
            <CatalogComponent list={list}/>
        </div>
    );
};