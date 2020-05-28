import styled from 'styled-components'

import { BREAKPOINTS } from '../../../../../utils/constants'

export const OpenPositionApplyPageWrapper = styled.div`
    padding: 50px 25px 75px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 100px 25px 150px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 890px;

        padding: 190px 0 190px 0;
        margin: 0 auto;
    }
`

export const OpenPositionApplyPageTitle = styled.h1`
    font-size: 34px;
    font-family: 'DM Sans Bold';
    line-height: 60px;
    text-align: left;

    color: #1d1d1f;
    margin-bottom: 18px;
`

export const OpenPositionApplyPageContent = styled.h1`
    margin-bottom: 16px;
    background-color: #fafafa;
`

export const OpenPositionApplyPageForm = styled.form`
    width: 100%;
    position: relative;
    overflow: hidden;
`

export const OpenPositionApplyPageInputFileWrapper = styled.div`
    margin: 57px 0 55px;
    padding: 50px 0;

    text-align: center;
    border: 1px dashed #B4B8C5;
`

export const OpenPositionApplyPageInputFileMessage = styled.div`
    width: 70%;
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
        color: #3cbdff;

        &:hover {
            cursor: pointer;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       width: 50%;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
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
    margin-bottom: 37px;

    border-bottom: 1px solid #1d1d1f;
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
    background-color: #fafafa;

    width: 100%;
    border: none;
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
        font-family: "DM Sans Bold";

        margin-bottom: 10px;
        margin-right: 5px;
    }
`

export const Textarea = styled.textarea`
    font-family: "DM Sans Regular";
    font-size: 14px;

    background-color: #fafafa;
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