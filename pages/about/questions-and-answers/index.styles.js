import styled from 'styled-components'

import { BREAKPOINTS, FONTS, COLORS, MAX_WIDTH_CONTAINER } from '../../../utils/constants'

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
    margin-bottom: 20px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        text-align: center;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 44px;

        font-size: ${FONTS.h1}px;
    }
`

export const QuestionsAndAnswersPageTopSectionDescription = styled.p`       
    font-family: 'DM Sans Regular';
    line-height: 21px;
    color: #1d1d1f;
    
    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 24px;

        font-size: ${FONTS.h3}px;
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
    font-family: 'DM Sans Bold';
    font-size: 32px;
    line-height: 44px;
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
    background: ${props => props.backgroundStyle === 'white' ? '#fafafa' : COLORS.white};

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
    padding: 38px 25px 47px;
    margin: 0 25px -20px;

    background: ${props => props.backgroundStyle === 'white' ? COLORS.white : '#fafafa'};

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

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const CorporateGovernancePartnershipsDescriptionWrapper = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 530px;
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
    margin-bottom: 22px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        transform: none;
        line-height: 44px;

        font-size: ${FONTS.h1}px;
    }
`

export const CorporateGovernancePartnershipsDescription = styled.p`
    font-family: 'DM Sans Regular';
    line-height: 21px;
    color: #1d1d1f;
    margin-bottom: 31px;

    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 31.5px;

        font-size: ${FONTS.h3}px;
    }
`