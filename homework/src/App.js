import "./App.css";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <GlobalStyles></GlobalStyles>
            <Header></Header>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
