import styled from 'styled-components'

import { 
    BREAKPOINTS,
    FONTS, 
    COLORS, 
    } from '../../../utils/constants'

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
  
    color: ${COLORS.darken};
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
    margin-bottom: 15px;
    
    color: ${COLORS.darken};
`

export const QuestionsAndAnswersPageQuestionList = styled.ul`       
    padding-bottom: 50px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-bottom: 153px;
    }
`