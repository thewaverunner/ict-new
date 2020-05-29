import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    FONTS 
} from '../../utils/constants'

export const QuestionsAndAnswersPageQuestionItem = styled.li` 
    padding: 15px 10px;
    border-top: 1px solid #1d1d1f;
    cursor: pointer;

    &:last-child {
        border-bottom: 1px solid #1d1d1f;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 18px 10px;
    }
`

export const QuestionsAndAnswersPageQuestionItemTitleWrapper = styled.div`       
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const QuestionsAndAnswersPageQuestionItemTitle = styled.h2`       
    font-family: 'DM Sans Bold';
    line-height: 31.5px;
    color: #000;
    
    font-size: ${FONTS.p}px;
`

export const QuestionsAndAnswersPageQuestionIcon = styled.div``

export const QuestionsAndAnswersPageQuestionItemDescription = styled.p`       
    font-family: 'DM Sans Regular';
    line-height: 21px;
    color: #1d1d1f;
    padding: 0 0 10px 0;
    max-width: 90%;
    
    font-size: ${FONTS.p}px;
`