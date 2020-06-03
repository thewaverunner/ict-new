import styled from 'styled-components'

import {
    FONTS, 
    COLORS
} from '../../utils/constants'

export const Button = styled.button`
    background-color: transparent;
    text-decoration: none;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans Regular';
    display: flex;
    border: none;
    
    min-width: ${props => (props.hideBorder ? "" : '160px')};
    padding: ${props => (props.hideBorder ? "0" : '14px 0')};
    color: ${props => (props.blackStyle === 'dark' ? "#000" : COLORS.white)};
    border: ${props => props.hideBorder ? '' : `1.5px solid ${props.blackStyle ? COLORS.black : COLORS.white}`};
    
    font-size: ${FONTS.p}px;

    &:hover {
        background-color:${props => props.hideBorder ? '' : (props.blackStyle === 'dark' ? COLORS.dark : COLORS.white)};
        color:${props => props.hideBorder ? '' : (props.blackStyle === 'dark' ? COLORS.white : COLORS.dark)};
    }

    span {
        display: inline-block;
        width: 6px;
        margin-left: 15px;
        height: 10px;

        background: ${props => (props.blackStyle === 'dark' ? "url('../static/images/base-arrow-black.svg') no-repeat;" : "url('../static/images/base-arrow-white.svg') no-repeat;")}
    }

    &:hover span {
        background: ${props => props.hideBorder ? '' : props.blackStyle === 'dark'  ? "url('../static/images/base-arrow-white.svg') no-repeat;" : "url('../static/images/base-arrow-black.svg') no-repeat;"}
    }
`