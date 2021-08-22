import React from "react";
import {IconButton, Toolbar, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Cart} from "../../../corelib/cart";
import {useSelector} from "react-redux";
import {cartSelector} from "../../selectors/cart-selector";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    cart: {
      float:'right'
    },
    cartLink:{
        color: '#ffffff'
    },
}));

export const AppHeader: React.FC = () => {
    const classes = useStyles();
    const cart = useSelector(cartSelector) as Cart;
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Theater
                </Typography>

                <Link to="/cart" className={classes.cartLink}><IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                    <Typography variant="h6" className={classes.title}>
                        {cart?.purchases?.length || 0}
                    </Typography><ShoppingCartIcon />
                </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
};