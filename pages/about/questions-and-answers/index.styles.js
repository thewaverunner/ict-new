import styled from 'styled-components'

import { BREAKPOINTS } from '../../../utils/constants'

export const QuestionsAndAnswersPageTopSectionWrapper = styled.div`
    padding: 0 25px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 0;
    }
`

export const QuestionsAndAnswersPageTopSection = styled.div`       
    padding: 38px 0 60px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;
        max-width: 700px;

        margin: 0 auto;
        padding: 38px 0 60px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 93px 0;
        max-width: 800px;
    }
`

export const QuestionsAndAnswersPageTopSectionTitle = styled.h1`       
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;

    color: #1d1d20;
    margin-bottom: 10px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 56px;
        line-height: 60px;
    }
`

export const QuestionsAndAnswersPageTopSectionDescription = styled.p`       
    font-family: 'DM Sans Regular';
    font-size: 14px;
    line-height: 21px;

    color: #1d1d1f;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 24px;
        line-height: 38px;
    }
`

export const QuestionsAndAnswersPageQuestionQrapper = styled.div`       
    background-color: #fafafa;

`

export const QuestionsAndAnswersPageQuestionSection = styled.div`       
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        max-width: 890px;
        margin: 0 auto;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 143px 0 30px 0;
    }
`

export const QuestionsAndAnswersPageQuestionSectionTitle = styled.h2`       
    font-family: "DM Sans Bold";
    font-size: 32px;
    line-height: 60px;

    color: #1d1d1f;
    margin-bottom: 15px;
`

export const QuestionsAndAnswersPageQuestionList = styled.ul`       
    padding-bottom: 50px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-bottom: 153px;
    }
`

export const CorporateGovernancePartnershipsSection = styled.div`
    position: relative;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        display: flex;
        flex-direction: row-reverse;
    }
`

export const CorporateGovernancePartnershipsImage = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 40px 0;
        width: 45%;
        overflow: hidden;

        img {
            width: 100%;
        }
    }
`

export const CorporateGovernancePartnershipsContent = styled.div`
    transform: translateY(-25%);

    background: ${props => props.backgroundStyle === 'white' ? '#ffffff' : '#fafafa'};
    
    padding: 38px 25px 47px;
    margin: 0 25px -20px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        transform: none;
        margin: 0;
        padding: 0;
        width: 55%;
    }
`

export const CorporateGovernancePartnershipsContentWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        width: 100%;
        max-width: 1350px;
        margin: 0 auto;
        padding-left: 20px;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
    
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
`

export const CorporateGovernancePartnershipsDescriptionWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 550px;
        width: 100%;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        max-width: 638px;
    }
`

export const CorporateGovernancePartnershipsTitle = styled.h2`
    font-family: 'DM Sans Bold';
    font-size: 30px;
    line-height: 34px;

    color: #1d1d20;
    margin-bottom: 22px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        transform: none;
        font-size: 47px;
        line-height: 60px;
    }
`

export const CorporateGovernancePartnershipsDescription = styled.p`
    font-family: 'DM Sans Regular';
    font-size: 14px;
    line-height: 21px;

    color: #1d1d1f;
    margin-bottom: 31px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 21px;
        line-height: 31.5px;
    }
`