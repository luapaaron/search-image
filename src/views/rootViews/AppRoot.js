
import React, { lazy, Suspense } from 'react';
import styled from '@emotion/styled';
import { NOT_FOUND } from 'redux-first-router';

import { connect } from 'react-redux';

import { ROUTE_HOME } from '../../constants/routes';

// Dynamic imports
const Header = lazy(() => import('../layouts/Header'));
const ViewRoot = lazy(() => import('./ViewRoot'));

const AppRootContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
});

const commonComponents = () => (
    <AppRootContainer>
        <Suspense fallback={<div />}>
            <Header />
        </Suspense>
        <Suspense fallback={<div />}>
            <ViewRoot />
        </Suspense>
    </AppRootContainer>
);

const AppRoot = ({ location }) => {
    switch (location.type) {
        case ROUTE_HOME:
            return commonComponents();
        case NOT_FOUND:
            return null;
        default:
            return null;
    }
}

export default connect(state => ({
    location: state.location
}))(AppRoot);