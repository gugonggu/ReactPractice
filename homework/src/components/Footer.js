import styled from "styled-components";
import { useState } from "react";

const StyledFooter = styled.footer`
    width: 85%;
    margin-left: 7.5%;
    .buttonSelected {
        background-color: rgb(243, 236, 230);
    }
    .descriptionSelected {
        display: block;
    }
`;

const FooterButtonBox = styled.div`
    width: 100%;
    height: 38px;
`;

const FooterButton = styled.button`
    border: none;
    padding: 10px;
    background-color: #fff;
    color: rgb(120, 120, 120);
    font-weight: 600;
    cursor: pointer;
`;

const FooterDescription = styled.div`
    width: 100%;
    border-top: 2px rgb(243, 236, 230) solid;
    padding: 10px;
    display: none;
`;

const Footer = () => {
    let [click, setClick] = useState("info");
    return (
        <StyledFooter>
            <FooterButtonBox>
                <FooterButton
                    className={click === "info" ? "buttonSelected" : ""}
                    onClick={() => {
                        setClick("info");
                    }}
                >
                    상품정보
                </FooterButton>
                <FooterButton
                    className={click === "size" ? "buttonSelected" : ""}
                    onClick={() => {
                        setClick("size");
                    }}
                >
                    사이즈
                </FooterButton>
                <FooterButton
                    className={click === "ask" ? "buttonSelected" : ""}
                    onClick={() => {
                        setClick("ask");
                    }}
                >
                    문의
                </FooterButton>
            </FooterButtonBox>
            <FooterDescription
                className={click === "info" ? "descriptionSelected" : ""}
            >
                상품정보임다.
            </FooterDescription>
            <FooterDescription
                className={click === "size" ? "descriptionSelected" : ""}
            >
                사이즈임다.
            </FooterDescription>
            <FooterDescription
                className={click === "ask" ? "descriptionSelected" : ""}
            >
                문의임다.
            </FooterDescription>
        </StyledFooter>
    );
};

export default Footer;
