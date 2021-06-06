import React from "react";
import {Product} from "../../models/product";
import styles from './catalog.module.scss';
import {CatalogItemComponent} from "./catalog-item";

export interface CatalogComponentProps {
    list: Product[]
}

export const CatalogComponent: React.FC<CatalogComponentProps> = ({list}) => {
    return (
        <div className={styles.main}>
            <h1>Responsive Card Grid Layout</h1>
            <div className={styles.cards}>
                {list.map(i => <CatalogItemComponent item={i}/>)}
            </div>
        </div>
    );
};