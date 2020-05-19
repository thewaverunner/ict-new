import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const BaseSectionWrapper = styled.div`
    background: url(${props => props.backgroundImage});
    background-size: cover;
    width: 100%;
    padding: 110px 0 100px;
    margin-bottom: 16px;

    @media screen and (max-width: 552px) {
        padding-bottom: 50px;
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

    @media screen and (max-width: 1170px) {
        max-width: 960px;
    }

    @media screen and (max-width: 992px) {
        max-width: 740px;
    }

    @media screen and (max-width: 768px) {
        max-width: 520px;
    }

    @media screen and (max-width: 552px) {
        max-width: 92%;
        margin: 0 4% 20px;
        align-items: ${props => props.textAlign === 'left' ? 'start' : (props.titleColor == 'gradient' ? 'center' : 'start')};
    }
`

export const BaseSectionTitle = styled.h1`
    font-size: 47px;
    color: ${props => props.titleColor === 'black' ? '#000000' : '#ffffff'};
    margin-bottom: ${props => props.titleColor === 'gradient' ? '30px' : '15px'};
    line-height: 60px;
    font-family: 'DM Sans Bold';

    background: ${props => props.titleColor === 'gradient' ? 'linear-gradient(90deg, rgba(67,195,251,1) 0%, rgba(167,56,250,1) 100%)' : '' };
    -webkit-background-clip: ${props => props.titleColor === 'gradient' ? 'text' : ''};
    -webkit-text-fill-color: ${props => props.titleColor === 'gradient' ? 'transparent' : ''};
    max-width: ${props => props.titleColor === 'gradient' ? '74%' : ''};
    text-align: ${props => props.titleColor === 'gradient' ? 'center' : ''};

    @media screen and (max-width: 768px) {
        font-size: 41px;
        line-height: 60px;
        max-width: ${props => props.titleColor === 'gradient' ? '84%' : ''};
    }

    @media screen and (max-width: 552px) {
        font-size: 35px;
        text-align: ${props => props.titleColor === 'gradient' ? 'center' : 'left'};
    }
`

export const BaseSectionSubtitle = styled.h3`
    font-size: 31px;
    color: ${props => props.titleColor === 'black' ? '#000000' : '#ffffff'};
    margin-bottom: 15px;
    line-height: 60px;
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
        transform: translateX(-10px)
    }

    @media screen and (max-width: 992px) {
        font-size: 28px;
    }
`

export const BaseSectionDescription = styled.p`
    font-size: 21px;
    color: ${props => props.titleColor === 'black' ? '#000000' : '#ffffff'};
    margin-bottom: 50px;
    font-family: 'DM Sans Regular';
    line-height: 31px;
    max-width: 50%;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 80%;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 19px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        text-align: left;
    }
`