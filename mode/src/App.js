import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App() {
    const topics = [
        { id: 1, title: "html", body: "html is..." },
        { id: 2, title: "css", body: "css is..." },
    ];

    return (
        <div>
            <Header title="프롭스에서 받아온 값" />
            <Nav topics={topics} />
            <Article />
        </div>
    );
}

export default App;
