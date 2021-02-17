import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import mq from '../../styles/mediaQueries';

import Gallery from '../layouts/Gallery';

import { actionFetchNewestData, actionFetchPopularData } from '../../reduxModules/home';

const HomeWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

const FilterContainer = styled('div')(mq({
    display: 'flex',
    flexDirection: ['column', 'row', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    height: ['auto', 60, 60],
    width: '100%'
}));

const FilterButton = styled('button')(({ theme, active }) => mq({
    border: `1px solid ${theme.primaryColor}`,
    background: active ? theme.primaryColor : 'transparent',
    color: active ? theme.white : theme.primaryColor,
    margin: '0 10px',
    height: 41,
    borderRadius: 21,
    cursor: 'pointer',
    padding: '10px 20px',
    marginTop: [20, 0, 0]
}))

const AppHome = ({ 
    actionFetchNewestData, 
    actionFetchPopularData, 
    collection, 
    isSearch 
}) => {

    const [activeButton, setActiveButton] = useState('new');

    const fetchNewestData = () => {
        if(activeButton !== 'new'){
            setActiveButton('new');
            actionFetchNewestData();
        }
    }
    const fetchPopularData = () => {
        if(activeButton !== 'popular'){
            setActiveButton('popular');
            actionFetchPopularData();
        }
    }

    useEffect(()=> {
        if(isSearch) setActiveButton('');
    }, [isSearch])
    
    return (
        <HomeWrapper>
            <FilterContainer>
                <FilterButton onClick={fetchNewestData} active={activeButton==='new'}>Newest Upload</FilterButton>
                <FilterButton onClick={fetchPopularData} active={activeButton==='popular'}>Most Popular</FilterButton>
            </FilterContainer>
            <Gallery data={collection}/>
        </HomeWrapper>
    )
}

export default connect(state => ({
    collection: state.home.collection,
    isSearch: state.home.isSearch
}), { actionFetchNewestData, actionFetchPopularData })(AppHome);
