import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ShoePage from "./pages/ShoePage";
// import data from "./data";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";

function App() {
    return (
        <div className="root-wrap">
            <GlobalStyles></GlobalStyles>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/movie" element={<Movies />}></Route>
                    <Route
                        path="/movie/:title"
                        element={<MovieDetail />}
                    ></Route>
                    <Route path="/tv" element={<Tv />}></Route>
                    <Route path="/person" element={<Celebrity />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
            {/* <ShoePage shoes={data[0]}></ShoePage> */}
        </div>
    );
}

export default App;
