import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import { useSelector } from "react-redux";

import firebase from "../firebase.js";

const Heading = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const logoutHandler = () => {
        firebase.auth().signOut();
    };

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">React-Community</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            to="/"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="upload"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Upload
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {user.accessToken ? (
                        <>
                            <Navbar.Text
                                style={{
                                    color: "white",
                                    cursor: "pointer",
                                    marginRight: "10px",
                                }}
                                onClick={() => {
                                    logoutHandler();
                                    navigate("/");
                                }}
                            >
                                Logout
                            </Navbar.Text>
                            <br />
                            <Navbar.Text
                                style={{ color: "white", cursor: "pointer" }}
                            >
                                <Link
                                    to="/mypage"
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                        marginRight: "10px",
                                    }}
                                >
                                    My Page
                                </Link>
                            </Navbar.Text>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            Login
                        </Link>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Heading;
