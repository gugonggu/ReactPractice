import { useState } from "react";

import { useSelector } from "react-redux";

import axios from "axios";

import { RepleUploadDiv } from "../style/RepleCSS";

function RepleUpload({ postId }) {
    const [reple, setReple] = useState("");

    const user = useSelector((state) => state.user);

    const submitHandler = (e) => {
        e.preventDefault();

        if (!reple) {
            return alert("댓글을 작성해 주세요");
        }

        let body = {
            reple: reple,
            uid: user.uid,
            postId: postId,
        };

        axios.post("/api/reple/submit", body).then((res) => {
            if (res.data.success) {
                alert("댓글 작성 성공");
                window.location.reload();
            } else {
                alert("댓글 작성 실패");
            }
        });
    };

    return (
        <RepleUploadDiv>
            <form>
                <input
                    type="text"
                    value={reple}
                    onChange={(e) => {
                        setReple(e.currentTarget.value);
                    }}
                ></input>
                <button onClick={(e) => submitHandler(e)}>등록</button>
            </form>
        </RepleUploadDiv>
    );
}

export default RepleUpload;
