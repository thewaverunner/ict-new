import styled from 'styled-components'

import { 
    BREAKPOINTS, 
    COLORS,
    FONTS,
    MAX_WIDTH_CONTAINER
} from '../../utils/constants'

export const ContactUsPageTopSection = styled.section`
    padding: 50px 25px;

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 100px 0 90px;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const ContactUsPageTopSectionTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 30px;
    line-height: 50px;

    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        line-height: 60px;

        font-size: ${FONTS.h1}px;
    }
`

export const ContactUsAdressSection = styled.section`
    padding: 0 25px;
    margin-bottom: 40px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 0 0 80px 0;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const ContactUsAdressInfo = styled.div`
    box-sizing: border-box;

    background-color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 50%;
        padding: 25px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 75px 20px 75px 55px;
    }
`

export const ContactUsAdressContentWrapper = styled.div`
    padding: 15px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
       padding: 0;
    }
`

export const ContactUsAdressContentTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 15px;

    color: ${COLORS.white};

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        font-size: 31px;
        line-height: 60px;
        margin-bottom: 0;
    }
`

export const ContactUsAdressContentList = styled.ul`  `

export const ContactUsAdressContentItem = styled.li`
    font-family: "DM Sans Regular";
    line-height: 16.8px;
    color: #fafafa;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;

    font-size: ${FONTS.p}px;

    span {
        font-family: "DM Sans Bold";
    }

    &:last-child {
        padding-top: 15px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-top: 20px;

        span {
            width: 50%;
        }

        &:last-child {
            padding-top: 30px;
        }
    }
`

export const ContactUsAdressMap = styled.div`
    background-color: #fafafa;
    min-height: 200px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 50%;
    }
`

export const ContactUsPageCardsSection = styled.section`
    padding: 0 25px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        padding: 0;

        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const ContactUsPageCard = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.12);

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        margin-bottom: 0;
        flex-direction: row;

        &:first-child {
            margin-right: 100px;
        }
    }
`

export const ContactUsPageCardImage = styled.div`
    margin: -52px 0;
    transform: rotate(90deg);

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       min-width: 90px;
       transform: none;
    }
`

export const ContactUsPageCardContentWrapper = styled.div`
    padding: 15px;
    text-align: center;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 25px 25px;
        text-align: left;
    }  

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding: 40px 50px 40px 25px;
    }  
`

export const ContactUsPageCardContentTitleWrapper = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        justify-content: flex-start;
    }  
`

export const ContactUsPageCardContentTitle = styled.a`
    font-family: "DM Sans Bold";
    font-size: 20px;
    line-height: 30px;
    color: #6672e5;
    position: relative;
    text-decoration: none;
`

export const ContactUsPageCardContentArrow = styled.div`
    align-self: center;
    padding-left: 15px;
`

export const ContactUsPageCardContentDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 24px;
    opacity: 0.56;
    margin-top: 15px;

    color: ${COLORS.darken};
`




// export const ContactUsPageFormWrapper = styled.div`
//     max-width: 890px;
//     padding: 134px 0 174px 0;
//     margin: 0 auto;

//     @media screen and (max-width: ${BREAKPOINTS.md}px) {
//         max-width: 740px;
//         padding: 100px 0 150px;
//     }

//     @media screen and (max-width: ${BREAKPOINTS.sm}px) {
//         max-width: 520px;
//         padding: 100px 0 150px;
//     }

//     @media screen and (max-width: ${BREAKPOINTS.xs}px) {
//         padding: 50px 25px 75px;
//     }
// `

// export const ContactUsPageFormTitle = styled.h1`
//     font-family: 'DM Sans Bold';
//     line-height: 56px;
//     text-align: center;
//     color: #1d1d1f;
//     margin-bottom: 79px;

//     font-size: ${FONTS.h2}px;

//     @media screen and (max-width: ${BREAKPOINTS.xs}px) {
//         font-size: 33px;
//         line-height: 50px;
//     }
// `

// export const ContactUsPageForm = styled.form`
//     width: 100%;
//     position: relative;

//     @media screen and (max-width: ${BREAKPOINTS.xs}px) {
//         margin: 0 4%;
//         max-width: 92%;
//     }
// `

// export const InputWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     padding: 20px 10px;
//     border-bottom: 1px solid #1d1d1f;
//     margin-bottom: 37px;
// `

// export const InputTitle = styled.div`
//     font-family: 'DM Sans Bold';
//     color: #000;
//     padding-right: 10px;

//     font-size: ${FONTS.p}px;
// `

// export const Input = styled.input`
//     font-family: 'DM Sans Regular';
//     color: #000;
//     width: 100%;
//     border: none;
//     outline: none;
    
//     font-size: ${FONTS.p}px;
// `

// export const TextareaWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     border-bottom: 1px solid #1d1d1f;
//     margin-bottom: 37px;
// `

// export const TextareaTitle = styled.div`
//     font-family: 'DM Sans Bold';
//     color: #000;
//     padding-left: 10px;
//     margin-bottom: 10px;
    
//     font-size: ${FONTS.p}px;
// `

// export const Textarea = styled.textarea`
//     font-family: 'DM Sans Regular';
//     color: #000;
//     width: 100%;
//     resize: none;
//     border: none;
//     outline: none;
    
//     font-size: ${FONTS.p}px;
// `

// export const SubmitButton = styled.button`
//     min-width: 200px;
//     float: right;
//     padding: 14px;
//     font-family: 'DM Sans Regular';
//     color: #000;
//     border-radius: 10px;
//     background: transparent;
//     border: 1.5px solid #000;
    
//     font-size: ${FONTS.p}px;
// `
