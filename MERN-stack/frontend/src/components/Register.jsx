import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginDiv } from "../style/UserCSS.js";
import firebase from "../firebase.js";
import axios from "axios";

function Register() {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");
    const [flag, setFlag] = useState(false);
    const [nameCheck, setNameCheck] = useState(false);
    const [nameInfo, setNameInfo] = useState("");

    const registerFunc = async (e) => {
        e.preventDefault();
        setFlag(true);
        if (!(name && email && pw && pwConfirm)) {
            return alert("모든 값을 채워주세요");
        }
        if (pw !== pwConfirm) {
            return alert("비밀번호와 비밀번호 확인 값을 같아야 합니다");
        }
        if (!nameCheck) {
            return alert("닉네임 중복 검사를 진행해 주세요");
        }
        let createdUser = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, pw);
        await createdUser.user.updateProfile({ displayName: name });

        let body = {
            email: createdUser.user.multiFactor.user.email,
            displayName: createdUser.user.multiFactor.user.displayName,
            uid: createdUser.user.multiFactor.user.uid,
        };
        axios.post("/api/user/register", body).then((res) => {
            setFlag(false);
            if (res.data.success) {
                navigate("/login");
            } else {
                alert("회원가입 실패");
            }
        });
    };

    const nameCheckFunc = (e) => {
        e.preventDefault();
        if (!name) {
            return alert("닉네임을 입력해주세요");
        }
        let body = {
            displayName: name,
        };
        axios.post("/api/user/namecheck", body).then((res) => {
            if (res.data.success) {
                if (res.data.check) {
                    setNameCheck(true);
                    setNameInfo("사용가능한 닉네임입니다.");
                } else {
                    setNameInfo("사용할 수 없는 닉네임입니다.");
                }
            }
        });
    };

    return (
        <LoginDiv>
            <form>
                <label>닉네임</label>
                <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    disabled={nameCheck}
                />
                {nameInfo}
                <button onClick={(e) => nameCheckFunc(e)}>
                    닉네임 중복 검사
                </button>
                <label>이메일</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <label>비밀번호</label>
                <input
                    type="password"
                    value={pw}
                    minLength={8}
                    onChange={(e) => setPw(e.currentTarget.value)}
                />
                <label>비밀번호 확인</label>
                <input
                    type="password"
                    value={pwConfirm}
                    minLength={8}
                    onChange={(e) => setPwConfirm(e.currentTarget.value)}
                />
                <button disabled={flag} onClick={(e) => registerFunc(e)}>
                    회원가입
                </button>
            </form>
        </LoginDiv>
    );
}

export default Register;
