import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../../i18n'

import BaseButton from '../../../../components/BaseButton'
import BaseSectionHeading from '../../../../components/BaseSectionHeading'

import {
    ArticlePageSection,
    ArticlePageWrapper,
    ArticlePageTitle,
    ArticlePageTime,
    ArticlePageParagraph,
    ArticlePageImage
} from './index.styles'

function ArticlePage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('ArticlePage-Head-Title')}</title>
            </Head>

            <BaseSectionHeading title={t('ArticlePage-Heading')} />

            <ArticlePageSection>
                <ArticlePageWrapper>
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
                        <img src="/static/images/article-page-article-image.svg" />
                    </ArticlePageImage>

                    <ArticlePageParagraph marginMedium>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit.
                    </ArticlePageParagraph>

                    <BaseButton blackStyle>{t('ArticlePage-Download')}</BaseButton>
                </ArticlePageWrapper>
            </ArticlePageSection>
        </>
    )
}
    
ArticlePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})
    
export default withTranslation('common')(ArticlePage)