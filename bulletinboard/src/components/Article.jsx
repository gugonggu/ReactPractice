import styled from "styled-components";

const StyledArticle = styled.div`
    cursor: pointer;
    width: calc(100% - 60);
    display: flex;
    padding: 10px;
    border-bottom: 1px solid lightgray;

    &:first-child {
        border-top: 1px solid lightgray;
    }

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .articleContents {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        h3 {
            font-size: 20px;
            font-weight: 600;
        }
        p {
            margin-top: 5px;
        }
    }
`;

const Article = ({
    articles,
    setArticles,
    title,
    content,
    imgSrc,
    date,
    likes,
    id,
}) => {
    return (
        <StyledArticle>
            <img src={imgSrc} alt=""></img>
            <div className="articleContents">
                <h3>{title}</h3>
                <p>{content}</p>
                <p>게시일: {date}</p>
                <p
                    onClick={() => {
                        const list = [...articles];
                        list[id].likes++;
                        setArticles(list);
                    }}
                >
                    좋아용⭐: {likes}
                </p>
            </div>
        </StyledArticle>
    );
};

export default Article;
