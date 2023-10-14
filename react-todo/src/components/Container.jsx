import { useState } from "react";

import styled from "styled-components";

import TodoContainer from "./TodoContainer";
import InputContainer from "./InputContainer";

const StyledContainer = styled.div`
    width: 400px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Container = () => {
    const [todos, setTodos] = useState([{ content: "투두두두", id: 0 }]);

    return (
        <StyledContainer>
            <TodoContainer todos={todos} setTodos={setTodos}></TodoContainer>
            <InputContainer todos={todos} setTodos={setTodos}></InputContainer>
        </StyledContainer>
    );
};

export default Container;
