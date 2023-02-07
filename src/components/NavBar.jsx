import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../store";

const NavBar = () => {
    const dispatch = useDispatch();
    const handleResetClick = () => {
        dispatch(reset());
        //
    };
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
                <li className="navbar-item">
                    <Link to="/products">Products</Link>
                </li>
            </div>
            <div className="navbar-end">
                <button
                    onClick={() => handleResetClick()}
                    className="button is-danger"
                >
                    Reset Both Playlists
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
