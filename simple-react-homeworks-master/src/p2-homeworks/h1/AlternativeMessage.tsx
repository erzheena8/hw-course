import React from "react";
import {UsersDataType} from "./HW1";
import classes from "./AlternativeMessage.module.css";

type UserPropsType = {
    UserData: Array<UsersDataType>
}

function AlternativeMessage(props: UserPropsType) {
    let UsersData = props.UserData.map(user => { //сократить код
        if (user.sender === true) {
            return (
                <div className={`${classes.user} + ${classes.senderUser}`}>
                    <div className={`${classes.userBlock} + ${classes.senderBlock}`}>
                        <div className={`${classes.name} + ${classes.senderName}`}>{user.name}</div>
                        <div className={`${classes.message} + ${classes.senderMessage}`}>{user.message}</div>
                        <div className={`${classes.time} + ${classes.senderTime}`}>{user.time}</div>
                    </div>
                    <div className={`${classes.image} + ${classes.senderImage}`}>
                        <img src={user.avatar} alt="avatar"/>
                    </div>
                </div>
            )
        } else if (user.sender === false) {
            return (
                <div className={`${classes.user} + ${classes.otherUser}`}>
                    <div className={`${classes.image} + ${classes.otherImage}`}>
                        <img src={user.avatar} alt="avatar"/>
                    </div>
                    <div className={`${classes.userBlock} + ${classes.otherBlock}`}>
                        <div className={`${classes.name} + ${classes.otherName}`}>{user.name}</div>
                        <div className={`${classes.message} + ${classes.otherMessage}`}>{user.message}</div>
                        <div className={`${classes.time} + ${classes.otherTime}`}>{user.time}</div>
                    </div>
                </div>
            )
        } else console.log('Error')

    })
    return (
        <div className={classes.container}>
            {UsersData}
        </div>
    );
}

export default AlternativeMessage;
