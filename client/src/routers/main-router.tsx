import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {CatalogPage} from "../pages/catalog/catalog-page";
import {LayoutComponent} from "../components/layout/layout";
import {ProductDetailsPage} from "../components/product/product-details-page";
import {NotFoundPage} from "../pages/not-found/not-found-page";
import {CartPage} from "../pages/cart/cart-page";

export const MainRouter: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/catalog">
                    <LayoutComponent>
                        <CatalogPage/>
                    </LayoutComponent>
                </Route>
                <Route path={'/product/:id'}>
                    <LayoutComponent>
                        <ProductDetailsPage/>
                    </LayoutComponent>
                </Route>

                <Route path={'/cart'}>
                    <LayoutComponent>
                        <CartPage/>
                    </LayoutComponent>
                </Route>

                <Route exact path="/">
                    <Redirect to="/catalog"/>
                </Route>
                <Route component={NotFoundPage}/>
            </Switch>
        </>
    );
};
