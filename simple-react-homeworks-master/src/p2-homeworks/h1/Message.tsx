import React from "react";
import {stringify} from "querystring";
import classes from "./Message.module.css";


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: number|string

}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.container}>
                <div className={classes.image}>
                    <img src={props.avatar} alt="avatar"/>
                </div>
                <div className={classes.messageBlock}>
                    <div className={classes.nameItem}>{props.name}</div>
                    <div className={classes.messageItem}>{props.message}</div>
                    <div className={classes.timeItem}>{props.time}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;
