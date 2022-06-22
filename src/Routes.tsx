import {Route, Routes as RoutesComponet, BrowserRouter} from "react-router-dom"

import Home from "./pages/Home";

export default function Routes(){
    return(
        <BrowserRouter>
            <RoutesComponet>
                <Route path="/" element={<Home/>}/>
            </RoutesComponet>

        </BrowserRouter>
    );
}