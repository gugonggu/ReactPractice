import styled from "styled-components";
import Article from "./Article";

const StyledArticleGrid = styled.div`
    width: 100%;
    height: calc(100vh - 100);
    display: flex;
    flex-direction: column;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input[type="text"] {
        height: 40px;
        width: 200px;
        margin-bottom: 20px;
    }
    textarea {
        height: 200px;
        width: 500px;
    }
`;

const Main = ({ articles, setArticles }) => {
    const printArticles = articles.map((v, i) => {
        return (
            <Article
                articles={articles}
                setArticles={setArticles}
                title={articles[i].title}
                content={articles[i].content}
                imgSrc={articles[i].imgSrc}
                date={articles[i].date}
                likes={articles[i].likes}
                key={i}
                id={i}
            ></Article>
        );
    });

    return (
        <StyledArticleGrid>
            {printArticles}
            <StyledForm
                onSubmit={(e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const end = e.target.end.value;
                    const content = e.target.content.value;
                    const imgSrc = e.target.imgSrc.value;
                    const now = new Date();
                    const date = now.toISOString().substring(0, 10);

                    const list = [...articles];
                    const obj = {
                        title,
                        end,
                        content,
                        imgSrc,
                        date,
                        likes: 0,
                    };
                    list.unshift(obj);
                    setArticles(list);
                }}
            >
                <input type="text" name="title" placeholder="제목" required />
                <input
                    type="text"
                    name="end"
                    placeholder="엔드"
                    required
                ></input>
                <textarea placeholder="내용" name="content" required></textarea>
                <input
                    type="text"
                    name="imgSrc"
                    placeholder="이미지 경로"
                    required
                />
                <input type="submit" value="제출" />
            </StyledForm>
        </StyledArticleGrid>
    );
};

export default Main;
