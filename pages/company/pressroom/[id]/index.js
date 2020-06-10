import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../../i18n'

import BaseButton from '../../../../components/BaseButton'

import CardImage from '../../../../public/static/images/press-card-image.svg'

import {
    PressroomPageTopSection,
    PressroomPageTopSectionTitle,
    PressroomPageTopSectionList,
    PressroomPageTopSectionItem,
    PressroomPageTopSectionLink,

    ArticlePageSection,
    ArticlePageItem,
    ArticlePagePressRelease,
    ArticlePageTitle,
    ArticlePageTime,
    ArticlePageParagraph,
    ArticlePageImage,

    ArticlePagePressContactSection,
    ArticlePagePressTitle,
    ArticlePagePressAuthors,
    ArticlePagePressAuthor,
    ArticlePagePressAuthorName,
    ArticlePagePressAuthorEmail,

    LatestArticlesSection,
    LatestArticlesSectionTitle,
    LatestArticlesList,
    LatestArticlesListItem,
    LatestArticlesListItemImage,
    LatestArticlesListItemContent,
    LatestArticlesListItemPressRelease,
    LatestArticlesListItemTime,
    LatestArticlesListItemTitle,
    LatestArticlesListItemDescription,

    PressroomCTASection,
    BaseCardElement,
    BaseCardImage,
    BaseCardDescriptionWrapper,
    BaseCardTitleWrapper,
    BaseCardTitle,
    BaseCardDescription,
    ButtonWrapper,
} from './index.styles'

function ArticlePage ({ t }) {
    const pressroomTopNav = [
        {
            title: 'Press Inquiry', 
            link: '/'
        },
        {
            title: 'Press Kit', 
            link: '/'
        },
        {
            title: 'Archive', 
            link: '/'
        },
    ]

    const latestArticles = [
        {
            image: '/static/images/pressroom-articles-image.svg',
            title: 'Global reach is now inevitable',
            date: 'May 12, 2020',
            description: 'Our priority is to build global frontrunners in multiple industries, disrupting monopolised markets by offering a unique and robust value proposition on a global scale.',
        },
        {
            image: '/static/images/pressroom-articles-image.svg',
            title: 'Global reach is now inevitable',
            date: 'May 12, 2020',
            description: 'Our priority is to build global frontrunners in multiple industries, disrupting monopolised markets by offering a unique and robust value proposition on a global scale.',
        },
        {
            image: '/static/images/pressroom-articles-image.svg',
            title: 'Global reach is now inevitable',
            date: 'May 12, 2020',
            description: 'Our priority is to build global frontrunners in multiple industries, disrupting monopolised markets by offering a unique and robust value proposition on a global scale.',
        },
    ]

    const authorsArticle = [
        {
            name: 'Amanda Carlsson',
            email: 'amanda.carlsson@impactct.com',
        },
        {
            name: 'Greg Burry',
            email: 'greg.burry@impactct.com',
        },
    ]

    return (
        <>
            <Head>
                <title>{t('ArticlePage_Head_Title')}</title>
            </Head>

            <PressroomPageTopSection>
                <PressroomPageTopSectionTitle>{t('ArticlePage_Title')}</PressroomPageTopSectionTitle>

                <PressroomPageTopSectionList>
                    {pressroomTopNav.map((item, index) => (
                        <PressroomPageTopSectionItem key={index}>
                            <PressroomPageTopSectionLink href={item.link}>{item.title}</PressroomPageTopSectionLink>
                        </PressroomPageTopSectionItem>
                    ))}
                </PressroomPageTopSectionList>
            </PressroomPageTopSection>

            <ArticlePageSection>
                <ArticlePageItem>
                    <ArticlePagePressRelease>{t('PressroomPage_Article_PressRelease')}</ArticlePagePressRelease>
                    <ArticlePageTime>{t('PressroomPage_Article_Date')}</ArticlePageTime>
                    <ArticlePageTitle>{t('ArticlePage_Article_Title')}</ArticlePageTitle>

                    <ArticlePageImage>
                        <img 
                            src="/static/images/article-page-article-image.svg" 
                            alt="article-presentation"
                        />
                    </ArticlePageImage>

                    <ArticlePageParagraph dangerouslySetInnerHTML={{ __html: t('ArticlePage_Article_Description') }} />
                </ArticlePageItem>

                <ArticlePagePressContactSection>
                    <ArticlePagePressTitle>{t('ArticlePage_PressContact_Title')}</ArticlePagePressTitle>

                    <ArticlePagePressAuthors>
                        {authorsArticle.map((author, index) => (
                            <ArticlePagePressAuthor key={index}>
                                <ArticlePagePressAuthorName>{author.name}</ArticlePagePressAuthorName>
                                <ArticlePagePressAuthorEmail>{author.email}</ArticlePagePressAuthorEmail>
                            </ArticlePagePressAuthor>      
                        ))}
                    </ArticlePagePressAuthors>      
                </ArticlePagePressContactSection>

                <LatestArticlesSection>
                    <LatestArticlesSectionTitle>{t('ArticlePage_LatestArticles_Title')}</LatestArticlesSectionTitle>

                    <LatestArticlesList>
                        {latestArticles.map((article, index) => (
                            <LatestArticlesListItem key={index}>
                                <LatestArticlesListItemImage>
                                    <img 
                                        src={article.image}
                                        alt="article-presentation"
                                    />
                                </LatestArticlesListItemImage>
                               
                                <LatestArticlesListItemContent>
                                    <LatestArticlesListItemPressRelease>{t('PressroomPage_Article_PressRelease')}</LatestArticlesListItemPressRelease>
                                    <LatestArticlesListItemTitle>{article.title}</LatestArticlesListItemTitle>
                                    <LatestArticlesListItemDescription>{article.description}</LatestArticlesListItemDescription>
                                    <LatestArticlesListItemTime>{article.date}</LatestArticlesListItemTime>
                                </LatestArticlesListItemContent>    
                            </LatestArticlesListItem> 
                        ))}   
                    </LatestArticlesList>
                </LatestArticlesSection>

                <PressroomCTASection>                    
                    <BaseCardElement>
                        <BaseCardImage>
                            <CardImage />
                        </BaseCardImage>

                        <BaseCardDescriptionWrapper>
                            <BaseCardTitleWrapper>
                                <BaseCardTitle>{t('ArticlePage_CTASection_Title')}</BaseCardTitle>
                                <BaseCardDescription>{t('ArticlePage_CTASection_Description')}</BaseCardDescription>
                            </BaseCardTitleWrapper>

                            <ButtonWrapper>            
                                <BaseButton mode={'dark'}>{t('ArticlePage_CTASection_Button')}</BaseButton>  
                            </ButtonWrapper>     
                        </BaseCardDescriptionWrapper>
                    </BaseCardElement>
                </PressroomCTASection>   
            </ArticlePageSection>
        </>
    )
}
    
ArticlePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})
    
export default withTranslation('common')(ArticlePage)