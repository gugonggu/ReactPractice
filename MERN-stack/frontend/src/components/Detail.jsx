import { Link, useParams, useNavigate } from "react-router-dom";

import { userSelector, useSelector } from "react-redux";

import axios from "axios";

import { PostDiv, Post, BtnDiv } from "../style/DetailCSS.js";

function Detail({ postInfo }) {
    let navigate = useNavigate();
    let params = useParams();
    const user = useSelector((state) => state.user);

    const deleteHandler = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                postId: params.id,
            };
            axios
                .post("/api/post/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("게시글이 삭제되었습니다.");
                        navigate("/");
                    }
                })
                .catch((e) => {
                    alert("게시글 삭제에 실패하였습니다.");
                });
        }
    };

    return (
        <PostDiv>
            <Post>
                <h1>{postInfo.title}</h1>
                <h3>{postInfo.author.displayName}</h3>
                {postInfo.image ? (
                    <img
                        src={`http://localhost:4000/${postInfo.image}`}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                    />
                ) : null}
                <p>{postInfo.content}</p>
            </Post>
            {user.uid === postInfo.author.uid && (
                <BtnDiv>
                    <Link to={`/edit/${postInfo._id}`}>
                        <button className="edit">수정</button>
                    </Link>
                    <button className="delete" onClick={() => deleteHandler()}>
                        삭제
                    </button>
                </BtnDiv>
            )}
        </PostDiv>
    );
}

export default Detail;
