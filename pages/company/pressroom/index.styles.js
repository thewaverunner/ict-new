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
    color:#1d1d1f;
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
    color: #1d1d1f;
    margin: 40px 0 6px; 
    font-size: 21px;
    font-family: 'DM Sans Bold';
    line-height: 31px;
`

export const NewsPageArticlesDescription = styled.p`
    color: #1d1d1f;
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
    max-width: 890px;
    margin: 0 auto 16px;
    padding: 125px 0 128px;

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
    color: #1d1d1f;
    margin-bottom: 79px;
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

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-bottom: 1px solid #1d1d1f;
    margin-bottom: 37px;
`

export const InputTitle = styled.div`
    font-family: "DM Sans Bold";
    font-size: 14px;
    white-space: nowrap;
    color: #000;
    padding-right: 10px;
`

export const Input = styled.input`
    font-family: "DM Sans Regular";
    font-size: 14px;
    color: #000;
    background-color: #fafafa;
    width: 100%;
    border: none;
    outline: none;
`

export const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #1d1d1f;
    margin-bottom: 37px;
`

export const TextareaTitle = styled.div`
    font-family: "DM Sans Bold";
    font-size: 14px;
    color: #000;
    padding-left: 10px;
    margin-bottom: 10px;
`

export const Textarea = styled.textarea`
    font-family: "DM Sans Regular";
    background-color: #fafafa;
    font-size: 14px;
    color: #000;
    width: 100%;
    resize: none;
    border: none;
    outline: none;
`

export const SubmitButton = styled.button`
    min-width: 200px;
    float: right;
    padding: 14px;

    font-family: "DM Sans Regular";
    font-size: 14px;
    color: #000;

    border-radius: 10px;
    background: transparent;
    border: 1.5px solid #000;
`