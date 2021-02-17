import React from 'react';
import styled from '@emotion/styled';

const InputContainer = styled('div')({
    width: '100%'
});

const InputStyle = styled('input')({
    border: 0,
    borderRadius: 30,
    height: 55,
    width: 'calc(100% - 40px)',
    padding: '0 20px'
});

const Input = ({ placeholder, forwardedRef, ...others }) => (
    <InputContainer>
        <InputStyle placeholder={placeholder} ref={forwardedRef} {...others} />
    </InputContainer>
);

export default Input;