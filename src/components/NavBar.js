

import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/transactions">Transaction List</NavLink>
        </nav>
    )
}

export default NavBar;