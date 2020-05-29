import styled from 'styled-components'

import { 
    BREAKPOINTS,
    FONTS, 
    COLORS, 
    MAX_WIDTH_CONTAINER 
} from '../../utils/constants'

export const Footer = styled.footer`
    width: 100%;

    background-color: ${props => props.backgroundWhite ? COLORS.white : '#fafafa'};
`

export const FooterWrapper = styled.div`
    margin: 0 auto;

    max-width: ${MAX_WIDTH_CONTAINER}px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 720px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
       padding: 52px 25px;
    }  
`

export const FooterTopContent = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ededed;
    padding: 83px 0 40px;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        flex-wrap: wrap;
        display: flex;
        padding: 0;
    }
` 

export const FooterChangeLanguage = styled.div`
    flex-basis: 10%;
    font-size: 16px;
    font-family: 'DM Sans Bold';
    display: flex;
    position: relative;
    
    color: ${COLORS.dark};
    
    img {
        width: 12px;
        height: 12px;
        margin: 3px 5px 0 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        flex: 1 1 100%;  
        margin-bottom: 20px;
    }
`

export const FooterLinks = styled.div`
    flex-basis: 22%;

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        flex: 1 1 100%;  
        margin: 20px 0 0;
    }
`

export const FooterLinksTitle = styled.div`
    margin-bottom: 25px;
    font-size: 16px;
    font-family: 'DM Sans Bold';

    color: ${COLORS.dark};
`

export const FooterLinksList = styled.ul``

export const FooterLinksItem = styled.li`
    margin-bottom: 25px;
`

export const FooterLinksItemLink = styled.a`
    font-family: 'DM Sans Regular';
    text-decoration: none;
    transition: opacity .3s ease-in-out;
    
    font-size: ${FONTS.p}px;
    color: ${COLORS.dark};

    &:hover {
        opacity: 0.5;
    }
`

export const FooterBottomContent = styled.div`
    width: 100%;
`

export const FooterBottomWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 26px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        flex-direction: column;
    }
`

export const FooterCopyright = styled.div`
    font-family: 'DM Sans Medium';
    color: #a3a3a4;

    font-size: ${FONTS.p}px;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        margin-top: 20px;
        order: 2;
        max-width: 50%;
        line-height: 20px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 12px;
        max-width: 61%;
    }  
`

export const FooterBottomPolicyList = styled.ul`
    list-style: none;

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        width: 100%;

        display: flex;
        justify-content: space-between;
    }  
`

export const FooterBottomPolicyItem = styled.li`
    display: inline-block;
    padding-right: 15px;

    &:last-child {
        padding-right: 0;
    }
`

export const FooterBottomPolicyItemLink = styled.a`
    color: #a3a3a4;
    text-decoration: none;
    font-family: 'DM Sans Medium';
    transition: color 0.3s ease-in-out;
    
    font-size: ${FONTS.p}px;
    
    &:hover {
        color: ${COLORS.dark};
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 12px;
    }  
`