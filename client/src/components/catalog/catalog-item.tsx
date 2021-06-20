import React from "react";

import styles from "./catalog-item.module.scss"
import {Link} from "react-router-dom";
import {Product} from "../../../corelib/product";

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
                        <p className={styles.card_text}>{item.descriptionText}</p>

                        <Link className={styles.btn + ' ' + styles.card_btn} to={`/product/${item.id}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};