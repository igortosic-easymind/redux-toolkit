import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <li className="navbar-item">
                    <Link to="/">Intro Redux Toolkit</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/toolkit2">
                        Manage Multi Slice with Redux Toolkit
                    </Link>
                </li>
            </div>
        </nav>
    );
};

export default NavBar;
