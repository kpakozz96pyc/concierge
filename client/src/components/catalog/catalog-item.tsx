import React from "react";
import {Product} from "../../models/product";

import styles from "./catalog-item.module.scss"

export interface CatalogItemComponentProps {
    item?: Product
}

export const CatalogItemComponent: React.FC<CatalogItemComponentProps> = ({item}) => {
    return (
        <>
            <div className={styles.cards_item}>
                <div className={styles.cards}>
                    <div className={styles.cards_image}><img src={item.img}/></div>
                    <div className={styles.card_content}>
                        <h2 className={styles.card_title}>{item.displayName}</h2>
                        <p className={styles.card_text}>{item.description}</p>
                        <button className={styles.btn + ' ' + styles.card_btn}>Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};