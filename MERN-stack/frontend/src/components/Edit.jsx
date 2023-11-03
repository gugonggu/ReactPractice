import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { UploadDiv, UploadForm, UploadButtonDiv } from "../style/UploadCSS.js";

function Edit() {
    let params = useParams();
    let navigate = useNavigate();

    const [postInfo, setPostInfo] = useState({});
    const [flag, setFlag] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        let body = {
            postId: params.id,
        };
        axios
            .post("/api/post/detail", body)
            .then((res) => {
                if (res.data.success) {
                    setPostInfo(res.data.value);
                    setFlag(true);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, [params]);

    useEffect(() => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
    }, [postInfo]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (title === "" || content === "") {
            return alert("모든 항목을 채워주세요!");
        }

        let body = {
            title: title,
            content: content,
            id: params.id,
        };
        axios
            .post("/api/post/edit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("글 수정 완료");
                    navigate(`/post/${params.id}`);
                } else {
                    alert("글 수정 실패");
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
                        className="cancle"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }}
                    >
                        취소
                    </button>
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
}

export default Edit;
