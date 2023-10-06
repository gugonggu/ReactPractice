import { useState } from 'react';

import styled from '@emotion/styled';
import Title from 'components/Title';
import Content from 'components/Content';
import { Button } from 'components/Button';
import { Label } from 'components/Label';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };

  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <Container>
        <Title>Counter App</Title>
        <Content>
          <Button label="-" onClick={sub} />
          <Label counter={counter}></Label>
          <Button label="+" onClick={add} />
        </Content>
      </Container>
    </div>
  );
}

export default App;
