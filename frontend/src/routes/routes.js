import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";

function Ways () {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </>
    )
}

export default Ways