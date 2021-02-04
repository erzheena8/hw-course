import React from "react";
import classes from './Error404Style.module.css'

function Error404() {
    return (
        <div className={classes.error}>
            <div className={classes.codeError}>404</div>
            <div className={classes.messageError}>Page not found!</div>
            <div className={classes.catError}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
