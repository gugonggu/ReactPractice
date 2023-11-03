import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDiv } from "../style/UserCSS";

import firebase from "../firebase.js";

function Login() {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const signInFunc = async (e) => {
        e.preventDefault();
        if (!(email && pw)) {
            return alert("모든 값을 채워주세요");
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, pw);
            navigate("/");
        } catch (e) {
            if (e.code === "auth/user-not-found") {
                setErrorMsg("존재하지 않는 이메일입니다.");
            } else if (e.code === "auth/wrong-password") {
                setErrorMsg("비밀번호가 일치하지 않습니다.");
            } else {
                setErrorMsg("로그인에 실패하였습니다.");
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setErrorMsg("");
        }, 5000);
    }, [errorMsg]);

    return (
        <LoginDiv>
            <form>
                <label>이메일</label>
                <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <label>비밀번호</label>
                <input
                    type="password"
                    value={pw}
                    required
                    onChange={(e) => setPw(e.currentTarget.value)}
                />
                {errorMsg !== "" && <p>{errorMsg}</p>}
                <button
                    onClick={(e) => {
                        signInFunc(e);
                    }}
                >
                    로그인
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/register");
                    }}
                >
                    회원가입
                </button>
            </form>
        </LoginDiv>
    );
}

export default Login;
