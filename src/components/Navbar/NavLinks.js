import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <div className="NavLinks">
            <NavLink to="/" className="navlink" >Home</NavLink>
            <NavLink to="/about" className="navlink" >About</NavLink>
            <NavLink to="/skill" className="navlink" >Skills</NavLink>
            <NavLink to="/project" className="navlink" >Project</NavLink>
            <NavLink to="/experience" className="navlink" >Experience</NavLink>
        </div>
    )
};

export default NavLinks;