import styled from "styled-components";

const StyledTodoContainer = styled.div`
    width: 100%;
    height: 80%;
`;

const TodoContainer = ({ todos, setTodos }) => {
    return (
        <StyledTodoContainer>
            {todos.map((a, i) => {
                return (
                    <div key={i}>
                        <span>{todos[i].content}</span>
                        <button
                            data-id={todos[i].id}
                            onClick={(e) => {
                                const filteredTodos = todos.filter(
                                    (v) => v.id !== Number(e.target.dataset.id)
                                );
                                setTodos(filteredTodos);
                            }}
                        >
                            삭제
                        </button>
                    </div>
                );
            })}
        </StyledTodoContainer>
    );
};

export default TodoContainer;
