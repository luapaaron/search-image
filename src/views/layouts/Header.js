import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import mq from '../../styles/mediaQueries';

import Text from '../components/Text';
import Input from '../components/Input';
import FillButton from '../components/FillButton';

import { actionFetchSearchData } from '../../reduxModules/home';

import galaxyBG from '../../assets/img/landing_bg.jpg';
import nasaLogo from '../../assets/img/nasa_logo_large.png';
import searchIcon from '../../assets/icon/search.png';
import isEmpty from '../../utils/isEmpty';

const HeaderContainer = styled('div')(mq({
    minHeight: [100, 100, 200],
    display: 'flex',
    alignItems: 'center',
    padding: [20,'20px 80px','20px 100px'],
    position: 'relative',
    background: `url(${galaxyBG}) no-repeat center center`,
    backgroundSize: 'cover',
    alignItems: 'flex-start',
    flexDirection: 'column'
}));

const LogoContainer = styled('div')(mq({
    display: ['none', 'none', 'flex'],
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center'
}));

const Logo = styled('img')({
    width: 107
});
const LogoSmall = styled('img')(mq({
    display: ['block', 'block', 'none'],
    width: 65
}));

const Label = styled(Text)({
    width: 150,
    marginRight: 20
});

const SearchContainer = styled('div')(mq({
    margin: [0, 0, '20px 0'],
    width: '100%',
    display: 'flex'
}));

const SearchButton = styled(FillButton)(mq({
    marginLeft: 20
}));

const SearchButtonImg = styled('img')(mq({
    width: 40,
    height: 40
}));

const Header = ({ actionFetchSearchData }) => {

    const inputRef = useRef(null);

    const onKeyDown = e => {
        if (e.which == 13 || e.keyCode == 13) {
            search();
        }
    }

    const search = () => {
        if(!isEmpty(inputRef) && !isEmpty(inputRef.current)){
            const searchString = inputRef.current.value.trim()
            actionFetchSearchData(searchString);
        }
    }

    return (
        <HeaderContainer>
           <LogoContainer>
                <Label inverted fontSize={20}>Nasa Image and Video Library</Label>
                <Logo src={nasaLogo} />
           </LogoContainer>
            <SearchContainer>
                <LogoSmall src={nasaLogo} />
                <Input placeholder='Search for ...(e.g. "Orion")' forwardedRef={inputRef} onKeyDown={onKeyDown}/>
                <SearchButton round onClick={search}><SearchButtonImg src={searchIcon} /></SearchButton>
            </SearchContainer>
        </HeaderContainer>
    );
};

export default connect(null, { actionFetchSearchData })(Header);
