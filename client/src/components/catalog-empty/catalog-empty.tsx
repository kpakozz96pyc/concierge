import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import NotInterestedIcon from '@material-ui/icons/NotInterested';

const useStyles = makeStyles((theme) => ({
    block: {
        width:'100%',
        flexGrow: 1,
        textAlign: 'center'
    }
}));

export const CatalogEmptyComponent: React.FC = () => {
    const classes = useStyles();
    return (<Grid item xs={12}>
            <div className={classes.block}>
                <h2><NotInterestedIcon/>&nbsp; Nothing found</h2></div>
        </Grid>

    );
};