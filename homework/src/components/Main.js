import styled from "styled-components";
import {
    FaAngleLeft,
    FaAngleRight,
    FaShoppingBag,
    FaHeart,
} from "react-icons/fa";
import KnitImg from "../img/knit.jpeg";

const StyledMain = styled.main`
    width: 100%;
    height: 625;
    display: flex;
`;

const MainSectionLeft = styled.section`
    width: 45%;
    height: 625px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icons {
        color: rgb(150, 150, 150);
        font-size: 25px;
        cursor: pointer;
    }
`;

const StyledImg = styled.img`
    width: 330;
    height: 400px;
    border: 2px rgb(200, 200, 200) solid;
`;

const MainSectionRight = styled.section`
    width: 55%;
    height: 625px;
`;

const ProductBuyingController = styled.div`
    width: 700px;
    height: 360px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
`;

const ProductName = styled.span`
    font-weight: 800;
    font-size: 18px;
    margin-top: 20px;
    margin-left: 4%;
`;

const ProductDescription = styled.div`
    width: 90%;
    height: 120px;
    margin-top: 40px;
    margin-left: 4%;
    border: 1px rgb(200, 200, 200) solid;
    padding: 1%;
`;

const ProductOptionSelect = styled.select`
    width: 92.5%;
    margin-top: 40px;
    margin-left: 4%;
    padding: 1px;
    border-radius: 7px;
    border: 1px rgb(200, 200, 200) solid;
`;

const ProductButtonBox = styled.div`
    width: 90%;
    margin-top: 40px;
    margin-left: 4%;
    display: flex;
    align-items: center;

    .controllerIcons {
        font-size: 40px;
        color: rgb(77, 77, 77);
        cursor: pointer;
    }

    .shoppingbagIcon {
        margin-left: 80px;
    }

    .heartIcon {
        margin-left: 80px;
    }
`;

const BuyNowButton = styled.button`
    width: 355px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgb(77, 77, 77);
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
`;

const Main = () => {
    return (
        <StyledMain>
            <MainSectionLeft>
                <FaAngleLeft className="icons"></FaAngleLeft>
                <StyledImg src={KnitImg}></StyledImg>
                <FaAngleRight className="icons"></FaAngleRight>
            </MainSectionLeft>
            <MainSectionRight>
                <ProductBuyingController>
                    <ProductName>BASIC LOGO KNIT</ProductName>
                    <ProductDescription>Lorem ipsum</ProductDescription>
                    <ProductOptionSelect>
                        <option>색상</option>
                        <option>사이즈</option>
                        <option>바지</option>
                    </ProductOptionSelect>
                    <ProductButtonBox>
                        <BuyNowButton>바로구매</BuyNowButton>
                        <FaShoppingBag className="controllerIcons shoppingbagIcon"></FaShoppingBag>
                        <FaHeart className="controllerIcons heartIcon"></FaHeart>
                    </ProductButtonBox>
                </ProductBuyingController>
            </MainSectionRight>
        </StyledMain>
    );
};

export default Main;
