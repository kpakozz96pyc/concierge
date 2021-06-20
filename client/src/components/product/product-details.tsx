import React from "react";
import styles from "./product-details.module.scss"
import {Button} from "@material-ui/core";
import {Product} from "../../../corelib/product";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {Purchase} from "../../../corelib/purchase";

export interface ProductDetailsComponentProps {
    item: Product
}

export const ProductDetailsComponent: React.FC<ProductDetailsComponentProps> = ({item}) => {

    const startDate = new Date(item.extended.start);
    const dispatch = useAppDispatch();

    const buy = () => {
        dispatch(Actions.cart.addToCart({
            product: item,
            price: 1000
        } as Purchase))
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
                    <div>{startDate.getDay()}</div>
                    <div>{startDate.toLocaleString('default', {month: 'long'})}</div>
                    <div>{startDate.getHours()} : {('0' + startDate.getMinutes()).slice(-2)}</div>
                </div>
            </div>

        </div>
        <div className={styles.actionsBlock}>
            <Button onClick={buy}> Buy </Button>
        </div>
    </div>
};