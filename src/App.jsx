import { Routes, Route } from "react-router-dom";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { reset } from "./store";

export default function App() {
    const dispatch = useDispatch();
    const handleResetClick = () => {
        dispatch(reset());
        //
    };
    return (
        <div className="container is-fluid">
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <button
                                onClick={() => handleResetClick()}
                                className="button is-danger"
                            >
                                Reset Both Playlists
                            </button>
                            <hr />
                            <MoviePlaylist />
                            <hr />
                            <SongPlaylist />
                        </>
                    }
                />
                <Route
                    path="/toolkit2"
                    element={
                        <div className="container is-fluid">
                            <CarForm />
                            <hr />
                            <CarList />
                            <CarSearch />
                            <hr />
                            <CarValue />
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}
