import React, {useState} from "react";
import styles from './catalog-filter.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../store/actions";
import {productListFilterSelector} from "../../selectors/catalog-selector";
import {ProductFilter} from "../../../corelib/product-filter";

export const CatalogFilterComponent: React.FC = () => {
    const currentFilter = useSelector(productListFilterSelector) as ProductFilter;
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const onSearchChange = (event)=>{
        setSearch(event.target.value);
    };

    const updateFilter = ()=>{
        let newFilter = {...currentFilter} as ProductFilter;
        console.log('currentFilter',currentFilter);
        console.log('newFilter',newFilter);
        newFilter.search = search;
        dispatch(Actions.catalog.updateProductFilter(newFilter));
    };

    return (
        <div>
            <textarea onChange={onSearchChange}></textarea>
            <button onClick={updateFilter}>Search</button>
        </div>

    );
};