import { Route, Routes as RoutesWrapper } from "react-router-dom";
import Home from "../pages/home/Home";
import Registro from "../pages/registro/registro";
import Navbar from "../componets/navbar";
import Login from "../pages/login/Login";

function Routes() {
    return (
        <>
            <Navbar />
            <RoutesWrapper>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/Login" element={<Login />} />
            </RoutesWrapper>
        </>
    );
}

export default Routes;
