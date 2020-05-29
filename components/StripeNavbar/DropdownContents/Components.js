import styled from 'styled-components'

import {FONTS, COLORS} from '../../../utils/constants'

export const DropdownSection = styled.div`
    padding: 25px 25px;
    position: relative;
    z-index: 1;

    li {
        padding: 10px 0;
        margin: 0;
    }

    li:first-child {
        padding-top: 0;
    }

    li:last-child {
        padding-bottom: 0;
    }

    a {
        text-decoration: none;
        color: ${COLORS.dark};
        transition: opacity .3s ease-in-out;
        
        font-size: ${FONTS.p}px;
        font-family: 'DM Sans Bold';
    }

    a:hover {
        opacity: 0.5;
    }
`

export const DropdownSectionMobile = styled.div`
    margin-top: 10px;
    padding: 10px 35px 10px;
    position: relative;
    z-index: 1;

    ul {
        margin-bottom: 15px;
        padding:0;
    }

    li:first-child {
        font-size: 16px;
        line-height: 40px;
        font-family: 'DM Sans Bold';
        color: ${COLORS.dark};
        text-transform: uppercase;
    }

    li a {
        text-decoration: none;
        font-family: "DM Sans Regular";
        font-weight: 500;
        font-size: ${FONTS.p}px;
        line-height: 30px;
        text-align: left;
        color: ${COLORS.dark}; 
    }

    a:hover {
        opacity: 0.5;
        transition: opacity .3s ease-in-out;
    }

    .close-icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 30px;
        align-self: center;
        background-color: white;
        position: absolute;
        right: 20px;
        top: 0px;
    } 

    .close-icon  span {
        display: block;
        width: 100%;
        height: 4px;
        background-color: ${COLORS.dark};
        border-radius: 3px;
        transition: transform 0.3s ease;
    }

    .close-icon  span:first-child {
        transform: rotate(45deg)translate(14px, 1px);
    }

    .close-icon  span:last-child {
        transform: rotate(-45deg)translate(17px, -5px);
    }
`