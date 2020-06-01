import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'
import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'
import BaseSectionWide from '../../../components/BaseSectionWide'

import {
    InfoBannerSection,
    InfoBannerWrapper,
    InfoBanner,
    InfoBannerDescription,
    InfoBannerTitle,
    InfoBannerContent,
    QuestionsBannerSection,
    QuestionsBannerWrapper,
    QuestionsBanner,
    QuestionsBannerDescription,
    QuestionsBannerTitle,
    QuestionsBannerContent,
    QuestionsBannerImage
} from './index.styles'

function AboutICTPage ({ t }) {
    const banners = [
        { 
            title: t('AboutICTPage_InfoBanner_First_Title'),
            description: t('AboutICTPage_InfoBanner_First_Description')
        },
        { 
            title: t('AboutICTPage_InfoBanner_Second_Title'),
            description: t('AboutICTPage_InfoBanner_Second_Description')
        },
        { 
            title: t('AboutICTPage_InfoBanner_Third_Title'),
            description: t('AboutICTPage_InfoBanner_Third_Description')
        }
    ]

    const questions = [
        { 
            title: t('AboutICTPage_QuestionBanner_First_Title'),
            description: t('AboutICTPage_QuestionBanner_First_Description')
        },
        { 
            title: t('AboutICTPage_QuestionBanner_Second_Title'),
            description: t('AboutICTPage_QuestionBanner_Second_Description')
        },
        { 
            title: t('AboutICTPage_QuestionBanner_Third_Title'),
            description: t('AboutICTPage_QuestionBanner_Third_Description')
        }
    ]

    return (
        <>
            <Head>
                <title>{t('AboutICTPage_Head_Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('AboutICTPage_Heading')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                title={t('AboutICTPage_AboutICTBanner_Title')}
                description={t('AboutICTPage_AboutICTBanner_Description')}
                textAlign={'left'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'dark'}
                reverse={false}
                imageFull={true}
                imageUrl={'/static/images/about-ict-ict.svg'}
                title={t('AboutICTPage_ICT_Title')}
                description={t('AboutICTPage_ICT_Description')}
            />

            <BaseSection
                backgroundImage={'/static/images/about-ict-social-impact.svg'}
                title={t('AboutICTPage_SocialImpact_Title')}
                description={t('AboutICTPage_SocialImpact_Description')}
                textAlign={'center'}
                buttonTitle={'Learn more'}
            />

            <InfoBannerSection>
                <InfoBannerWrapper>
                    {
                        banners.map((banner, index) => (
                            <InfoBanner key={index}>
                                <InfoBannerDescription>
                                    <InfoBannerTitle>{banner.title}</InfoBannerTitle>
                                    <InfoBannerContent>{banner.description}</InfoBannerContent>
                                </InfoBannerDescription>

                                <BaseButton 
                                    blackStyle 
                                    hideBorder={true} 
                                    withArrow={true}
                                >
                                    Learn more
                                </BaseButton>   
                            </InfoBanner>
                        ))
                    }
                </InfoBannerWrapper>
            </InfoBannerSection>

            <BaseSection
                backgroundImage={'/static/images/about-ict-legal-environment.svg'}
                title={t('AboutICTPage_LegalEnvironment_Title')}
                description={t('AboutICTPage_LegalEnvironment_Description')}
                buttonTitle={'Learn more'}
            />

            <QuestionsBannerSection>
                <QuestionsBannerWrapper>
                    {
                        questions.map((question, index) => (
                            <QuestionsBanner key={index}>
                                <QuestionsBannerImage>
                                    <img src="../static/images/question-icon.svg" />
                                </QuestionsBannerImage>

                                <QuestionsBannerDescription>
                                    <QuestionsBannerTitle>{question.title}</QuestionsBannerTitle>
                                    <QuestionsBannerContent>{question.description}</QuestionsBannerContent>

                                    <BaseButton 
                                    blackStyle 
                                    hideBorder={true} 
                                    withArrow={true}
                                    >
                                        Learn more
                                    </BaseButton>  
                                </QuestionsBannerDescription>   
                            </QuestionsBanner>
                        ))
                    }
                </QuestionsBannerWrapper>
            </QuestionsBannerSection>

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={true}
                imageUrl={'/static/images/about-ict-million-picture.svg'}
                title={t('AbAboutICTPage_ICTCrowdBanner_Title')}
                description={t('AbAboutICTPage_ICTCrowdBanner_Description')}
                buttonTitle={'Learn more'}
            />
        </>
    )
}

AboutICTPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(AboutICTPage)