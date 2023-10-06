import styled from '@emotion/styled';

const Container = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

// interface 인터페이스명 {
//     변수명: 변수타입;
// }

interface Props {
  readonly label: string;
  readonly onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

// export const 컴포넌트명 = (props: 인터페이스명) => {
//     컴포넌트 구현
// };
