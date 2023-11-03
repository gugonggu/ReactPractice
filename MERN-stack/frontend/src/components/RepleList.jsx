import { useState, useEffect } from "react";

import axios from "axios";

import RepleContent from "./RepleContent";

import { RepleListDiv } from "../style/RepleCSS";

function RepleList({ postId }) {
    const [repleList, setRepleList] = useState([]);

    useEffect(() => {
        let body = {
            postId: postId,
        };
        axios.post("/api/reple/getReple", body).then((res) => {
            if (res.data.success) {
                setRepleList([...res.data.repleList]);
            }
        });
    }, []);

    return (
        <RepleListDiv>
            {repleList.map((reple, i) => {
                return <RepleContent reple={reple} key={i} />;
            })}
        </RepleListDiv>
    );
}

export default RepleList;
