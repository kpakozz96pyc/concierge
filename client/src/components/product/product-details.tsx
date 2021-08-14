import React from "react";
import styles from "./product-details.module.scss"
import {Button} from "@material-ui/core";
import {Product} from "../../../corelib/product";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {Purchase} from "../../../corelib/purchase";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {SeatType} from "../../../corelib/seat-type";
import {EnumHelpers} from "../../healpers/enum-helper";
import {SeatStatus} from "../../../corelib/seat-status";
import {Seat} from "../../../corelib/seat";
import {HallHealper} from "../../healpers/hall-healper";


export interface ProductDetailsComponentProps {
    item: Product
}

export const ProductDetailsComponent: React.FC<ProductDetailsComponentProps> = ({item}) => {

    const startDate = new Date(item.extended.start);
    const dispatch = useAppDispatch();

    const seatTypes = EnumHelpers.getValues(SeatType).map(v => {
        return {id: v, name: SeatType[v]}
    });
    const rows = item.extended.hall.filter(s => s.status === SeatStatus.Free).map(s => s.row);
    const uniqueRow = Array.from(new Set(rows));

    const [seatType, setSeatType] = React.useState(SeatType.Parterre);
    const [row, setRow] = React.useState(0);
    const [seatNumber, setSeatNumber] = React.useState(undefined);

    const handleSeatTypeChange = (event) => {
        setSeatType(event.target.value);
    };

    const handleRowChange = (event) => {
        setRow(event.target.value);
    };

    const handleSeatNumberChange = (event) => {
        setSeatNumber(event.target.value);
    };

    const buy = () => {
        let seat = HallHealper.FindSeat(row, seatNumber, seatType,item.extended.hall);

        dispatch(Actions.cart.addToCart({
            product: item,
            price: 1000,
            description: {
                seat
            }
        } as Purchase))
    };

    const getCurrentFreeSeats = () => {
        let free = item.extended.hall.filter(seat => seat.type == seatType && seat.status === SeatStatus.Free);
        if(seatType === SeatType.Parterre) free = free.filter(s => s.row === row);
        return free;
    };

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
                        <FormControl className={styles.seatSelect}>
                            <InputLabel>Seat type</InputLabel>
                            <Select
                                value={seatType}
                                onChange={handleSeatTypeChange}
                            >
                                {seatTypes.map(t => <MenuItem value={t.id}>{t.name}</MenuItem>)}

                            </Select>
                        </FormControl>

                        {seatType === SeatType.Parterre ? <FormControl className={styles.seatSelect}>
                            <InputLabel>Row</InputLabel>
                            <Select
                                value={seatNumber}
                                onChange={handleRowChange}
                            >
                                {uniqueRow
                                    .sort((a, b) => a - b)
                                    .map(row => <MenuItem value={row}>{row+1}</MenuItem>)}
                            </Select>
                        </FormControl>: null}

                        <FormControl className={styles.seatSelect}>
                            <InputLabel>Seat Number</InputLabel>
                            <Select
                                value={seatNumber}
                                onChange={handleSeatNumberChange}
                            >
                                {getCurrentFreeSeats().sort((a, b) => a.number - b.number).map(s => <MenuItem value={s.number}>{s.number+1}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.actionsBlock}>
            <Button onClick={buy}> Buy </Button>
        </div>
    </div>
};