import "./App.css";
import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    const [articles, setArticles] = useState([
        {
            title: "JavaScript",
            end: "front",
            content: "자바랑 자바스크립트는 다릅니다",
            imgSrc: "img/js.png",
            date: "1970-01-01",
            likes: 123456789,
        },
        {
            title: "Node.Js",
            end: "back",
            content: "노드랑 자바스크립트는 같은데 달라요",
            imgSrc: "img/node.png",
            date: "2038-01-19",
            likes: 45,
        },
        {
            title: "HTML",
            end: "front",
            content: "HTML은 프로그래밍 언어가 아니라구욧!!!!!",
            imgSrc: "img/html.png",
            date: "9999-12-31",
            likes: 909,
        },
        {
            title: "CSS",
            end: "front",
            content: "Cascading 왜 안돼 Sheets",
            imgSrc: "img/css.png",
            date: "0-01-01",
            likes: 0,
        },
    ]);

    return (
        <div className="App">
            <GlobalStyles></GlobalStyles>
            <Header articles={articles} setArticles={setArticles}></Header>
            <Main articles={articles} setArticles={setArticles}></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
