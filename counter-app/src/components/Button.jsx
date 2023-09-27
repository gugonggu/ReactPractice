import styled from "styled-components";

const StyledButton = styled.button`
    margin-top: 600px;
    border: none;
    width: 100px;
    height: 100px;
    font-size: 64px;
    font-weight: 600;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`;

const Button = ({ value, counter, setCounter, color }) => {
    return (
        <StyledButton
            onClick={() => {
                if (value === "+") {
                    counter++;
                    setCounter(counter);
                } else {
                    counter--;
                    setCounter(counter);
                }
            }}
            color={color}
        >
            {value}
        </StyledButton>
    );
};

export default Button;
