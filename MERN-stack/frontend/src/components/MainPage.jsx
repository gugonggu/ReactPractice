import { useState, useEffect } from "react";
import List from "./List.jsx";

import axios from "axios";

import { Dropdown, DropdownButton } from "react-bootstrap";

function MainPage() {
    const [list, setList] = useState([]);
    const [sort, setSort] = useState("최신순");
    const [searchTerm, setSearchTerm] = useState("");
    const [skip, setSkip] = useState(0);
    const [loadMore, setLoadMore] = useState(true);

    const getPostLoadMore = () => {
        let body = {
            sort: sort,
            searchTerm: searchTerm,
            skip: skip,
        };
        axios
            .post("/api/post/list", body)
            .then((res) => {
                if (res.data.success) {
                    setList([...list, ...res.data.postList]);
                    setSkip(skip + res.data.postList.length);
                    if (res.data.postList.length < 5) {
                        setLoadMore(false);
                    }
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const getPostLIst = () => {
        setSkip(0);
        let body = {
            sort: sort,
            searchTerm: searchTerm,
            skip: 0,
        };
        axios
            .post("/api/post/list", body)
            .then((res) => {
                if (res.data.success) {
                    setList([...res.data.postList]);
                    setSkip(res.data.postList.length);
                    if (res.data.postList.length < 5) {
                        setLoadMore(false);
                    }
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getPostLIst();
    }, [sort]);

    const searchHandler = () => {
        getPostLIst();
    };

    return (
        <div>
            <DropdownButton title={sort}>
                <Dropdown.Item onClick={() => setSort("최신순")}>
                    최신순
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSort("인기순")}>
                    인기순
                </Dropdown.Item>
            </DropdownButton>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") searchHandler();
                }}
            ></input>
            <List list={list} />
            {loadMore && (
                <button
                    style={{ marginBottom: "10vh" }}
                    onClick={() => getPostLoadMore()}
                >
                    더 불러오기
                </button>
            )}
        </div>
    );
}

export default MainPage;
