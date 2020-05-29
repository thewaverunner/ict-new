import styled from 'styled-components'

import { BREAKPOINTS } from '../../../../utils/constants'

export const ArticlePageSection = styled.div`
    background-color: #fafafa;
`

export const ArticlePageWrapper = styled.div`
    max-width: 690px;
    margin: 0 auto 16px;
    padding: 145px 0 310px;
    display: inherit;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        padding: 80px 0 160px;
        max-width: 520px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        padding: 50px 25px 100px;
    } 
`

export const ArticlePageTitle = styled.h1`
    font-family: 'DM Sans Bold';
    line-height: 56px;
    color: #1d1d1f;
    text-align: left;

    font-size: ${FONTS.h2}px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 35px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 32px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 28px;
        margin-bottom: 0;
    }
`

export const ArticlePageTime = styled.p`
    color: #1D1D1F;
    margin-bottom: 37px;
    font-family: 'DM Sans Regular';
    line-height: 31px;

    font-size: ${FONTS.h3}px;
`

export const ArticlePageParagraph = styled.p`
    color: #1d1d1f;
    font-family: 'DM Sans Regular';
    line-height: 31px;
    
    margin-bottom: ${props => props.marginMedium ? '75px' : '35px'};

    font-size: ${FONTS.h3}px;
    
    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 19px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 17px;
    }
`

export const ArticlePageImage = styled.div`
    margin-bottom: 35px;
`