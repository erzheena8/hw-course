import React from "react";
import Affair from "./Affair";
import classes from './Affairs.module.css'
import {AffairType, FilterType} from "./HW2";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    title:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            deleteAffairCallback={() => {
                props.deleteAffairCallback(a._id)
            }}
        />
    ))

    const setAll = () => {
        props.setFilter('all')

    }; // need to fix
    const setHigh = () => {
        props.setFilter('high')
    };
    const setMiddle = () => {
        props.setFilter('middle')
    };
    const setLow = () => {
        props.setFilter('low')
    };

    return (
        <div className={classes.affairs}>
            <div className={classes.affairsBlocks}>
               <div className={classes.title}> {props.title} </div>
                {mappedAffairs}
            </div>
            <div className={classes.buttonBlocks}>
                <button className={classes.buttonFilter} onClick={setAll}>All</button>
                <button className={classes.buttonFilter} onClick={setHigh}>High</button>
                <button className={classes.buttonFilter} onClick={setMiddle}>Middle</button>
                <button className={classes.buttonFilter} onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
