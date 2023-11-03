import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { UploadDiv, UploadForm, UploadButtonDiv } from "../style/UploadCSS.js";

import axios from "axios";

import ImageUpload from "./ImageUpload.jsx";

const Upload = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (!user.accessToken) {
            alert("로그인한 회원만 글을 작성할 수 있습니다.");
            navigate("/");
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        if (title === "" || content === "") {
            return alert("모든 항목을 채워주세요!");
        }

        let body = {
            title: title,
            content: content,
            image: image,
            uid: user.uid,
        };
        axios
            .post("/api/post/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("글 작성 완료");
                    navigate("/");
                } else {
                    alert("글 작성 실패");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <UploadDiv>
            <UploadForm>
                <label htmlFor="title">제목</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.currentTarget.value);
                    }}
                ></input>
                <ImageUpload setImage={setImage} />
                <label htmlFor="content">내용</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => {
                        setContent(e.currentTarget.value);
                    }}
                ></textarea>
                <UploadButtonDiv>
                    <button
                        onClick={(e) => {
                            onSubmit(e);
                        }}
                    >
                        제출
                    </button>
                </UploadButtonDiv>
            </UploadForm>
        </UploadDiv>
    );
};

export default Upload;
