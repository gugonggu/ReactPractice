import { useState } from 'react';

import styled from '@emotion/styled';

import { Title } from 'components/Title/index';
import { ToDoList } from 'components/ToDoList';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '커피마시기', '잠자기']);
  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };
  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoList toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
}

export default App;
