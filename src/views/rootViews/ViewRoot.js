import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from '@emotion/styled';

import AppHome from '../appHome';

import { ROUTE_HOME } from '../../constants/routes';

const ViewRootContainer = styled('div')({
    
    backgroundColor: '#26282f',
    padding: '0 20px'
});

const routePage = location => {
    switch (location.type) {
        case ROUTE_HOME:
            return (<AppHome />);
    }
}

const ViewRoot = ({ location }) => {

    const [headerHeight, setHeaderHeight] = useState(window.innerWidth < 920 ? 100 : 200);
 
    const resizeHeader = useCallback(() => {
        if(window.innerWidth < 920){
            if(headerHeight !== 100){
                setHeaderHeight(100);
            }
        } else if (headerHeight !== 200){
            setHeaderHeight(200);
        }
    }, [headerHeight])

    useEffect(() => {
        window.addEventListener("resize", resizeHeader);

        return () =>{
            window.removeEventListener("resize", resizeHeader);
        }

       
    },[resizeHeader])

    switch (location.type) {

        case ROUTE_HOME:
            return (
                <ViewRootContainer>
                    <Scrollbars 
                        autoHeight 
                        autoHeightMax={`calc(100vh - ${headerHeight}px)`}
                        autoHeightMin={`calc(100vh - ${headerHeight}px)`}
                    >
                        {routePage(location)}
                    </Scrollbars>
                </ViewRootContainer>
            );
        default:
            return null;
    }
}

export default connect(state => ({
    location: state.location
}))(ViewRoot);