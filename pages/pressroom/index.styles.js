import styled from 'styled-components'

export const NewsPageArticlesSection = styled.div`
    background-color: #fafafa;
`

export const NewsPageArticlesSectionWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto 16px;
    padding: 90px 10px;

    @media screen and (max-width: 1170px) {
        max-width: 950px;
    }

    @media screen and (max-width:992px) {
        max-width: 720px;
    }

    @media screen and (max-width: 768px) {
        max-width: 520px;
        padding: 40px 10px;
    }  
`

export const NewsPageArticlesSectionTitle = styled.h1`
    color:#000000;
    margin-bottom: 35px;
    font-size: 47px;
    font-family: 'DM Sans Bold';
    line-height: 56px;

    @media screen and (max-width: 1170px){
        font-size: 35px;
    }

    @media screen and (max-width: 992px){
        font-size: 32px;
    }

    @media screen and (max-width: 552px){
        font-size: 28px;
        padding-left: 10px;
    }
`

export const NewsPageArticles = styled.div`
    flex: 0 1 32%;
    margin-bottom: 35px;

    @media screen and (max-width: 768px) {
        flex:1 1 45%;
        padding-right: 20px;

        &:nth-child(1),
        &:nth-child(2) {
            margin-bottom: 30px;
        }    
    }

    @media screen and (max-width: 552px) {
        flex: 1 1 100%;
        padding: 0 10px;
    } 
`

export const NewsPageArticlesImage = styled.div``

export const NewsPageArticlesContent = styled.div`
    padding-right: 35px;
`

export const NewsPageArticlesTitle = styled.h2`
    color: #000000;
    margin: 40px 0 6px; 
    font-size: 21px;
    font-family: 'DM Sans Bold';
    line-height: 31px;
`

export const NewsPageArticlesDescription = styled.p`
    color: #000000;
    margin-bottom: 58px;
    font-size: 14px;
    font-family: 'DM Sans Regular';
    line-height: 21px;

    @media screen and (max-width: 1000px) {
        font-size: 12px;
    }

    @media screen and (max-width: 850px) {
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
    max-width: 690px;
    margin: 0 auto 16px;
    padding: 125px 0 140px;

    @media screen and (max-width: 768px) {
        max-width: 520px;
    }

    @media screen and (max-width: 552px) {
        margin: 0 4%;
        max-width: 92%;
        padding: 50px 0 60px;
    } 
`

export const NewsPagePressInquiresTitle = styled.h1`
    color:#000000;
    margin-bottom: 75px;
    font-size: 47px;
    font-family: 'DM Sans Bold';
    line-height: 56px;
    text-align: center;

    @media screen and (max-width: 1170px) {
        font-size: 35px;
    }

    @media screen and (max-width: 992px) {
        font-size: 32px;
    }

    @media screen and (max-width: 552px) {
        font-size: 28px;
        margin-bottom: 0;
    }
`

export const NewsPagePressInquiresForm = styled.form`
    width: 100%;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 552px) {
        margin: 0 4%;
        max-width: 92%;
    }
`

export const NewsPagePressInquiresInputTitle = styled.div`
    width: 18%;
    padding: 20px 10px;
    align-self: start;
    color: #000000;
    position: absolute;
    left: 0;
    transform: translateY(19px);
    font-size: 14px;
    font-family: "DM Sans Bold";
    white-space: nowrap;
    border-bottom: 1px solid #1D1D1F;
`

export const NewsPagePressInquiresInput = styled.input`
    width: calc(80% - 20px);
    padding: 20px 10px 20px 20%;
    margin-top: 15px;
    border: none;
    border-bottom: 1px solid #1D1D1F;
    background-color: #fafafa;

    @media screen and (max-width: 922px) {
        width: 100%;
        padding: 20px 10px 20px 25%;
    }
`

export const NewsPagePressInquiresTextareaTitle = styled.div`
    color: #000000;
    margin: 25px 10px 20px;
    font-size: 14px;
    font-family: "DM Sans Bold";
    align-self: start;
`

export const NewsPagePressInquiresTextarea = styled.textarea`
    width: 100%;
    margin-bottom: 65px;
    border: none;
    border-bottom: 1px solid #1D1D1F;
    background-color: #fafafa;
    resize: none;
`

export const NewsPagePressInquiresSubmit = styled.input`
    background-color: transparent;
    border: 1px solid #000000;
    border-radius: 6px;
    cursor: pointer;
    color: #000000;
    padding: 15px 83px;
    float: right;
    font-size: 14px;
    font-family: 'DM Sans Regular';
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: #000000;
        color: #ffffff;
    }
`