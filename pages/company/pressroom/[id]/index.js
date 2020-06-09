import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../../i18n'

import BaseButton from '../../../../components/BaseButton'
import BaseSectionHeading from '../../../../components/BaseSectionHeading'

import {
    ArticlePageSection,
    ArticlePageItem,
    ArticlePageTitle,
    ArticlePageTime,
    ArticlePageParagraph,
    ArticlePageImage,
} from './index.styles'

function ArticlePage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('ArticlePage_Head_Title')}</title>
            </Head>

            <BaseSectionHeading title={t('ArticlePage_Heading')} />

            <ArticlePageSection>
                <ArticlePageItem>
                    <ArticlePageTitle>Title</ArticlePageTitle>
                    <ArticlePageTime>14/3/2020</ArticlePageTime>

                    <ArticlePageParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit.
                    </ArticlePageParagraph>

                    <ArticlePageImage>
                        <img 
                            src="/static/images/article-page-article-image.svg" 
                            alt="article-presentation"
                        />
                    </ArticlePageImage>

                    <ArticlePageParagraph marginMedium >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit.
                    </ArticlePageParagraph>

                    <BaseButton mode={'dark'}>{t('ArticlePage_Download')}</BaseButton>
                </ArticlePageItem>
            </ArticlePageSection>
        </>
    )
}
    
ArticlePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})
    
export default withTranslation('common')(ArticlePage)