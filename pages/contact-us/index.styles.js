import styled from 'styled-components'

export const ContactUsPageFormWrapper = styled.div`
    max-width: 890px;
    padding: 134px 0 174px 0;
    margin: 0 auto;

    @media screen and (max-width: 992px) {
        max-width: 740px;
        padding: 100px 0 150px;
    }

    @media screen and (max-width: 768px) {
        max-width: 520px;
        padding: 100px 0 150px;
    }

    @media screen and (max-width: 552px) {
        padding: 50px 25px 75px;
    }
`

export const ContactUsPageFormTitle = styled.h1`
    font-size: 47px;
    font-family: 'DM Sans Bold';
    line-height: 56px;
    text-align: center;
    color: #1d1d1f;
    margin-bottom: 79px;

    @media screen and (max-width: 552px) {
        font-size: 33px;
        line-height: 50px;
    }
`

export const ContactUsPageForm = styled.form`
    width: 100%;
    position: relative;

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
    color: #000;
    padding-right: 10px;
`

export const Input = styled.input`
    font-family: "DM Sans Regular";
    font-size: 14px;
    color: #000;
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
