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

    @media screen and (max-width: 1170px) {
        padding: 160px 0 145px; 
    }

    @media screen and (max-width: 992px) {
        padding: 130px 0 125px; 
    }

    @media screen and (max-width: 768px) {
        padding: 90px 25px 85px; 
        justify-content: start;
    }

    @media screen and (max-width: 552px) {
        padding: 60px 25px 75px; 
    }
`

export const BaseSectionWideFullContent = styled.div`
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: ${(props) => props.reverse ? 'flex-end' : 'flex-start'};

    @media screen and (max-width: 1170px) {
        max-width: 950px;
    }

    @media screen and (max-width: 992px) {
        max-width: 720px;
    }

    @media screen and (max-width: 768px) {
        max-width: 520px;
    }  
`

export const BaseSectionWideFullContentWrapper = styled.div`
    max-width: ${props => props.contentWidth};

    @media screen and (max-width: 1170px) {
        max-width: 60%;
    }

    @media screen and (max-width: 992px) {
        max-width: 70%;
    }

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`

export const BaseSectionWideFullTitle = styled.h1`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FFFFFF'};
    font-size: 47px;
    font-family: "DM Sans Bold";
    line-height: 56px;
    margin-bottom: 17px;

    @media screen and (max-width: 1170px) {
        font-size: 44px;
        line-height: 50px;
    }

    @media screen and (max-width: 992px) {
        font-size: 38px;
        line-height: 50px;
    }

    @media screen and (max-width: 768px) {
       font-size: 34px;
       line-height: 44px;
    }

    @media screen and (max-width: 552px) {
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

    @media screen and (max-width: 600px){
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

    @media screen and (max-width: 1170px) {
        font-size: 20px;
        line-height: 29px;
    }

    @media screen and (max-width: 992px) {
        font-size: 19px;
        line-height: 26px;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media screen and (max-width: 552px) {
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

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`

export const BaseSectionWideHalfImageWrapper = styled.div`
    width: 50%;
    display: flex;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const BaseSectionWideHalfImage = styled.img`
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const BaseSectionWideHalfContent = styled.div`
    width: 50%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const BaseSectionWideHalfContentWrapper = styled.div`
    max-width: 60%;

    @media screen and (max-width: 1170px){
        max-width: 100%;
        padding: 0 25px;
    }

    @media screen and (max-width: 768px){
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

    @media screen and (max-width: 1170px) {
        font-size: 44px;
        line-height: 50px;
    }

    @media screen and (max-width: 992px) {
        font-size: 38px;
        line-height: 50px;
    }

    @media screen and (max-width: 768px) {
       font-size: 34px;
       line-height: 44px;
    }

    @media screen and (max-width: 552px) {
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
`

export const BaseSectionWideHalfDescription = styled.p`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 14px;
    font-family: "DM Sans";
    line-height: 21px;
    margin-bottom: 15px;
    position: relative;
    padding-top: 30px;

    @media screen and (max-width: 1170px) {
        font-size: 20px;
        line-height: 29px;
    }

    @media screen and (max-width: 992px) {
        font-size: 19px;
        line-height: 26px;
        padding-top: 0;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media screen and (max-width: 552px) {
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

    @media screen and (max-width: 1000px){
        flex-wrap: wrap;
    }
`

export const BaseSectionWideShadowImage = styled.img`
    width: 65%;

    @media screen and (max-width: 775px){
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
`

export const BaseSectionWideShadowContent = styled.div`
    max-width: 25%;
    position: absolute;
    ${(props) => props.reverse ? 'left: 20%' : 'right: 20%'};
    top: 15%;  
`

export const BaseSectionWideShadowTitle = styled.h1`
    color: ${(props) => props.themeMode === 'light' ? '#1D1D1F' : '#FAFAFA'};

    font-size: 47px;
    font-family: "DM Sans Bold";
    line-height: 60px;
    margin-bottom: 15px;

    @media screen and (max-width: 1200px){
        font-size: 38px;
        line-height: 55px;
    }

    @media screen and (max-width: 1000px){
        font-size: 35px;
        line-height: 50px;
    }

    @media screen and (max-width: 870px){
        font-size: 32px;
        line-height: 35px;
    }

    @media screen and (max-width: 600px){
        font-size: 28px;
        line-height: 30px;
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

    @media screen and (max-width: 600px){
        font-size: 12px;
        line-height: 30px;
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
`