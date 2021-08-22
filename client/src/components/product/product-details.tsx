import React, {useCallback} from "react";
import styles from "./product-details.module.scss"
import {Button} from "@material-ui/core";
import {Product} from "../../../corelib/product";
import {useAppDispatch} from "../../store/app-dispatch";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {SeatType} from "../../../corelib/seat-type";

import {HallHelper} from "../../healpers/hall-helper";
import {SeatStatus} from "../../../corelib/seat-status";
import {Actions} from "../../store/actions";
import {Purchase} from "../../../corelib/purchase";


export interface ProductDetailsComponentProps {
    item: Product
}

export const ProductDetailsComponent: React.FC<ProductDetailsComponentProps> = ({item}) => {

    const startDate = new Date(item.extended.start);
    const dispatch = useAppDispatch();

    const [seatType, setSeatType] = React.useState(SeatType.Parterre);
    const [row, setRow] = React.useState(0);
    const [seatNumber, setSeatNumber] = React.useState(undefined);

    const handleSeatTypeChange = (event) => {
        setSeatType(event.target.value);
        setRow(undefined);
        setSeatNumber(undefined);
    };

    const handleRowChange = (event) => {
        setRow(event.target.value);
        const seatNumber = HallHelper
            .GetFreeSeatNumbersByTypeAndRow(item.extended.hall, seatType, row)
            .sort((a, b) => a - b)[0];
        setSeatNumber(seatNumber);
    };

    const handleSeatNumberChange = (event) => {
        setSeatNumber(event.target.value);
    };

    const currentSeat = () =>{
        return HallHelper.FindSeat(item.extended.hall, seatType, seatNumber, row);
    };

    const buy = useCallback(() => {
        let seat = currentSeat();
        setSeatNumber(undefined);
        setRow(undefined);
        setSeatType(SeatType.Parterre);

        dispatch(Actions.cart.addToCart({
            product: item,
            price: 1000,
            description: {
                seat
            }
        } as Purchase))
    }, [seatNumber,seatType, row, dispatch]);

    return <div className={styles.mainContainer}>
        <h1>{item.displayName}</h1>

        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <img src={item.img}/>
            </div>
            <div className={styles.description}>
                <div>{item.descriptionText}</div>
                <div className={styles.details}>
                    <div>{startDate.getDate()}</div>
                    <div>{startDate.toLocaleString('default', {month: 'long'})}</div>
                    <div>{startDate.getHours()} : {('0' + startDate.getMinutes()).slice(-2)}</div>


                    <div className={styles.buyBlock}>
                        <div>{seatType}</div>
                        <div>{seatNumber}</div>
                        <div>{row}</div>
                        <FormControl className={styles.seatSelect}>
                            <InputLabel>Seat type</InputLabel>
                            <Select
                                id="select-seat-type"
                                value={seatType}
                                onChange={handleSeatTypeChange}
                            >
                                {HallHelper.GetFreeSeatTypes(item.extended.hall)
                                    .map(t => <MenuItem value={t}>{SeatType[t]}</MenuItem>)}
                            </Select>
                        </FormControl>

                        {seatType === SeatType.Parterre ? <FormControl className={styles.seatSelect}>
                            <InputLabel>Row</InputLabel>
                            <Select
                                id="select-seat-row"
                                value={row}
                                onChange={handleRowChange}
                                displayEmpty={true}
                            >

                                {HallHelper.GetFreeParterreRowNumbers(item.extended.hall)
                                    .sort((a, b) => a - b)
                                    .map(row => <MenuItem value={row}>{row + 1}</MenuItem>)}
                            </Select>
                        </FormControl> : null}

                        <FormControl className={styles.seatSelect}>
                            <InputLabel>Seat Number</InputLabel>
                            <Select
                                id="select-seat-number"
                                value={seatNumber}
                                onChange={handleSeatNumberChange}
                            >

                                {HallHelper.GetFreeSeatNumbersByTypeAndRow(item.extended.hall, seatType, row).sort((a, b) => a - b)
                                    .map(s => <MenuItem value={s}>{s + 1}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.actionsBlock}>
            <Button onClick={buy} disabled={!currentSeat() || currentSeat()?.status != SeatStatus.Free}> Buy </Button>
        </div>
    </div>
};