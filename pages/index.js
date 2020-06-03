import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../i18n'

import BaseButton from '../components/BaseButton'
import BaseSectionHeading from '../components/BaseSectionHeading'
import HomePageArticleItem from '../components/HomePageArticleItem'
import HomePageBannerItem from '../components/HomePageBannerItem'

import {
    HomePageTopSectionWrapper,
    HomePageTopSection,
    HomePageTopSectionTitle,
    HomePageTopSectionDescription,
    HomePageBannersWrapper,
    HomePageImpactSection,
    HomePageImpactContentWrapper,
    HomePageImpactContent,
    HomePageImpactContentTitle,
    HomePageImpactContentDescription,
    HomePageNetworkSection,
    HomePageNetworkTitle,
    HomePageLatestNewsSection,
    HomePageLatestNewsWrapper,
    HomePageLatestNewsTitle,
    HomePageLatestNewsList,
} from './index.styles'

function HomePage ({ t }) {
    const banners = [
        {
            image: '/static/images/home-purely-digital.svg',
            title: t('HomePage_FirstBanner_Title'),
            description: t('HomePage_FirstBanner_Content'),
            imageReverse: false,
        },
        { 
            image: '/static/images/home-purely-digital.svg',
            title: t('HomePage_SecondBanner_Title'),
            description: t('HomePage_SecondBanner_Content'),
            imageReverse: true,
        },
        { 
            image: '/static/images/home-global-reach.svg',
            title: t('HomePage_ThirdBanner_Title'),
            description: t('HomePage_ThirdBanner_Content'),
            imageReverse: false,
        },
    ]

    const news = [
        {
            image: '/static/images/home-first-news-image.svg',
            release: t('HomePage_News_First_Release'),
            data: '2020-03-02',
            title: t('HomePage_News_First_Title'),
        },
        { 
            image: '/static/images/home-second-news-image.svg',
            release: t('HomePage_News_Second_Release'),
            data: '2020-03-02',
            title: t('HomePage_News_Second_Title'),
        },
        { 
            image: '/static/images/home-first-news-image.svg',
            release: t('HomePage_News_Third_Release'),
            data: '2020-03-02',
            title: t('HomePage_News_Third_Title'),
        },
    ]

    return (
        <>
            <Head>
                <title>{t('HomePage_Head_Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('BaseHeader_Title')} 
                description={t('BaseHeader_Description')}
                mainPage={true}
            /> 

            <HomePageTopSectionWrapper>
                <HomePageTopSection>
                    <HomePageTopSectionTitle>{t('HomePage_Marketing_Title')}</HomePageTopSectionTitle>
                    <HomePageTopSectionDescription>{t('HomePage_Marketing_Content')}</HomePageTopSectionDescription>
                </HomePageTopSection>
            </HomePageTopSectionWrapper>

            <HomePageBannersWrapper>
                {banners.map((banner, index) => (
                    <HomePageBannerItem 
                        key={index} 
                        banner={banner} 
                    />
                ))}
            </HomePageBannersWrapper>

            <HomePageImpactSection />

            <HomePageImpactContentWrapper>
                <HomePageImpactContent>
                    <HomePageImpactContentTitle>{t('HomePage_Impact_Title')}</HomePageImpactContentTitle>
                    <HomePageImpactContentDescription>{t('HomePage_Impact_Content')}</HomePageImpactContentDescription>

                    <BaseButton mode={'dark'}>Learn More</BaseButton>
                </HomePageImpactContent>
            </HomePageImpactContentWrapper>

            <HomePageNetworkSection>
                <HomePageNetworkTitle>{t('HomePage_Network_Content')}</HomePageNetworkTitle>
            </HomePageNetworkSection>

            <HomePageLatestNewsSection>
                <HomePageLatestNewsWrapper>
                    <HomePageLatestNewsTitle>{t('HomePage_NewsSection_Title')}</HomePageLatestNewsTitle>

                    <BaseButton 
                        mode={'dark'}
                        hideBorder 
                        withArrow={true}
                    >
                        {t('HomePage_NewsSection_Button')}
                    </BaseButton>

                    <HomePageLatestNewsList>
                        {news.map((article, index) => (
                            <HomePageArticleItem 
                                key={index} 
                                article={article} 
                            />
                        ))}
                    </HomePageLatestNewsList>
                </HomePageLatestNewsWrapper>
            </HomePageLatestNewsSection>
        </>
    )
}


HomePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(HomePage)