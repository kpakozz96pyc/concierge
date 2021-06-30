import React from "react";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import styles from "./catalog-item.module.scss"
import {Link} from "react-router-dom";
import {Product} from "../../../corelib/product";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

export interface CatalogItemComponentProps {
    item?: Product
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    contentBlock: {
        textAlign: 'center'
    },
    dateBlock: {
        padding: theme.spacing(1),
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textBlock: {
        textAlign: 'justify'
    },
    dateItem: {
        flexGrow: 1,
        display: 'flex'
    }
}));

export const CatalogItemComponent: React.FC<CatalogItemComponentProps> = ({item}) => {
    const classes = useStyles();

    const getDayName = (date: Date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour12: false
        };
        return date.toLocaleDateString([], options);
    }

    const getTime = (date: Date) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        return date.toLocaleTimeString([], options);
    }

    return <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper className={classes.paper}>
            <div className={classes.contentBlock}>
                <div className={styles.cards_image}><img src={item.img}/></div>
                <div className={classes.dateBlock}>
                    <div className={classes.dateItem}>
                        <EventAvailableIcon/>&nbsp;{getDayName(new Date(item.extended.start))}
                    </div>

                    <div className={classes.dateItem}>
                        <AccessTimeIcon/>&nbsp;{getTime(new Date(item.extended.start))}</div>
                </div>
                <div className={styles.card_content}>
                    <h2 className={styles.card_title}>{item.displayName}</h2>
                    <p className={classes.textBlock}>{item.descriptionText}</p>

                    <Link className={styles.btn + ' ' + styles.card_btn} to={`/product/${item.id}`}>Buy</Link>
                </div>
            </div>
        </Paper>
    </Grid>
};