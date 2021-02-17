import React from 'react';
import styled from '@emotion/styled';
import { keyframes }  from '@emotion/react';


const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const SpinnerContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
})

const Spinner = styled('div')(({ theme }) => ({
    border: '16px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: `16px solid ${theme.primaryColor}`,
    width: 120,
    height: 120,
    animation: `${spin} 2s linear infinite`
}));

const Loader = () => {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    );
}

export default Loader;