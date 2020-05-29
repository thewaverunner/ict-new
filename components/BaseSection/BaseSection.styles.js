import styled from 'styled-components'

import { BREAKPOINTS, FONTS, COLORS } from '../../utils/constants'

export const BaseSectionWrapper = styled.div`
    background: url(${props => props.backgroundImage});
    padding: ${props => props.titleColor === 'gradient' ? '87px 0 115px' : (props.buttonTitle  ? '126px 0 126px' : '150px 0')};

    background-size: cover;
    width: 100%;
    margin-bottom: 16px;

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        padding:  42px 0 50px;
    }
`

export const BaseSectionContent = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: ${props => props.textAlign !== 'left' ? 'center' : (props.titleColor == 'gradient' ? 'center' : 'start')};
    text-align: ${props => props.textAlign === 'left' ? 'left' : 'center'};

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 960px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 740px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
       padding: 0 25px;
       align-items: ${props => props.titleColor == 'gradient' ? 'center' : 'end'};
    }
`

export const BaseSectionTitle = styled.h1`
    font-size: ${FONTS.h1}px;
    line-height: 44px;
    font-family: 'DM Sans Bold';

    color: ${props => props.titleColor === 'black' ? COLORS.dark : COLORS.white};
    margin-bottom: ${props => props.titleColor === 'gradient' ? '30px' : '22px'};
    background: ${props => props.titleColor === 'gradient' ? 'linear-gradient(90deg, rgba(67,195,251,1) 0%, rgba(167,56,250,1) 100%)' : '' };
    -webkit-background-clip: ${props => props.titleColor === 'gradient' ? 'text' : ''};
    -webkit-text-fill-color: ${props => props.titleColor === 'gradient' ? 'transparent' : ''};
    max-width: ${props => props.titleColor === 'gradient' ? '74%' : ''};
    text-align: ${props => props.titleColor === 'gradient' ? 'center' : ''};

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

        max-width: ${props => props.titleColor === 'gradient' ? '84%' : ''};
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        line-height: 34px;
        margin-bottom: 15px;
        
        font-size: ${props => props.titleColor === 'gradient' ? '18px' : '30px'};
        text-align: ${props => props.titleColor === 'gradient' ? 'center' : 'left'};
    }
`

export const BaseSectionSubtitle = styled.h3`
    font-size: 31px;

    color: ${props => props.titleColor === 'black' ? COLORS.dark : COLORS.white};

    margin: 22px 0 15px;
    line-height: 44px;
    font-family: 'DM Sans Bold';
    position: relative;

    &:before {
        content: '';
        height: 1px;
        width: 21.4px;
        display: block;
        background-color: #A23BFF;
        position: absolute;
        left: 50%;
        top: -15px;
        transform: translateX(-10px)
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 28px;
        text-align: left;
    }
    
    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        margin: 15px 0;

        &:before {
            left: 10%;
            top: -10px;
        }
    }
`

export const BaseSectionDescription = styled.p`
    font-size: ${FONTS.h3}px;

    color: ${props => props.titleColor === 'black' ? COLORS.dark : COLORS.white};
    margin-bottom: ${props => props.buttonTitle ? '50px' : '0'};

    font-family: 'DM Sans Regular';
    line-height: 31px;
    max-width: 65%;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 80%;
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
        text-align: left;
        max-width: 100%;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 16px;
        line-height: 21px;
        margin-bottom: 35px;
    }
`