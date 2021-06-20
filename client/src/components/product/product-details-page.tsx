import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {currentProductSelector} from "../../selectors/catalog-selector";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {ProductDetailsComponent} from './product-details';
import {Product} from "../../../corelib/product";

export interface ProductDetailsPageProps {
}

export const ProductDetailsPage: React.FC<ProductDetailsPageProps> = () => {
    const currentProduct = useSelector(currentProductSelector) as Product;
    const dispatch = useAppDispatch();
    let {id}: {id: string} = useParams();

    useEffect(() => {
        dispatch(Actions.catalog.productPageOpened({id}));
    }, [dispatch, id]);

    return (
            <div>
                {currentProduct ? <ProductDetailsComponent item={currentProduct}/> : null}
            </div>
    );
};