import React from "react";
import styles from './catalog.module.scss';
import {CatalogItemComponent} from "./catalog-item";
import {Product} from "../../../corelib/product";

export interface CatalogComponentProps {
    list: Product[]
}

export const CatalogComponent: React.FC<CatalogComponentProps> = ({list}) => {
    return (
        <div className={styles.main}>
            <div className={styles.cards}>
                {list.map(i => <CatalogItemComponent item={i}/>)}
            </div>
        </div>
    );
};