import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 80%;
    margin: 0 auto;
    padding-top: 25px;
    padding-bottom: 21px;
    border-bottom: 1px solid rgba(84, 84, 84, 0.7);
`;

export const Logo = styled.div`
    width: 90%;
    font-family: 'Display';
    justify-content: space-between;
`;

export const SearchAndProfile = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;