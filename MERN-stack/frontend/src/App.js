import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearUser } from "./reducer/userSlice.js";

import firebase from "./firebase.js";

import Heading from "./components/Heading";
import List from "./components/List";
import Upload from "./components/Upload";
import PostArea from "./components/PostArea.jsx";
import Edit from "./components/Edit";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
    const dispatch = useDispatch();
    //const user = useSelector((state) => state.user);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((userInfo) => {
            if (userInfo !== null) {
                dispatch(loginUser(userInfo.multiFactor.user));
            } else {
                dispatch(clearUser());
            }
        });
    }, []);

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    // useEffect(() => {
    //     firebase.auth().signOut();
    // }, []);

    return (
        <>
            <Heading />
            <Routes>
                <Route path="/" element={<List />}></Route>
                <Route path="/upload" element={<Upload />}></Route>
                <Route path="/post/:id" element={<PostArea />}></Route>
                <Route path="/edit/:id" element={<Edit />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </>
    );
}

export default App;
