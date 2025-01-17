import React, {useEffect} from 'react'
import {Routes, Route, Navigate, useParams, NavLink, useNavigate} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import {Header} from "./header/Header";
import HW5 from "./HW5";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    const navigate = useNavigate();

    useEffect(() => {
        if (true) navigate(PATH.PRE_JUNIOR)
    }, [])

    return (
        <div>
            <Routes>
                {/*Routes выбирает первый подходящий роут*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'} element={<PreJunior />}></Route>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior />}/>
                <Route path={PATH.JUNIOR} element={<Junior />}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus />}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={'/*'} element={<Error404 />}/>
            </Routes>
        </div>
    )
}

export default Pages
