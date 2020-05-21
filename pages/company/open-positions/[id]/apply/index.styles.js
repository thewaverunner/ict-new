import styled from 'styled-components'

export const OpenPositionApplyPageWrapper = styled.div`
    max-width: 670px;
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
    color: #000000;
    margin-bottom: 55px;

    @media screen and (max-width: 552px) {
        font-size: 33px;
        line-height: 50px;
    }
`

export const OpenPositionApplyPageForm = styled.form`
    width: 100%;
    position: relative;

    @media screen and (max-width: 552px) {
        margin: 0 4%;
        max-width: 92%;
    }
`

export const OpenPositionApplyPageInput = styled.input`
    width: calc(81% - 20px);
    padding: 20px 10px 20px 20%;
    margin-top: 15px;
    border: none;
    border-bottom: 1px solid #1D1D1F;

    @media screen and (max-width: 992px) {
      padding: 20px 10px 20px 20%;
    }
`

export const OpenPositionApplyPageInputFileWrapper = styled.div`
    width: 100%;
    padding: 50px 0;
    margin-bottom: 55px;
    padding: 30px 0;
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
    color: #000000;

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

export const OpenPositionApplyPageTextarea = styled.textarea`
    width: 100%;
    margin-bottom: 45px;
    border: none;
    border-bottom: 1px solid #1D1D1F;
    resize: none;
`

export const OpenPositionApplyPageTextareaTitle = styled.div`
    align-self: start;
    margin-bottom: 20px;
    color: #B4B8C5;
    font-size: 14px;
    font-family: "DM Sans Regular";

    strong {
        color: #000000;
        font-size: 14px;
        margin-bottom: 10px;
        font-family: "DM Sans Bold";
        margin-right: 20px;
    }
`

export const OpenPositionApplyPageSubmit = styled.input`
    background-color: transparent;
    border: 1px solid #000000;
    border-radius: 6px;
    cursor: pointer;
    color: #000000;
    padding: 15px 85px;
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

export const OpenPositionApplyPageInputTitle = styled.div`
    width: 10%;
    padding: 20px 10px;
    position: absolute;
    left: 0;
    transform: translateY(19px);
    color: #000000;
    font-size: 14px;
    font-family: "DM Sans Bold";
    border-bottom: 1px solid #1D1D1F;

    &:last-child {
        transform: translateY(35px);
    }
`

export const OpenPositionApplyPageInputPhone = {
    desktop: {
        inputStyle: {
            'width': '100%',
            'border': 'none',
            'borderBottom': '1px solid #1D1D1F',
            'borderRadius': '0',
            'padding': '29px 10px 29px 110px',
            'backgroundColor': 'transparent',
            'fontFamily': 'DM Sans Regular',
            'fontsize': '14px'        
        },
        containerStyle: {
            'margin': '15px 0 55px 0',
            'width': '100%'   
        },
        buttonStyle: {
            'border': 'none',
            'backgroundColor': 'transparent',
            'height': '98%',
            'left' : '10%'
        }
    },
    tablet: {
        inputStyle: {
            'width': '100%',
            'border': 'none',
            'borderBottom': '1px solid #1D1D1F',
            'borderRadius': '0',
            'padding': '29px 10px 29px 16%',
            'backgroundColor': 'transparent',
            'fontFamily': 'DM Sans Regular',
            'fontsize': '14px'       
        },
        containerStyle: {
            'margin': '15px 0 55px 0',
            'width': '100%'   
        },
        buttonStyle: {
            'border': 'none',
            'backgroundColor': 'transparent',
            'height': '98%',
            'left' : '5%'
        }
    },
    mobile :{
        inputStyle: {
            'width': '100%',
            'border': 'none',
            'borderBottom': '1px solid #1D1D1F',
            'borderRadius': '0',
            'padding': '29px 10px 29px 16%',
            'backgroundColor': 'transparent',
            'fontFamily': 'DM Sans Regular',
            'fontsize': '14px'        
        },
        containerStyle: {
            'margin': '15px 0 55px 0',
            'width': '100%'    
        },
        buttonStyle: {
            'border': 'none',
            'backgroundColor': 'transparent',
            'height': '98%',
            'left' : '10%'
        }
    }

}