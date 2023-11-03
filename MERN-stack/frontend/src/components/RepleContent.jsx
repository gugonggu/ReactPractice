import { useState, useEffect, useRef } from "react";

import { RepleContentDiv, RepleUploadDiv } from "../style/RepleCSS";

import { useSelector } from "react-redux";

import axios from "axios";

function RepleContent(props) {
    const [modalFlag, setModalFlag] = useState(false);
    const [editFlag, setEditFlag] = useState(false);
    const [reple, setReple] = useState(props.reple.reple);

    const user = useSelector((state) => state.user);
    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false));

    const submitHandler = (e) => {
        e.preventDefault();
        let body = {
            uid: user.uid,
            reple: reple,
            postId: props.reple.postId,
            repleId: props.reple._id,
        };

        axios.post("/api/reple/edit", body).then((res) => {
            if (res.data.success) {
                alert("댓글 수정 성공");
            } else {
                alert("댓글 수정 실패");
            }
            return window.location.reload();
        });
    };

    const deleteHandler = (e) => {
        e.preventDefault();
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                postid: props.reple.postid,
                repleId: props.reple._id,
            };
            axios
                .post("/api/reple/delete", body)
                .then((res) => {
                    if (res.data.success) {
                        alert("댓글이 삭제되었습니다.");
                        window.location.reload();
                    }
                })
                .catch((e) => {
                    alert("댓글 삭제에 실패하였습니다.");
                });
        }
    };

    return (
        <div>
            <RepleContentDiv>
                <div className="author">
                    <p>{props.reple.author.displayName}</p>
                    {props.reple.author.uid === user.uid && (
                        <div className="modalControl">
                            <span onClick={() => setModalFlag(true)}>...</span>
                            {modalFlag && (
                                <div className="modalDiv" ref={ref}>
                                    <p
                                        onClick={() => {
                                            setEditFlag(true);
                                            setModalFlag(false);
                                        }}
                                    >
                                        수정
                                    </p>
                                    <p
                                        className="delete"
                                        onClick={(e) => deleteHandler(e)}
                                    >
                                        삭제
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {editFlag ? (
                    <RepleUploadDiv>
                        <form>
                            <input
                                type="text"
                                value={reple}
                                onChange={(e) => {
                                    setReple(e.currentTarget.value);
                                }}
                            ></input>
                            <button onClick={(e) => submitHandler(e)}>
                                등록
                            </button>
                        </form>
                        <div className="cancel">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEditFlag(false);
                                }}
                            >
                                취소
                            </button>
                        </div>
                    </RepleUploadDiv>
                ) : (
                    <p>{props.reple.reple}</p>
                )}
            </RepleContentDiv>
        </div>
    );
}

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler(e);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};

export default RepleContent;
