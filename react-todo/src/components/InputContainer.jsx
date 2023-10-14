import { useState } from "react";

import styled from "styled-components";

const StyledInputContainer = styled.div`
    width: 100%;
    height: 20%;
`;

const InputContainer = ({ todos, setTodos }) => {
    const [input, setInput] = useState("");

    return (
        <StyledInputContainer>
            <input
                type={"text"}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            ></input>
            <button
                onClick={(e) => {
                    const newTodos = [
                        ...todos,
                        { content: input, id: todos.length },
                    ];
                    setTodos(newTodos);
                    setInput("");
                    e.target.previousElementSibling.value = "";
                }}
            >
                할 일 등록
            </button>
        </StyledInputContainer>
    );
};

export default InputContainer;
