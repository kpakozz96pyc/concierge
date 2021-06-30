import React from "react";
import {CatalogItemComponent} from "./catalog-item";
import {Product} from "../../../corelib/product";
import {Grid, makeStyles} from "@material-ui/core";
import {CatalogFilterComponent} from "../catalog-filter/catalog-filter";

export interface CatalogComponentProps {
    list: Product[]
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export const CatalogComponent: React.FC<CatalogComponentProps> = ({list}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <CatalogFilterComponent/>
                {list.map(i => <CatalogItemComponent item={i}/>)}
            </Grid>
        </div>
    );
};