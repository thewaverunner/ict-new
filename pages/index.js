import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../i18n'

import BaseButton from '../components/BaseButton'
import BaseSection from '../components/BaseSection'
import BaseSectionHeading from '../components/BaseSectionHeading'
import BaseSectionWide from '../components/BaseSectionWide'

import {
    HomePageTopSectionWrapper,
    HomePageTopSection,
    HomePageTopSectionTitle,
    HomePageTopSectionDescription,

    HomePageBannersWrapper,
    HomePageBanner,
    HomePageBannerContentSection,
    HomePageBannerContentWrapper,
    HomePageBannerContent,
    HomePageBannerImage,
    HomePageBannerContentTitle,
    HomePageBannerContentDescription,

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
    HomePageLatestNewsItem,
    HomePageLatestNewsItemImage,
    HomePageLatestNewsItemDescription,
    HomePageLatestNewsItemReleaseWrapper,
    HomePageLatestNewsItemRelease,
    HomePageLatestNewsItemReleaseData,
    HomePageLatestNewsItemTitle,
    // BannerSection,
    // BannerWrapper,
    // BannerImage,
    // BannerDescription,
    // Banner,
    // BannerTitle,
    // BannerContent
} from './index.styles'

function HomePage ({ t }) {
    // const banners = [
    //     {
    //         image: '/static/images/home-continuous-innovation.svg',
    //         title: t('HomePage_FirstBanner_Title'),
    //         description: t('HomePage_FirstBanner_Content')
    //     },
    //     { 
    //         image: '/static/images/home-purely-digital.svg',
    //         title: t('HomePage_SecondBanner_Title'),
    //         description: t('HomePage_SecondBanner_Content')
    //     },
    //     { 
    //         image: '/static/images/home-global-reach.svg',
    //         title: t('HomePage_ThirdBanner_Title'),
    //         description: t('HomePage_ThirdBanner_Content')
    //     }
    // ]

    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>

            <BaseSectionHeading 
                title={t('BaseHeader_Title')} 
                description={t('BaseHeader_Description')}
                mainPage={true}
            /> 

            <HomePageTopSectionWrapper>
                <HomePageTopSection>
                    <HomePageTopSectionTitle>Multi-level marketing, reinvented</HomePageTopSectionTitle>
                    <HomePageTopSectionDescription>
                        Impact Crowd Technology will, as the first digital 
                        multi-level marketing company, address the challenge 
                        of long-term sustainability.
                    </HomePageTopSectionDescription>
                </HomePageTopSection>
            </HomePageTopSectionWrapper>

            <HomePageBannersWrapper>
                <HomePageBanner>
                    <HomePageBannerContentSection>
                        <HomePageBannerContentWrapper>
                            <HomePageBannerContent>
                                <HomePageBannerContentTitle>Continuous innovation</HomePageBannerContentTitle>

                                <HomePageBannerContentDescription>
                                    We’re proud of our unstinting commitment to 
                                    generating innovative digital products designed 
                                    to provide you with new revenue streams. We are 
                                    equally dedicated to seeking out and developing 
                                    innovations that support our network of salespeople.
                                </HomePageBannerContentDescription>

                                <BaseButton blackStyle>Learn More</BaseButton>
                            </HomePageBannerContent>
                        </HomePageBannerContentWrapper>
                    </HomePageBannerContentSection>

                    <HomePageBannerImage>
                        <img src="/static/images/home-purely-digital.svg" /> 
                    </HomePageBannerImage>
                </HomePageBanner>

                <HomePageBanner imageReverse={true}>
                    <HomePageBannerContentSection>
                        <HomePageBannerContentWrapper imageReverse={true}>
                            <HomePageBannerContent>
                                <HomePageBannerContentTitle>Purely digital</HomePageBannerContentTitle>

                                <HomePageBannerContentDescription>
                                    We intend to remain purely digital in our product offering.
                                    We want to deliver impact technology – via our online projects
                                    that will disrupt and challenge traditional digital industries 
                                    and software distribution channels.
                                </HomePageBannerContentDescription>

                                <BaseButton blackStyle>Learn More</BaseButton>
                            </HomePageBannerContent>
                        </HomePageBannerContentWrapper>
                    </HomePageBannerContentSection>

                    <HomePageBannerImage>
                        <img src="/static/images/home-purely-digital.svg" /> 
                    </HomePageBannerImage>
                </HomePageBanner>

                <HomePageBanner>
                    <HomePageBannerContentSection>
                        <HomePageBannerContentWrapper>
                            <HomePageBannerContent>
                                <HomePageBannerContentTitle>Global reach</HomePageBannerContentTitle>

                                <HomePageBannerContentDescription>
                                    Our priority is to build global frontrunners 
                                    in multiple industries, disrupting monopolised 
                                    markets by offering a unique and robust value proposition 
                                    on a global scale. The aim of Impact Crowd Technology 
                                    is to establish online global leaders.
                                </HomePageBannerContentDescription>

                                <BaseButton blackStyle>Learn More</BaseButton>
                            </HomePageBannerContent>
                        </HomePageBannerContentWrapper>
                    </HomePageBannerContentSection>

                    <HomePageBannerImage>
                        <img src="/static/images/home-global-reach.svg" /> 
                    </HomePageBannerImage>
                </HomePageBanner>
            </HomePageBannersWrapper>

            <HomePageImpactSection></HomePageImpactSection>

            <HomePageImpactContentWrapper>
                <HomePageImpactContent>
                    <HomePageImpactContentTitle>Impact Technology</HomePageImpactContentTitle>

                    <HomePageImpactContentDescription>
                        Impact Technology refers to the intentional 
                        use of frontier technology to benefit and promote 
                        new sources of employment and accelerate economic 
                        diversification – while simultaneously addressing major social issues.
                    </HomePageImpactContentDescription>

                    <BaseButton blackStyle>Learn More</BaseButton>
                </HomePageImpactContent>
            </HomePageImpactContentWrapper>

            <HomePageNetworkSection>
                <HomePageNetworkTitle>The network marketing business model has been around for decades. And it works.</HomePageNetworkTitle>
            </HomePageNetworkSection>

            <HomePageLatestNewsSection>
                <HomePageLatestNewsWrapper>
                    <HomePageLatestNewsTitle>Latest News</HomePageLatestNewsTitle>

                    <BaseButton 
                        blackStyle 
                        hideBorder 
                        withArrow={true}
                    >
                        Go to newsroom
                    </BaseButton>

                    <HomePageLatestNewsList>
                        <HomePageLatestNewsItem>
                            <HomePageLatestNewsItemImage>
                                <img src="/static/images/home-first-news-image.svg" />
                            </HomePageLatestNewsItemImage>

                            <HomePageLatestNewsItemDescription>
                                <HomePageLatestNewsItemReleaseWrapper>
                                    <HomePageLatestNewsItemRelease>Press release</HomePageLatestNewsItemRelease>
                                    <HomePageLatestNewsItemReleaseData>2020-03-02</HomePageLatestNewsItemReleaseData>
                                </HomePageLatestNewsItemReleaseWrapper>

                                <HomePageLatestNewsItemTitle>ICT acquires Miggster</HomePageLatestNewsItemTitle>
                            </HomePageLatestNewsItemDescription>
                        </HomePageLatestNewsItem>

                        <HomePageLatestNewsItem>
                            <HomePageLatestNewsItemImage>
                                <img src="/static/images/home-second-news-image.svg" />
                            </HomePageLatestNewsItemImage>

                            <HomePageLatestNewsItemDescription>
                                <HomePageLatestNewsItemReleaseWrapper>
                                    <HomePageLatestNewsItemRelease>Press release</HomePageLatestNewsItemRelease>
                                    <HomePageLatestNewsItemReleaseData>2020-03-02</HomePageLatestNewsItemReleaseData>
                                </HomePageLatestNewsItemReleaseWrapper>

                                <HomePageLatestNewsItemTitle>New board members</HomePageLatestNewsItemTitle>
                            </HomePageLatestNewsItemDescription>
                        </HomePageLatestNewsItem>  

                        <HomePageLatestNewsItem>
                            <HomePageLatestNewsItemImage>
                                <img src="/static/images/home-first-news-image.svg" />
                            </HomePageLatestNewsItemImage>

                            <HomePageLatestNewsItemDescription>
                                <HomePageLatestNewsItemReleaseWrapper>
                                    <HomePageLatestNewsItemRelease>Company news</HomePageLatestNewsItemRelease>
                                    <HomePageLatestNewsItemReleaseData>2020-03-02</HomePageLatestNewsItemReleaseData>
                                </HomePageLatestNewsItemReleaseWrapper>

                                <HomePageLatestNewsItemTitle>ICT acquires Miggster</HomePageLatestNewsItemTitle>
                            </HomePageLatestNewsItemDescription>
                        </HomePageLatestNewsItem>      
                    </HomePageLatestNewsList>
                </HomePageLatestNewsWrapper>
            </HomePageLatestNewsSection>    
      
            {/* <BaseSectionWide
                mode={'full'}
                themeMode={'light'}
                reverse={true}
                imageUrl={'/static/images/home-marketing.svg'}
                title={t('HomePage_Marketing_Title')}
                description={t('HomePage_Marketing_Content')}
                buttonTitle={'Learn more'}
            />

            <BannerSection>
                <BannerWrapper>
                    {banners.map((banner, index) => (
                            <Banner key={index}>
                                <BannerImage>
                                    <img src={banner.image} />
                                </BannerImage>  
        
                                <BannerDescription>
                                    <BannerTitle>{banner.title}</BannerTitle>
                                    <BannerContent>{banner.description}</BannerContent>
                                </BannerDescription>
        
                                <BaseButton 
                                    blackStyle 
                                    hideBorder={true} 
                                    withArrow={true}
                                >
                                    Learn more
                                </BaseButton>        
                            </Banner>
                        ))
                    }
                </BannerWrapper>
            </BannerSection> 

            <BaseSectionWide
                mode={'full'}
                reverse={false}
                imageUrl={'/static/images/home-impact-technology.svg'}
                title={t('HomePage_Impact_Title')}
                description={t('HomePage_Impact_Content')}
                buttonTitle={'Learn more'}
            />

            <BaseSection
                title={t('HomePage_Network_Content')}
                titleColor={'gradient'}
                textAlign={'center'}
                buttonTitle={'Learn more'}
                buttonStyle={'blackStyle'}
            /> */}
        </>
    )
}


HomePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(HomePage)