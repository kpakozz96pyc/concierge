import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../../store/actions";
import {ProductFilter} from "../../../corelib/product-filter";
import Button from '@material-ui/core/Button';
import {KeyboardDatePicker} from "@material-ui/pickers";
import {Grid, makeStyles, Paper, TextField} from "@material-ui/core";
import styles from "./catalog-filter.module.scss"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    dateFilter: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
}));

export const CatalogFilterComponent: React.FC = () => {
    const classes = useStyles();
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
        setTimeout(() => dispatch(Actions.catalog.updateProductFilter(newFilter)))
    };

    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper className={classes.paper}>
                <div className={styles.searchBar}>
                    <TextField fullWidth={true} margin="normal" label="Search" onChange={onSearchChange}/>

                    <KeyboardDatePicker
                        margin="normal"
                        className={classes.dateFilter}
                        label="Date from"
                        format="dd/MM/yyyy"
                        value={fromDate}
                        onChange={onFromDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        className={classes.dateFilter}
                        label="Date to"
                        format="dd/MM/yyyy"
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
            </Paper>
        </Grid>
    );
};