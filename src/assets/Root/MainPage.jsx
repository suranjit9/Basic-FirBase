import { Outlet } from "react-router-dom";
import Heaser from "../Component/Header/Heaser";



const MainPage = () => {
    return (
        <div>
            <Heaser></Heaser>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;