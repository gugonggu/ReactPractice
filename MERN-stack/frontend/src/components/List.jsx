import { Link } from "react-router-dom";

import { ListDiv, ListItem } from "../style/ListCSS.js";

import moment from "moment";
import "moment/locale/ko";

const List = ({ list }) => {
    const setTime = (c, u) => {
        if (c !== u) {
            return moment(u).format("YYYY년 MMMM Do, hh:mm") + " (수정됨)";
        } else {
            return moment(c).format("YYYY년 MMMM Do, hh:mm");
        }
    };

    return (
        <ListDiv>
            {list.map((v, i) => {
                return (
                    <ListItem key={i}>
                        <Link to={`/post/${v._id}`}>
                            <p className="title">제목 : {v.title}</p>
                            <p className="author">{v.author.displayName}</p>
                            <p>내용 : {v.content}</p>
                            <p>{setTime(v.createdAt, v.updatedAt)}</p>
                        </Link>
                    </ListItem>
                );
            })}
        </ListDiv>
    );
};

export default List;
