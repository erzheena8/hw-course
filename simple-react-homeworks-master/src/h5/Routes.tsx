import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    PAGE_FIRST: "/page-first",
    PAGE_SECOND: "/page-second",
    // add paths
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.PAGE_FIRST} render={() => <PageOne/>}/>
                <Route path={PATH.PAGE_SECOND} render={() => <PageTwo/>}/>
                // add routes
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
