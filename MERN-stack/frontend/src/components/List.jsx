import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ListDiv, ListItem } from "../style/ListCSS.js";

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .post("/api/post/list")
            .then((res) => {
                if (res.data.success) {
                    setList([...res.data.postList]);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <ListDiv>
            {list.map((v, i) => {
                return (
                    <ListItem key={i}>
                        <Link to={`/post/${v._id}`}>
                            <p className="title">제목 : {v.title}</p>
                            <p className="author">{v.author.displayName}</p>
                            <p>내용 : {v.content}</p>
                        </Link>
                    </ListItem>
                );
            })}
        </ListDiv>
    );
};

export default List;
