import styled from 'styled-components'

import {
    BREAKPOINTS,
    FONTS 
} from '../../../utils/constants'

export const NewsPageArticlesSection = styled.div`
    background-color: #fafafa;
`

export const NewsPageArticlesSectionWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto 16px;
    padding: 113px 10px 93px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        max-width: 950px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 720px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        padding: 40px 25px;
    }  
`

export const NewsPageArticlesSectionTitle = styled.h1`
    color:#1d1d1f;
    margin-bottom: 50px;
    font-family: 'DM Sans Bold';
    line-height: 56px;
    
    font-size: ${FONTS.h2}px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px){
        font-size: 35px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px){
        font-size: 32px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px){
        font-size: 28px;
        padding-left: 10px;
    }
`

export const NewsPageArticles = styled.div`
    flex: 0 1 32%;
    margin-bottom: 70px;

    @media screen and (max-width: ${BREAKPOINTS.sm}}px) {
        flex:1 1 45%;
        padding-right: 20px;

        &:nth-child(1),
        &:nth-child(2) {
            margin-bottom: 30px;
        }    
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        flex: 1 1 100%;
        padding: 0 10px;
    } 
`

export const NewsPageArticlesImage = styled.div``

export const NewsPageArticlesContent = styled.div`
    padding-right: 35px;
`

export const NewsPageArticlesTitle = styled.h2`
    color: #1d1d1f;
    margin: 40px 0 6px;
    font-family: 'DM Sans Bold';
    line-height: 31px;

    font-size: ${FONTS.h3}px;
`

export const NewsPageArticlesDescription = styled.p`
    color: #1d1d1f;
    margin-bottom: 40px;
    font-family: 'DM Sans Regular';
    line-height: 21px;
    
    font-size: ${FONTS.p}px;
    
    @media screen and (max-width: ${BREAKPOINTS.lg}}px) {
        font-size: 12px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}}px) {
        font-size: 11px;
        margin-bottom: 20px;
    }
`

export const NewsPageArticlesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
`

export const NewsPagePressInquiriesSection = styled.div`
    background-color: #fafafa;
`

export const NewsPagePressInquiriesSectionWrapper = styled.div`
    max-width: 890px;
    margin: 0 auto 16px;
    padding: 125px 0 128px;

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        max-width: 740px;
        padding: 100px 25px 100px;
    }

    @media screen and (max-width: ${BREAKPOINTS.sm}px) {
        max-width: 520px;
        padding: 80px 25px 80px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        padding: 50px 25px 75px;
    }
`

export const NewsPagePressInquiresTitle = styled.h1`
    color: #1d1d1f;
    margin-bottom: 79px;
    font-family: 'DM Sans Bold';
    line-height: 56px;
    text-align: center;
    
    font-size: ${FONTS.h2}px;

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        font-size: 35px;
    }

    @media screen and (max-width: ${BREAKPOINTS.md}px) {
        font-size: 32px;
    }

    @media screen and (max-width: ${BREAKPOINTS.xs}px) {
        font-size: 28px;
        margin-bottom: 0;
    }
`

export const NewsPagePressInquiresForm = styled.form`
    width: 100%;
    position: relative;
    overflow: hidden;
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 1px solid #1d1d1f;
    margin-bottom: 37px;
`

export const InputTitle = styled.div`
    font-family: 'DM Sans Bold';
    white-space: nowrap;
    color: #000;
    padding-right: 10px;
    
    font-size: ${FONTS.p}px;
`

export const Input = styled.input`
    font-family: 'DM Sans Regular';
    color: #000;
    background-color: #fafafa;
    width: 100%;
    border: none;
    outline: none;
    
    font-size: ${FONTS.p}px;
`

export const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid #1d1d1f;
    margin-bottom: 37px;
`

export const TextareaTitle = styled.div`
    font-family: 'DM Sans Bold';
    color: #000;
    padding-left: 10px;
    margin-bottom: 10px;

    font-size: ${FONTS.p}px;
`

export const Textarea = styled.textarea`
    font-family: 'DM Sans Regular';
    background-color: #fafafa;
    color: #000;
    width: 100%;
    resize: none;
    border: none;
    outline: none;

    font-size: ${FONTS.p}px;
    `

export const SubmitButton = styled.button`
    min-width: 200px;
    float: right;
    padding: 14px;
    font-family: 'DM Sans Regular';
    color: #000;
    border-radius: 10px;
    background: transparent;
    border: 1.5px solid #000;

    font-size: ${FONTS.p}px;
`