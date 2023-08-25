import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background-color: rgb(250, 246, 245);
    text-align: center;
    line-height: 70px;
    font-weight: 700;
    font-size: 23px;
`;

const Header = () => {
    return <StyledHeader>Gugonggu.Shopping</StyledHeader>;
};

export default Header;
