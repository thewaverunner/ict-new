import styled from 'styled-components'

import {
    BREAKPOINTS,
    COLORS,
    FONTS,
    MAX_WIDTH_CONTAINER,
} from '../../../../utils/constants'

export const PressroomPageTopSection = styled.section`
    padding: 30px 25px;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        display: flex;
        justify-content: space-between;    
        align-items: center; 
    }
 
    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
         
        max-width: ${MAX_WIDTH_CONTAINER}px;
    }
`

export const PressroomPageTopSectionTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 30px;
    padding-bottom: 30px;

    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        padding-bottom: 0;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 38px;
    }
` 

export const PressroomPageTopSectionList = styled.ul``

export const PressroomPageTopSectionItem = styled.li`
    padding-bottom: 20px;

    @media screen and (min-width: ${BREAKPOINTS.xs}px) {
        display: inline-block;
        padding-right: 30px;
        padding-bottom: 0;
        
        &:last-child {
            padding-right: 0;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-right: 60px;
    }
`

export const PressroomPageTopSectionLink = styled.a`
    font-family: "DM Sans Regular";
    text-decoration: none;
    transition: opacity 0.3s linear;

    color: ${COLORS.darken};
    font-size: ${FONTS.p}px;

    &:hover {
        opacity: 0.5;
    }
`

export const ArticlePageSection = styled.section`
    background-color: #fafafa;
    padding: 0 25px;
`

export const ArticlePageItem = styled.article`
    padding: 25px 0;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 890px;
        margin: 0 auto;
        padding: 82px 0;
    }
`

export const ArticlePagePressRelease = styled.p`
    font-family: "DM Sans Bold";
    text-transform: uppercase;
    color: #007a9d;
    margin-bottom: 12px;

    font-size: ${FONTS.p}px;
`

export const ArticlePageTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 30px;
    line-height: 31.5px;
    margin-bottom: 20px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 42px;
        margin-bottom: 30px;
    }
`

export const ArticlePageTime = styled.span`
    font-family: "DM Sans Regular";
    opacity: 0.6;
    margin-bottom: 17px;
    display: block;
    
    font-size: ${FONTS.p}px;
    color: ${COLORS.dark};
`

export const ArticlePageParagraph = styled.p`
    font-family: 'DM Sans Regular'; 
    line-height: 31px;
    font-size: 16px;

    strong {
        font-family: 'DM Sans Bold'; 
    }
   
    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        font-size: 21px;
    }
`

export const ArticlePageImage = styled.div`
    margin-bottom: 30px;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin-bottom: 50px;
    }
`

export const ArticlePagePressContactSection = styled.section`
    padding: 25px 0;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        max-width: 890px;
        margin: 0 auto;
        padding: 44px 0 39px;
    }
`

export const ArticlePagePressTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 28px;
    line-height: 31.5px;
    margin-bottom: 20px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin-bottom: 35px;
    }
`

export const ArticlePagePressAuthors = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        flex-wrap: wrap;
    }
`

export const ArticlePagePressAuthor = styled.div`
    margin-bottom: 15px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        max-width: 300px;
        padding-right: 30px;

        &:last-child {
            padding-right: 0;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-right: 100px;
    }
`

export const ArticlePagePressAuthorName = styled.p`
    font-family: "DM Sans Bold";
    line-height: 25px;
    
    font-size: ${FONTS.h3}px;
    color: ${COLORS.dark};
`

export const ArticlePagePressAuthorEmail = styled.p`
    font-family: "DM Sans Regular";
    line-height: 25px;

    font-size: ${FONTS.h3}px;
    color: ${COLORS.dark};
`

export const LatestArticlesSection = styled.section`
    padding: 25px 0;

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
       max-width: 890px;
       margin: 0 auto;
       padding: 45px 0 35px;
    }
`

export const LatestArticlesSectionTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 28px;
    line-height: 31.5px;
    margin-bottom: 20px;

    color: ${COLORS.dark};

    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        margin-bottom: 50px;
    }
`

export const LatestArticlesList = styled.ul``

export const LatestArticlesListItem = styled.li`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        display: flex;
        margin-bottom: 35px;
    }
`

export const LatestArticlesListItemImage = styled.div`
    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        min-width: 233px;
    }
`

export const LatestArticlesListItemContent = styled.div`
    padding: 15px 0;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding: 20px 0 0 35px;
    }
`

export const LatestArticlesListItemPressRelease = styled.p`
    font-family: "DM Sans Bold";
    color: #007a9d;
    text-transform: uppercase;
    padding-bottom: 15px;
    
    font-size: ${FONTS.p}px;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        padding-bottom: 10px;
    }
`

export const LatestArticlesListItemTime = styled.span`
    font-family: "DM Sans Regular";
    line-height: 50px;
    opacity: 0.6;

    font-size: ${FONTS.p}px;
    color: ${COLORS.dark};
`

export const LatestArticlesListItemTitle = styled.h2`
    font-family: "DM Sans Bold";
    font-size: 21px;
    margin-bottom: 15px;

    color: ${COLORS.dark};
`

export const LatestArticlesListItemDescription = styled.p`
    font-family: "DM Sans Regular";
    line-height: 21px;

    font-size: ${FONTS.p}px;
    color: ${COLORS.dark};
`

export const PressroomCTASection = styled.section`
    background-color: #fafafa;
    padding-bottom: 25px;
`

export const BaseCardElement = styled.a`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.12);
    transition: all 0.15s linear;

    &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: 
            0 30px 60px -12px rgba(50,50,93,.25), 
            0 18px 36px -18px rgba(0,0,0,.3), 
            0 -12px 36px -8px rgba(0,0,0,.025)
        ;
    }

    background-color: ${COLORS.white};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        margin-bottom: 0;
        flex-direction: row;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}px) {
        margin: 0 auto;
        max-width: 890px;
    }
`

export const BaseCardImage = styled.div`
    margin: -52px 0;
    transform: rotate(90deg);

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
       min-width: 90px;
       transform: none;
    }
`

export const BaseCardDescriptionWrapper = styled.div`
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        width: 100%;
        padding: 40px 45px 40px 25px;
        text-align: left;
        justify-content: space-between;
        flex-direction: row;
    }  
`

export const BaseCardTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        max-width: 520px;
        padding-right: 20px;
    }
    
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-right: 0;
    } 
`

export const BaseCardTitle = styled.h1`
    font-family: "DM Sans Bold";
    font-size: 21px;
    line-height: 31.5px;
    margin-bottom: 10px;

    color: ${COLORS.dark};
`

export const BaseCardDescription = styled.p`
    font-family: "DM Sans Regular";
    font-size: 16px;
    line-height: 24px;
    opacity: 0.56;
    margin-bottom: 15px;

    color: ${COLORS.darken};

    @media screen and (min-width: ${BREAKPOINTS.sm}px) {
        margin-bottom: 0;
    }
`

export const ButtonWrapper = styled.div``