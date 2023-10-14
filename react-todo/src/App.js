import Container from "./components/Container";

function App() {
    return (
        <div
            className="App"
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>할 일 추가</h1>
            <Container></Container>
        </div>
    );
}

export default App;
