import styled from "styled-components";
import { FaBars, FaSearch } from "react-icons/fa";

const StyledNav = styled.nav`
    width: 98%;
    height: 40px;
    background-color: rgb(240, 236, 227);
    position: relative;
    padding-left: 2%;
    display: flex;

    .setRight {
        position: absolute;
        right: 210px;
        bottom: 0px;
        height: 40px;
        padding: 0px 10px;
        &:hover {
            background-color: rgb(220, 216, 207);
        }
    }
`;

const StyledButton = styled.button`
    height: 40px;
    width: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: rgb(220, 216, 207);
    }
`;

const SearchInput = styled.input`
    border-radius: 10px;
    position: absolute;
    right: 2%;
    top: 10px;
`;

const Nav = () => {
    return (
        <StyledNav>
            <StyledButton>
                <FaBars></FaBars>
            </StyledButton>
            <StyledButton>Best</StyledButton>
            <StyledButton>Outer</StyledButton>
            <StyledButton>Top</StyledButton>
            <StyledButton>Bottom</StyledButton>
            <StyledButton>Acc</StyledButton>
            <FaSearch className="setRight"></FaSearch>
            <SearchInput></SearchInput>
        </StyledNav>
    );
};

export default Nav;
