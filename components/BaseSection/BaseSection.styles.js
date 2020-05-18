import styled from 'styled-components'

import { BREAKPOINTS } from '../../utils/constants'

export const BaseSectionWrapper = styled.div`
    background: url(${props => props.backgroundImage});
    background-size: cover;
    width: 100%;
    padding: 110px 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        padding-bottom: 50px;
    }
`

export const BaseSectionTitle = styled.h1`
    font-size: 47px;
    color: #FFFFFF;
    margin-bottom: 15px;
    line-height: 60px;
    font-family: 'DM Sans Bold';

    background: ${props => props.titleColor === 'gradient' ? 'linear-gradient(90deg, rgba(67,195,251,1) 0%, rgba(167,56,250,1) 100%)' : '' };
    -webkit-background-clip: ${props => props.titleColor === 'gradient' ? 'text' : ''};
    -webkit-text-fill-color: ${props => props.titleColor === 'gradient' ? 'transparent' : ''};
    max-width: ${props => props.titleColor === 'gradient' ? '44%' : ''};
    text-align: ${props => props.titleColor === 'gradient' ? 'center' : ''};

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: ${props => props.titleColor === 'gradient' ? '35px' : ''};
    }

    @media screen and (max-width:1800px){
        max-width: ${props => props.titleColor === 'gradient' ? '54%' : ''};
    }
    
    @media screen and (max-width:1360px){
        max-width: ${props => props.titleColor === 'gradient' ? '63%' : ''};
    }

    @media screen and (max-width: 1000px){
        max-width: ${props => props.titleColor === 'gradient' ? '73%' : ''};
    }

    @media screen and (max-width: 850px){
        max-width: ${props => props.titleColor === 'gradient' ? '75%' : ''};
    }
`

export const BaseSectionSubtitle = styled.h3`
    font-size: 31px;
    color: #FFFFFF;
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

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 28px;
    }
`

export const BaseSectionDescription = styled.p`
    font-size: 21px;
    color: #FFFFFF;
    margin-bottom: 50px;
    font-family: 'DM Sans Regular';
    line-height: 31px;
    max-width: 50%;
    text-align: center;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 80%;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 19px;
    }
`

