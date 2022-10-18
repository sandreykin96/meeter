import React from 'react';
import { HeaderContainer, Logo, SearchAndProfile } from './styled';
import { BsSearch, BsPersonFill } from 'react-icons/bs'

export const Header = () => {
    const hanleOnClick = () => {
        alert('Clicked search');
    }
    return(
        <HeaderContainer>
            <Logo>
                Meeter
            </Logo>

            <SearchAndProfile>
                <BsSearch onClick={hanleOnClick}/>
                <BsPersonFill/>
            </SearchAndProfile>
        </HeaderContainer>
    )
}