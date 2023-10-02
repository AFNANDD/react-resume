import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="NavLinks">
            <li>
                <NavLink to="/" className="navlink-a" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="navlink-a" >About</NavLink>
            </li>
            <li>
                <NavLink to="/skill" className="navlink-a" >Skills</NavLink>
            </li>
            <li>
                <NavLink to="/project" className="navlink-a" >Project</NavLink>
            </li>
            <li>
                <NavLink to="/experience" className="navlink-a" >Experience</NavLink>
            </li>
        </ul>
    )
};

export default NavLinks;