import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store/app-dispatch";
import React from "react";
import {cartSelector} from "../../selectors/cart-selector";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Purchase} from "../../../corelib/purchase";
import {Typography} from "@material-ui/core";
import {SeatType} from "../../../corelib/seat-type";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export const CartPage = () => {
    const cart = useSelector(cartSelector) as { purchases: Purchase[] };
    const dispatch = useAppDispatch();

    const classes = useStyles();

    return (
        <div>
            <div>
                {cart.purchases.length > 0 ?
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Concert</TableCell>
                                    <TableCell align="right">Art</TableCell>
                                    <TableCell align="right">Seat type</TableCell>
                                    <TableCell align="right">Seat row</TableCell>
                                    <TableCell align="right">Seat number</TableCell>
                                    <TableCell align="right">Price($)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.purchases.map((purchase, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">
                                            {purchase.product.displayName}
                                        </TableCell>
                                        <TableCell align="right">{purchase.product.art}</TableCell>
                                        <TableCell align="right">{SeatType[purchase.description.seat.type]}</TableCell>
                                        <TableCell align="right">
                                            {purchase.description.seat.type == SeatType.Parterre ? purchase.description.seat.row + 1 : null}
                                        </TableCell>
                                        <TableCell align="right">{purchase.description.seat.number + 1}</TableCell>
                                        <TableCell align="right">{purchase.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <div>
                        <Typography variant="h1" component="h2">
                            Your cart is empty. Buy something! :D
                        </Typography>
                    </div>}

            </div>

            <pre><code>{JSON.stringify(cart)}</code></pre>
        </div>
    );
};