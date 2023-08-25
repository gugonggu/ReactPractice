import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import bg from "./img/shoes.png";
import data from "./data";
import { useState } from "react";

const Card = ({ shoes }) => {
    return (
        <div className="col-4">
            <img
                src={`https://codingapple1.github.io/shop/shoes${
                    Number(shoes.id) + 1
                }.jpg`}
                width="80%"
                alt=""
            />
            <h4>{shoes.title}</h4>
            <p>{shoes.price}</p>
        </div>
    );
};

function App() {
    const [shoes] = useState(data);

    return (
        <div className="App">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">CBA Mart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">브랜드</Nav.Link>
                            <Nav.Link href="#link">이벤트</Nav.Link>
                            <NavDropdown title="계정" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    사이즈
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    색상
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    설정
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="bgimg"
            ></div>

            <div className="container">
                <div className="row">
                    {shoes.map((a, i) => {
                        return <Card shoes={shoes[i]} key={i}></Card>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
