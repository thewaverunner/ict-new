import styled from 'styled-components'

export const OpenPositionApplyPageWrapper = styled.div`
    max-width: 890px;
    padding: 90px 0 210px 0;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        max-width: 520px;
        padding: 100px 0 150px;
    }

    @media screen and (max-width: 552px) {
        padding: 50px 0 75px;
        margin: 0 4%;
        max-width: 92%;
    }
`

export const OpenPositionApplyPageTitle = styled.h1`
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


export const OpenPositionApplyPageContent = styled.h1`
    margin-bottom: 16px;
    background-color: #fafafa;
`

export const OpenPositionApplyPageForm = styled.form`
    width: 100%;
    position: relative;

    @media screen and (max-width: 552px) {
        margin: 0 4%;
        max-width: 92%;
    }
`

export const OpenPositionApplyPageInputFileWrapper = styled.div`
    margin: 57px 0 55px;
    padding: 50px 0;
    text-align: center;
    border: 1px dashed #B4B8C5;
`

export const OpenPositionApplyPageInputFileMessage = styled.div`
    width: 31%;
    margin: 0 auto;
    position: relative;
    text-align: center;
    font-size: 14px;
    font-family: "DM Sans Regular";
    line-height: 21px;
    color: #1d1d1f;

    strong {
        font-family: "DM Sans Bold";
    }

    span {
        text-decoration: underline;
        color: blue;

        &:hover {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 768px) {
        width: 50%;
    }

    @media screen and (max-width: 552px) {
        width: 70%;
    }
`

export const OpenPositionApplyPageInputFileImages = styled.div`
    margin-bottom: 5px;
    position: relative;

    img {
        width: auto;
    }
`

export const OpenPositionApplyPageInputFile = styled.input``

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
    background-color: #fafafa;
    outline: none;
`

export const TextareaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #1d1d1f;
    margin-bottom: 46px;
`

export const TextareaTitle = styled.div`
    align-self: start;
    margin-bottom: 20px;
    color: #B4B8C5;
    font-size: 14px;
    font-family: "DM Sans Regular";

    strong {
        color: #1d1d1f;
        font-size: 14px;
        margin-bottom: 10px;
        font-family: "DM Sans Bold";
        margin-right: 20px;
    }
`

export const Textarea = styled.textarea`
    background-color: #fafafa;
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

export const OpenPositionApplyPageInputPhone = {
    desktop: {
        inputStyle: {
            'backgroundColor': '#fafafa',
            'fontFamily': 'DM Sans Regular',
            'fontSize': '14px',
            'color': '#000',
            'width': '100%',
            'border': 'none',
            'outline': 'none'   
        },
        buttonStyle: {
            'backgroundColor': 'transparent',
            'border': 'none',
        }
    }    
}
