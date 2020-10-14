import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import classes from "./HW3.module.css";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);
    const addUserCallback = (name: string) => {
        let newUser: UserType = {_id:v1(),name:name}
        setUsers([newUser, ...users]);
    }
    return (
        <div className={classes.hw}>
            {/*<hr/>*/}
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}/>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW3;
