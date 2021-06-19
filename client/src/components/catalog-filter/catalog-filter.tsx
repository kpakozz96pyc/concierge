import React, {useState} from "react";
import styles from './catalog-filter.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../store/actions";
import {productListFilterSelector} from "../../selectors/catalog-selector";
import {ProductFilter} from "../../../corelib/product-filter";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CatalogFilterComponent: React.FC = () => {
    const currentFilter = useSelector(productListFilterSelector) as ProductFilter;
    const [search, setSearch] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const dispatch = useDispatch();

    const onSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const onFromDateChange = (date: Date) => {
        setFromDate(date);
    }

    const onToDateChange = (date: Date) => {
        setToDate(date);
    }

    const updateFilter = () => {
        let newFilter = {...currentFilter} as ProductFilter;
        newFilter.fromDate = fromDate;
        newFilter.toDate = toDate;
        newFilter.search = search;
        dispatch(Actions.catalog.updateProductFilter(newFilter));
    };

    return (
        <div>
            <input type='text' onChange={onSearchChange}/>
            <DatePicker selected={fromDate} onChange={onFromDateChange}/>
            <DatePicker selected={toDate} onChange={onToDateChange}/>
            <button onClick={updateFilter}>Search</button>
        </div>

    );
};