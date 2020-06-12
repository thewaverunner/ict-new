import React from 'react'

import Link from 'next/link'
import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'

import {
    PressroomPageTopSection,
    PressroomPageTopSectionTitle,
    PressroomPageTopSectionList,
    PressroomPageTopSectionItem,
    PressroomPageTopSectionLink,
    PressroomPageArticles,
    PressroomPageArticlesSection,
    PressroomPageArticlesSectionWrapper,
    PressroomPageArticlesContent,
    PressroomPageArticlesTitle,
    PressroomPageArticlesDescription,
    PressroomPageArticlesWrapper,
    PressroomPagePressRelease,
    PressroomPageArticlesData,
    PressroomCTASection,
    BaseCardElement,
    BaseCardImage,
    BaseCardDescriptionWrapper,
    BaseCardTitleWrapper,
    BaseCardTitle,
    BaseCardDescription,
    ButtonWrapper,
} from './index.styles'

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

function PressroomPage ({ t }) {
    return (
        <>
            <Head>
                <title>{t('PressroomPage_Head_Title')}</title>
            </Head>

            <PressroomPageTopSection>
                <PressroomPageTopSectionTitle>{t('PressroomPage_Title')}</PressroomPageTopSectionTitle>
                
                <PressroomPageTopSectionList>
                    {pressroomTopNav.map((item, index) => (
                        <PressroomPageTopSectionItem key={index}>
                            <PressroomPageTopSectionLink href={item.link}>{item.title}</PressroomPageTopSectionLink>
                        </PressroomPageTopSectionItem>
                    ))}
                </PressroomPageTopSectionList>
            </PressroomPageTopSection>

            <PressroomPageArticlesSection>
                <PressroomPageArticlesSectionWrapper>
                    <PressroomPageArticlesWrapper>
                        {[0, 1, 2, 3, 4, 5].map((_, index) => (
                            <Link href='pressroom/article' key={index}>
                                <PressroomPageArticles>
                                    <img 
                                        src="/static/images/pressroom-articles-image.svg" 
                                        alt="article-presentation"
                                    />
                               
                                    <PressroomPageArticlesContent>
                                        <PressroomPagePressRelease>{t('PressroomPage_Article_PressRelease')}</PressroomPagePressRelease>
                                        <PressroomPageArticlesTitle>{t('PressroomPage_Article_Title')}</PressroomPageArticlesTitle>
                                        <PressroomPageArticlesDescription>{t('PressroomPage_Article_Description')}</PressroomPageArticlesDescription>
                                        <PressroomPageArticlesData>{t('PressroomPage_Article_Date')}</PressroomPageArticlesData>
                                    </PressroomPageArticlesContent>
                                </PressroomPageArticles>
                            </Link>
                        ))}
                    </PressroomPageArticlesWrapper> 
                </PressroomPageArticlesSectionWrapper>      
            </PressroomPageArticlesSection>

            <PressroomCTASection>                    
                <BaseCardElement>
                    <BaseCardImage>
                        <img 
                            src="/static/images/press-card-image.svg"
                            alt="press-card-presentation" 
                        />
                    </BaseCardImage>

                    <BaseCardDescriptionWrapper>
                        <BaseCardTitleWrapper>
                            <BaseCardTitle>{t('PressroomPage_CTA_Title')}</BaseCardTitle>
                            <BaseCardDescription>{t('PressroomPage_CTA_Description')}</BaseCardDescription>
                        </BaseCardTitleWrapper>

                        <ButtonWrapper>            
                            <BaseButton mode={'dark'}>{t('PressroomPage_CTA_Button')}</BaseButton>  
                        </ButtonWrapper>     
                    </BaseCardDescriptionWrapper>
                </BaseCardElement>
            </PressroomCTASection>                   
        </>
    )
}
    
PressroomPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})
    
export default withTranslation('common')(PressroomPage)