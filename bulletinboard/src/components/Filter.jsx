import styled from "styled-components";

const StyledFilter = styled.div`
    cursor: pointer;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightgray;
    &:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom: none;
    }
`;

const Filter = ({ filter }) => {
    const func = () => {
        filter.filterFunction();
    };
    return <StyledFilter onClick={func}>{filter.filterName}</StyledFilter>;
};

export default Filter;
