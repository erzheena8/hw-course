import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error?s.error:''; // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}/>
            <button onClick={addUser}>add</button>
            <div className={s.errorTitle}>{error}</div>
            <div className={s.total}>Users now: {totalUsers}</div>
        </div>
    );
}

export default Greeting;
