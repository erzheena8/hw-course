import React from "react";
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    deleteAffairCallback: ()=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback()};// need to fix
    return (
        <div className={classes.affairItem}>
            {props.affair}

            <button className={classes.buttonItem} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
