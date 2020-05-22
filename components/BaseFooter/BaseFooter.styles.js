import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const Footer = styled.footer`
    width: 100%;
    background-color: #fafafa;
`

export const FooterWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;

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
    color: #1D1D20;
    display: flex;
    position: relative;

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
    color: #1D1D20;
`

export const FooterLinksList = styled.ul``

export const FooterLinksItem = styled.li`
    margin-bottom: 25px;
`

export const FooterLinksItemLink = styled.a`
    font-family: "DM Sans Regular";
    font-size: 14px;
    color: #1d1d20;
    text-decoration: none;
    transition: opacity .3s ease-in-out;

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
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 26px 0;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        flex-direction: column;
    }
`

export const FooterCopyright = styled.div`
    font-size: 14px;
    color: #a3a3a4;
    font-family: 'DM Sans Medium';

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
    font-size: 14px;
    color: #a3a3a4;
    text-decoration: none;
    font-family: 'DM Sans Medium';

    &:hover {
        color: #1D1D20;
        transition: color 0.3s ease-in-out;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 12px;
    }  
`