import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

// Full Mode

export const BaseSectionWideFullWrapper = styled.div`
    padding: 190px 0 180px 0; 
    display: flex;
    margin-bottom: 16px;
    justify-content: center;

    flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
    background-color: ${(props) => props.themeMode === 'dark' ? '#1D1D1F' : '#FAFAFA'};
    background-image: url(${(props) => props.imageUrl});

    background-size: cover;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        padding: 160px 0 145px; 
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        padding: 130px 0 125px; 
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        padding: 90px 25px 85px; 
        justify-content: start;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        padding: 60px 25px 75px; 
    }
`

export const BaseSectionWideFullContent = styled.div`
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: ${(props) => props.reverse ? 'flex-end' : 'flex-start'};

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 720px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 520px;
    }  
`

export const BaseSectionWideFullContentWrapper = styled.div`
    max-width: ${props => props.contentWidth};

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 60%;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 70%;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 100%;
    }
`

export const BaseSectionWideFullTitle = styled.h1`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FFFFFF'};
    font-size: 47px;
    font-family: "DM Sans Bold";
    line-height: 56px;
    margin-bottom: 17px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 44px;
        line-height: 50px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 38px;
        line-height: 50px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
       font-size: 34px;
       line-height: 44px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 30px;
        line-height: 34px;
    }
`

export const BaseSectionWideFullSubtitle = styled.h3`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 14px;
    font-family: "DM Sans";
    line-height: 21px;
    margin-bottom: 15px;
    position: relative;
    padding-top: 30px;

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        font-size: 12px;
        line-height: 30px;
    }
`

export const BaseSectionWideFullDescription = styled.p`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 21px;
    font-family: "DM Sans Regular";
    line-height: 31px;
    margin-bottom: 75px;
    position: relative;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 20px;
        line-height: 29px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 19px;
        line-height: 26px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 35px;
    }
`

// Half Mode

export const BaseSectionWideHalfWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
    justify-content: center;

    flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
    background-color: ${(props) => props.themeMode === 'dark' ? '#1D1D1F' : '#FAFAFA'};

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        flex-direction: column;
    }

`

export const BaseSectionWideHalfImageWrapper = styled.div`
    width: 50%;
    display: flex;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        width: 100%;
    }
`

export const BaseSectionWideHalfImage = styled.img`
    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        width: 100%;
    }
`

export const BaseSectionWideHalfContent = styled.div`
    width: 50%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        width: 100%;
    }
`

export const BaseSectionWideHalfContentWrapper = styled.div`
    max-width: 60%;

    @media screen and (max-width: ${BREAKPOINTS.lg}px){
        max-width: 100%;
        padding: 0 25px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        max-width: 100%;
        padding: 50px 25px;
    }
`

export const BaseSectionWideHalfTitle = styled.h1`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 47px;
    font-family: "DM Sans Bold";
    line-height: 60px;
    margin-bottom: 15px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 44px;
        line-height: 50px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 38px;
        line-height: 50px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
       font-size: 34px;
       line-height: 44px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 30px;
        line-height: 34px;
    }
`

export const BaseSectionWideHalfSubtitle = styled.h3`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 14px;
    font-family: "DM Sans";
    line-height: 21px;
    margin-bottom: 15px;
    position: relative;
    padding-top: 30px;

    &:before {
        content: '';
        height: 1px;
        width: 42.4px;
        display: block;
        background-color: #A23BFF;
        position: absolute;
        left: 0;
        top: 10px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 12px;
        line-height: 18px;
    }
`

export const BaseSectionWideHalfDescription = styled.p`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 21px;
    font-family: "DM Sans";
    line-height: 31px;
    margin-bottom: 15px;
    position: relative;
    padding-top: 30px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 20px;
        line-height: 29px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 19px;
        line-height: 26px;
        padding-top: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 35px;
    }
`

// Shadow Mode

export const BaseSectionWideShadowWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
    position: relative;

    flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
    background-color: ${(props) => props.themeMode === 'dark' ? '#1D1D1F' : '#FAFAFA'};

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        flex-direction: column;
    }
`

export const BaseSectionWideShadowImage = styled.img`
    width: 65%;

    @media screen and (max-width: ${BREAKPOINTS.md}px){
        width: 100%;
    }
`

export const BaseSectionWideShadowMode = styled.div`
    width: 50%;
    height: 100%;
    display: block;
    position: absolute;

    ${(props) => props.reverse ? 'left: 35%' : 'right: 35%'};
    
    background: linear-gradient(${(props) => props.reverse ? '-270deg' : '270deg'}, ${(props) => props.themeMode === 'dark' ? '#1D1D1F' : '#FAFAFA'} 0%, rgba(29, 29, 31, 0) 100%);

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        display: none;
    }
`

export const BaseSectionWideShadowContent = styled.div`
    max-width: 45%;
    position: absolute;
    top: 18%;

    ${(props) => props.reverse ? 'left: 20%' : 'right: 20%'};

    @media screen and (max-width: 1400px) {
        max-width: 45%;
        top: 12%;
    }

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        top: 5%;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 100%;
        padding: 50px 25px 70px;
        position: relative;
        top: 0;
        left: 0;
    }
`

export const BaseSectionWideShadowTitle = styled.h1`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 47px;
    font-family: "DM Sans Bold";
    line-height: 60px;
    margin-bottom: 15px;

    @media screen and (max-width: 1400px) {
        font-size: 32px;
    }

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 34px;
        line-height: 50px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 28px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
       font-size: 34px;
       line-height: 44px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 24px;
        line-height: 34px;
    }
`

export const BaseSectionWideShadowSubtitle = styled.h3`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 14px;
    font-family: "DM Sans";
    line-height: 21px;
    margin-bottom: 15px;
    position: relative;
    padding-top: 30px;

    &:before {
        content: '';
        height: 1px;
        width: 42.4px;
        display: block;
        background-color: #A23BFF;
        position: absolute;
        left: 0;
        top: 10px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 12px;
        line-height: 18px;
    }
`

export const BaseSectionWideShadowDescription = styled.p`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};
    font-size: 21px;
    font-family: "DM Sans Regular";
    line-height: 31px;
    margin-bottom: 55px;
    position: relative;
    padding-top: 30px;

    @media screen and (max-width: 1400px) {
        font-size: 16px;
        margin-bottom: 35px;
        line-height: 29px;
        padding-top: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 19px;
        line-height: 26px;
        padding-top: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 35px;
    }
`