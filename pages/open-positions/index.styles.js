import styled from 'styled-components'


export const OpenPositionsPageSection = styled.div`
    padding: 40px 0 60px;
`

export const OpenPositionsPageWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;

    @media screen and (max-width: 1170px) {
        max-width: 980px;
    } 

    @media screen and (max-width: 992px) {
        max-width: 740px;
    } 

    @media screen and (max-width: 768px) {
        max-width: 520px;
    } 

    @media screen and (max-width: 552px) {
        max-width: 480px;
        margin: 0 20px;
    } 
`

export const OpenPositionsPageTitle = styled.h1`
    font-size: 47px;
    color:#000000;
    margin-bottom: 30px;
    line-height: 56px;
    font-family: 'DM Sans Bold';

    @media screen and (max-width: 768px) {
        font-size: 25px;
    } 

    @media screen and (max-width: 552px) {
        font-size: 22px;
    } 
`

export const OpenPositionsPageList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

export const OpenPositionsPageItem = styled.li`
    width: 30.5%;
    text-align: center;
    border: 1px solid #707070;
    margin: 0 30px 30px 0;
    box-shadow: 1px 0 0 rgba(0, 0, 0, 0.16);

    @media screen and (max-width: 1170px) {
        margin: 0 25px 25px 0;
    } 

    @media screen and (max-width: 992px) {
        width: 46%;
    } 

    @media screen and (max-width: 768px) {
        margin: 0 15px 15px 0;
    } 

    @media screen and (max-width: 552px) {
       width: 100%;
       margin: 0 0 30px;
    } 
`

export const OpenPositionsPageItemLink = styled.a`
    display: block;
    margin: 75px 0 80px;
`

export const OpenPositionsPageItemTitle = styled.h2`
    font-size: 31px;
    color: #000000;
    line-height: 60px;
    font-family: 'DM Sans Bold';
`

export const OpenPositionsPageItemContent = styled.p`
    font-size: 21px;
    color: #000000;
    line-height: 31px;
    font-family: 'DM Sans Regular';
`