import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import classes from './HeaderStyle.module.css';

type HeaderType = {
    headerModal: boolean
    setHeaderModal: (headerModal: boolean)=>void
}


const Header:React.FC<HeaderType>=({
    headerModal,
    setHeaderModal
}) =>{
    const toggleHeader = () => {
        setHeaderModal(!headerModal)

    }
    return (
        <div className={`${classes.header} ${headerModal ? classes.activeHeader : classes.hiddenHeader}`}>
            <div className={classes.nav}>
                <NavLink to={'/'}>
                    <div>Home</div>
                </NavLink>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={classes.activeHeaderLink}>
                    <div>PreJunior</div>
                </NavLink>
                <NavLink to={PATH.PAGE_FIRST} activeClassName={classes.activeHeaderLink}>
                    <div>First page</div>
                </NavLink>
                <NavLink to={PATH.PAGE_SECOND} activeClassName={classes.activeHeaderLink}>
                    <div>Second page</div>
                </NavLink>

            </div>
            <div className={classes.menu_wrapper} onClick={toggleHeader}>
                <div className={headerModal ? classes.activeMenu : classes.hiddenMenu}></div>
            </div>
        </div>
    )
};

export default Header;
