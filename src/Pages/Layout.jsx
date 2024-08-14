import { Outlet} from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar"

function Layout(){
    return(
        <>
<Navbar></Navbar>
<Outlet></Outlet>
</>
    )
}

export default Layout