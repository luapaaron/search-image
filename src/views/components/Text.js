import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const propTypes = {
    bold: PropTypes.bool,
    fontSize: PropTypes.number,
    lineHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    noWrap: PropTypes.bool,
    inverted: PropTypes.bool
}

const defaultProps = {
    bold: false,
    fontSize: 14,
    lineHeight: 'normal',
    noWrap: false,
    inverted: false
}

const Text = styled('span')(({
    theme, bold, fontSize, lineHeight, noWrap, inverted
}) => ({
    color: inverted ? theme.white : theme.textColor,
    fontWeight: bold ? 'bold' : 'normal',
    fontSize,
    lineHeight: lineHeight ? lineHeight : '',
    whiteSpace: noWrap ?'nowrap' : 'normal',
    cursor: 'default'
}));

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;