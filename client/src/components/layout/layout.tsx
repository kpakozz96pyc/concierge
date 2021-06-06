import {useAppDispatch} from "../../store/app-dispatch";
import React from "react";
import {Actions} from "../../store/actions";

export interface LayoutComponentProps {
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({children}) => {
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(Actions.user.logout());
    };

    return (
        <>
            <div className="App">
                <main>{children}</main>
            </div>
        </>
    );
};