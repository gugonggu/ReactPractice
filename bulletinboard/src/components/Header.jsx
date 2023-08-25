import styled from "styled-components";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Filter from "./Filter";

const StyledHeader = styled.header`
    background-color: aliceblue;
    height: 50px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    span {
        font-size: 22px;
        font-weight: 600;
    }
`;

const StyledButton = styled.button`
    cursor: pointer;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid lightgray;
    &:active {
        background-color: gray;
    }
    .icon {
        font-size: 20px;
    }
`;

const StyledNonModal = styled.div`
    position: absolute;
    right: 50px;
    top: 41px;
    width: 200px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Header = ({ articles, setArticles }) => {
    const [modalState, setModalState] = useState(false);

    const filterByDate = () => {
        const list = [...articles];
        list.sort((a, b) => {
            if (a.date > b.date) return 1;
            if (a.date < b.date) return -1;
            if (a.date === b.date) return 0;
            return 1;
        });
        setArticles(list);
    };
    const filterByFrontend = () => {
        const list = [...articles];
        list.sort((a, b) => {
            if (a.end > b.end) return -1;
            if (a.end < b.end) return 1;
            if (a.end === b.end) return 0;
            return -1;
        });
        setArticles(list);
    };
    const filterByBackend = () => {
        const list = [...articles];
        list.sort((a, b) => {
            if (a.end > b.end) return 1;
            if (a.end < b.end) return -1;
            if (a.end === b.end) return 0;
            return 1;
        });
        setArticles(list);
    };

    const filterAry = [
        {
            filterName: "게시 날짜로 정렬",
            filterFunction: filterByDate,
        },
        {
            filterName: "프론트엔드로 정렬",
            filterFunction: filterByFrontend,
        },
        {
            filterName: "백엔드로 정렬",
            filterFunction: filterByBackend,
        },
    ];

    const printFilter = filterAry.map((v, i) => {
        return <Filter filter={filterAry[i]} key={i}></Filter>;
    });

    return (
        <StyledHeader>
            <span>웹 개발 게시판</span>
            <StyledButton
                onClick={() => {
                    setModalState(modalState === false ? true : false);
                }}
            >
                <FaBars className="icon"></FaBars>
            </StyledButton>
            {modalState === true ? (
                <StyledNonModal>{printFilter}</StyledNonModal>
            ) : null}
        </StyledHeader>
    );
};

export default Header;
