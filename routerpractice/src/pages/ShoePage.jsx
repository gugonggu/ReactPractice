import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 500px;
    }
    h3 {
        font-weight: 600;
        margin-bottom: 10px;
    }
    span {
        margin-bottom: 10px;
    }
`;

const ShoePage = ({ shoes }) => {
    return (
        <StyledPage>
            <img
                src={`https://codingapple1.github.io/shop/shoes${
                    shoes.id + 1
                }.jpg`}
                alt="shoesImage"
            />
            <h3>{shoes.title}</h3>
            <span>{shoes.content}</span>
            <span>{`${shoes.price}원`}</span>
            <input type={"submit"} value={"주문하기"}></input>
        </StyledPage>
    );
};

export default ShoePage;
