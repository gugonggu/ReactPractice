import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Detail from "./Detail";
import RepleArea from "./RepleArea";

import axios from "axios";

import { Spinner } from "react-bootstrap";

import { SpinnerDiv } from "../style/DetailCSS";

function PostArea() {
    const [postInfo, setPostInfo] = useState({});
    const [flag, setFlag] = useState(false);

    let params = useParams();

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

    return (
        <div>
            {flag ? (
                <>
                    <Detail postInfo={postInfo} />
                    <RepleArea postId={postInfo._id} />
                </>
            ) : (
                <SpinnerDiv>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </SpinnerDiv>
            )}
        </div>
    );
}

export default PostArea;
