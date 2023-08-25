import styled from "styled-components";

const StyledFooter = styled.footer`
    width: calc(100% - 100);
    background-color: navy;
    height: 50px;
    line-height: 50px;
    padding: 0px 50px;
    font-size: 22px;
`;

const Footer = () => {
    return <StyledFooter>👨‍💻👩‍💻</StyledFooter>;
};

export default Footer;
