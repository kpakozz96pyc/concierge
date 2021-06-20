import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../store/actions";
import {ProductFilter} from "../../../corelib/product-filter";
import Button from '@material-ui/core/Button';
import {KeyboardDatePicker} from "@material-ui/pickers";
import {TextField} from "@material-ui/core";
import styles from "./catalog-filter.module.scss"

export const CatalogFilterComponent: React.FC = () => {
    const [search, setSearch] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const dispatch = useDispatch();

    const onSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const onFromDateChange = (date: Date) => {
        setFromDate(date);
    };

    const onToDateChange = (date: Date) => {
        setToDate(date);
    };

    const updateFilter = () => {
        let newFilter = {
            pageNumber: 0,
            pageSize: 9,
            fromDate: fromDate,
            toDate: toDate,
            search: search
        } as ProductFilter;
        newFilter.fromDate = fromDate;
        newFilter.toDate = toDate;
        newFilter.search = search;
        setTimeout(()=> dispatch(Actions.catalog.updateProductFilter(newFilter)))
    };

    return (
        <div className={styles.searchBar}>
            <TextField margin="normal" label="Search" onChange={onSearchChange}/>
            <KeyboardDatePicker
                margin="normal"
                label="Date from"
                format="MM/dd/yyyy"
                value={fromDate}
                onChange={onFromDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />

            <KeyboardDatePicker
                margin="normal"

                label="Date to"
                format="MM/dd/yyyy"
                value={toDate}
                onChange={onToDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />

            <div>
                <Button onClick={updateFilter}>Search</Button>
            </div>
        </div>
    );
};