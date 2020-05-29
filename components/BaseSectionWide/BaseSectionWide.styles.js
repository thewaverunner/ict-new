import styled from 'styled-components'

import { BREAKPOINTS, FONTS, COLORS } from '../../utils/constants'

// Full Mode

export const BaseSectionWideFullWrapper = styled.div`
    margin-bottom: 16px;    
    display: flex;
    justify-content: center;
    background-size: cover;
    position: relative;
`

export const BaseSectionWideFullContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    align-items: ${(props) => props.reverse ? 'flex-end' : 'flex-start'};

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 720px;
        align-items: flex-start;
    }
`

export const BaseSectionWideFullContentWrapper = styled.div`
    max-width: 45%;
    position: relative;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 60%;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 70%;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 70%;
        padding-left: 25px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        max-width: 90%;
    }
`

export const BaseSectionWideFullImageWrapper = styled.div`
    width: 100%;
    min-height: 696px;
    background-image: url(${props => props.src});
    background-size: cover;

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
         width: 100%;
         min-height: 369px;
    }
`

export const BaseSectionWideFullImage = styled.img`
    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        width: 100%;
    }
`

export const BaseSectionWideFullTitle = styled.h1`
    color: ${(props) => props.themeMode === 'light' ? COLORS.dark : COLORS.white};
    font-size: ${FONTS.h2}px;
    font-family: "DM Sans Bold";
    line-height: 56.4px;
    margin-bottom: 20px;

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
        line-height: 37px;
        margin-bottom: 20px;
        font-family: "DM Sans Bold";
    }
`

export const BaseSectionWideFullSubtitle = styled.h3`
    color: ${(props) => props.themeMode === 'light' ? COLORS.dark : COLORS.white};

    font-size: ${FONTS.p}px;
    font-family: "DM Sans Regular";
    line-height: 31.5px;
    margin-bottom: 15px;
    position: relative;
    padding-top: 30px;

    @media screen and (max-width: ${BREAKPOINTS.xs}px){
        font-size: 12px;
        line-height: 30px;
    }
`

export const BaseSectionWideFullDescription = styled.p`
    color: ${(props) => props.themeMode === 'light' ? '#333333' : COLORS.white};

    font-size: ${FONTS.h3}px;
    font-family: "DM Sans Regular";
    line-height: 31px;
    margin-bottom: 70px;
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
        font-family: "DM Sans Regular";
        font-weight: normal;
        font-size: ${FONTS.p}px;
        line-height: 28px;
        margin-bottom: 35px;
    }
`

// Half Mode

export const BaseSectionWideHalfWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
    justify-content: flex-start;

    position: relative;

    ${(props) => props.imageFull ? '' : 'min-height: 696px'};

    flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
    background-color: ${(props) => props.themeMode === 'dark' ? '#1D1D1F' : '#FAFAFA'};

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        ${(props) => props.imageFull ? '' : 'min-height: 496px'};
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        flex-direction: column;
    }
`

export const BaseSectionWideHalfImageWrapper = styled.div`
    width: 50%;
    display: flex;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        width: 100%;
    }
`

export const BaseSectionWideHalfImageContainer = styled.div`
    display: flex;

    ${(props) => props.imageFull ? 'width: 100%' : 'width: 60%'};

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        width: 100%;
    }
`

export const BaseSectionWideHalfImage = styled.img`
    width: 100%;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        width: 100%;
    }
`

export const BaseSectionWideHalfContent = styled.div`
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: ${(props) => props.reverse ? 'flex-start' : 'flex-end'};

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        position: relative;
    }
`

export const BaseSectionWideHalfContentWrapper = styled.div`
    max-width: 43%;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        padding: 0 25px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 100%;
        padding: 50px 25px;
    }
`

export const BaseSectionWideHalfTitle = styled.h1`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: ${FONTS.h2}px;
    font-family: "DM Sans Bold";
    line-height: 44px;
    margin-bottom: 15px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 43px;
        line-height: 44px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 28px;
        line-height: 30px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
       font-size: 32px;
       line-height: 36px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 30px;
        line-height: 37px;
        margin-bottom: 30px;
    }
`

export const BaseSectionWideHalfSubtitle = styled.h3`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: ${FONTS.p}px;
    font-family: "DM Sans Regular";
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

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 12px;
        line-height: 20px;
       
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {

        line-height: 18px;
       
    }
`

export const BaseSectionWideHalfDescription = styled.p`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: ${FONTS.h3}px;
    font-family: "DM Sans Regular";
    line-height: 31px;
    margin-bottom: 15px;
    position: relative;
    padding-top: 30px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 20px;
        line-height: 29px;
        padding-top: 0;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 19px;
        line-height: 20px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        font-size: 18px;
        line-height: 19px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 35px;
    }
`

// Shadow Mode

export const BaseSectionWideShadowWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
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

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
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
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: ${(props) => props.reverse ? 'flex-start' : 'flex-end'};

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        position: relative;
    }
`

export const BaseSectionWideShadowContentWrapper = styled.div`
    max-width: 55%;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        padding: 0 25px;
        max-width: 65%;
        transform: none;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 100%;
        padding: 50px 25px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 100%;
    }
`

export const BaseSectionWideShadowTitle = styled.h1`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: ${FONTS.h2}px;
    font-family: "DM Sans Bold";
    line-height: 44px;
    margin-bottom: 15px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 34px;
        line-height: 50px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: ${FONTS.h3}px;
        line-height: 34px;
    }
`

export const BaseSectionWideShadowSubtitle = styled.h3`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: ${FONTS.p}px;
    font-family: "DM Sans Regular";
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

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 13px;
        line-height: 18px;
    }
`

export const BaseSectionWideShadowDescription = styled.p`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};
    font-size: ${FONTS.h3}px;
    font-family: "DM Sans Regular";
    line-height: 31px;
    margin-bottom: 55px;
    position: relative;
    padding-top: 30px;

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
        font-size: ${FONTS.p}px;
        line-height: 21px;
        margin-bottom: 35px;
    }
`