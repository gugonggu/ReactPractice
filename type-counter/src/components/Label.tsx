import styled from '@emotion/styled';

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

interface Props {
  readonly counter: number;
}

export const Label = ({ counter }: Props) => {
  return <Container>{counter}</Container>;
};
