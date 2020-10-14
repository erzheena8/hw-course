import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

function setTime() {
    let timeMinute,
        hour = new Date().getHours(),
        minute = new Date().getMinutes()
    if (minute < 10) {
        timeMinute = '0' + minute
        minute = Number(timeMinute)
    }
    let time: string | number = hour + ':' + minute
    return time
}

const time = setTime(), //ошибка, что const переопределяется, нужно зафиксировать время
    messageData = {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Erzhena",
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio fugiat numquam quo. Consectetur cupiditate deserunt dicta eveniet, facere fugiat id inventore nostrum quod sapiente sequi unde, vel voluptas, voluptatem?",
        time: time
    };


export type UsersDataType = {
    name: string
    avatar: string
    sender: boolean
    message: string
    time: string
}

export type UserDataPropsType = {
    usersData: Array<UsersDataType>
}

let usersData:Array<UsersDataType> = [
    { name: 'i', avatar:'', sender:true, message: 'yo', time:'452'},
    { name: 'i', avatar:'', sender:false, message: 'yo', time:'452'},
    { name: 'i', avatar:'', sender:true, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio fugiat numquam quo. Consectetur cupiditate deserunt dicta eveniet, facere fugiat id inventore nostrum quod sapiente sequi unde, vel voluptas, voluptatem?', time:'452'}
]



function HW1() {

    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage UserData={usersData}/>
            <hr/>
        </div>
    );
}

export default HW1;
