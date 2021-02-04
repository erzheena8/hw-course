import React, {useState} from "react";
import Header from "./Header";
import Routes from "./Routes";
import './HW5.css'
import {HashRouter} from "react-router-dom";

function HW5() {

    const [headerModal, setHeaderModal] = useState<boolean>(true)

    return (
        <div className='mainPage'>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <div className='pages'>
                        <Header headerModal = {headerModal} setHeaderModal = {setHeaderModal}/>
                    <div className={headerModal?'content':'contentWithoutHeader'}>
                        <Routes/>
                    </div>
                </div>
            </HashRouter>
        </div>
    );
}

export default HW5;
