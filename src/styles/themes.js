import { rgba, darken } from 'polished';

const PRIMARY_COLOR = '#3498db';
const BLACK = '#000';
const WHITE = '#FFF';
const TRANSPARENT = 'transparent';

const PRIMARY_COLOR_20 = rgba(PRIMARY_COLOR, 0.2);
const PRIMARY_COLOR_80 = rgba(PRIMARY_COLOR, 0.8);

const BODY_BG_COLOR = '#F6F6F6';

const HEADER_BG_COLOR = '#ecf0f1';
const USER_DRAWER_BG_COLOR = WHITE;

// Fill Button
const FILL_BUTTON_BG_COLOR_HOVER = darken(0.1, PRIMARY_COLOR);
const FILL_BUTTON_BG_COLOR_ACTIVE = darken(0.2, PRIMARY_COLOR);
const FILL_BUTTON_BG_COLOR_DISABLED = rgba(PRIMARY_COLOR, 0.4);

// input
const INPUT_BG_COLOR = TRANSPARENT;
const INPUT_BG_COLOR_INVERTED = WHITE;
const INPUT_PLACEHOLDER_COLOR = rgba(BLACK, 0.6);
const INPUT_PLACEHOLDER_ERROR_COLOR = '#A3212A';
const INPUT_HOVER_BG_COLOR = rgba(BLACK, 0.02);
const INPUT_HOVER_BG_COLOR_INVERTED = rgba(WHITE, 0.95);
const INPUT_ACTIVE_BG_COLOR = rgba(BLACK, 0.05);
const INPUT_ACTIVE_BG_COLOR_INVERTED = rgba(WHITE, 0.90);
const INPUT_BORDER_COLOR = rgba(BLACK, 0.42);
const INPUT_BORDER_HOVER_COLOR = rgba(BLACK, 0.87);
const INPUT_BORDER_ERROR = '#A22027';


const themes = {
    default: {
        primaryColor: PRIMARY_COLOR,
        bodyBgColor: BODY_BG_COLOR,
        textColor: BLACK,
        white: WHITE,

        fillBtnBgColor: PRIMARY_COLOR,
        fillBtnHoverBgColor: FILL_BUTTON_BG_COLOR_HOVER,
        fillBtnActiveBgColor: FILL_BUTTON_BG_COLOR_ACTIVE,
        fillBtnDisabledBgColor: FILL_BUTTON_BG_COLOR_DISABLED,

        inputBackgroundColor: INPUT_BG_COLOR,
        inputBackgroundColorInverted: INPUT_BG_COLOR_INVERTED,
        inputHoverBackgroundColor: INPUT_HOVER_BG_COLOR,
        inputHoverBackgroundColorInverted: INPUT_HOVER_BG_COLOR_INVERTED,
        inputActiveBackgroundColor: INPUT_ACTIVE_BG_COLOR,
        inputActiveBackgroundColorInverted: INPUT_ACTIVE_BG_COLOR_INVERTED,
        inputPlaceholderColor: INPUT_PLACEHOLDER_COLOR,
        inputPlaceholderErrorColor: INPUT_PLACEHOLDER_ERROR_COLOR,
        inputBorderBgColor: INPUT_BORDER_COLOR,
        inputBorderHoverBgColor: INPUT_BORDER_HOVER_COLOR,
        inputBorderError: INPUT_BORDER_ERROR

    }
}

export default themes;