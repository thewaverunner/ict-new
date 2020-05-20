import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../i18n'

import BaseButton from '../../components/BaseButton'
import BaseSection from '../../components/BaseSection'
import BaseSectionHeading from '../../components/BaseSectionHeading'
import BaseSectionWide from '../../components/BaseSectionWide'

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
    return (
        <>
            <Head>
                <title>{t('AboutICTPage-Heading')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('AboutICTPage-Heading')}
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
                backgroundImage={'/static/images/about-ict-ict.svg'}
                backgroundImageMode={'half'}
                backgroundImageDirection={'left'}
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
                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>{t('AboutICTPage_InfoBanner_First_Title')}</InfoBannerTitle>

                            <InfoBannerContent>{t('AboutICTPage_InfoBanner_First_Description')}</InfoBannerContent>
                        </InfoBannerDescription>

                        <BaseButton 
                            blackStyle 
                            hideBorder={true} 
                            withArrow={true}
                        >
                            Learn more
                        </BaseButton>   
                    </InfoBanner>

                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>{t('AboutICTPage_InfoBanner_Second_Title')}</InfoBannerTitle>

                            <InfoBannerContent>{t('AboutICTPage_InfoBanner_Second_Description')}</InfoBannerContent>
                        </InfoBannerDescription>
                        
                        <BaseButton 
                            blackStyle 
                            hideBorder={true} 
                            withArrow={true} 
                        >
                            Learn more
                        </BaseButton>   
                    </InfoBanner>  

                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>{t('AboutICTPage_InfoBanner_Third_Title')}</InfoBannerTitle>

                            <InfoBannerContent>{t('AboutICTPage_InfoBanner_Third_Description')}</InfoBannerContent>
                        </InfoBannerDescription>
            
                        <BaseButton 
                            blackStyle 
                            hideBorder={true} 
                            withArrow={true} 
                        >
                            Learn more
                        </BaseButton>   
                    </InfoBanner>       
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
                    <QuestionsBanner>
                        <QuestionsBannerImage>
                            <img src="../static/images/question-icon.svg" />
                        </QuestionsBannerImage>

                        <QuestionsBannerDescription>
                            <QuestionsBannerTitle>{t('AboutICTPage_QuestionBanner_First_Title')}</QuestionsBannerTitle>

                            <QuestionsBannerContent>{t('AboutICTPage_QuestionBanner_First_Description')}</QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>

                    <QuestionsBanner>
                        <QuestionsBannerImage>
                            <img src="../static/images/question-icon.svg" />
                        </QuestionsBannerImage>

                        <QuestionsBannerDescription>
                            <QuestionsBannerTitle>{t('AboutICTPage_QuestionBanner_Second_Title')}</QuestionsBannerTitle>

                            <QuestionsBannerContent>{t('AboutICTPage_QuestionBanner_Second_Description')}</QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>

                    <QuestionsBanner>
                        <QuestionsBannerImage>
                            <img src="../static/images/question-icon.svg" />
                        </QuestionsBannerImage>

                        <QuestionsBannerDescription>
                            <QuestionsBannerTitle>{t('AboutICTPage_QuestionBanner_Third_Title')}</QuestionsBannerTitle>

                            <QuestionsBannerContent>{t('AboutICTPage_QuestionBanner_Third_Description')}</QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>         
                </QuestionsBannerWrapper>
            </QuestionsBannerSection>

            <BaseSectionWide
                backgroundImage={'/static/images/about-ict-million-picture.svg'}
                backgroundImageMode={'shadow'}
                backgroundImageDirection={'right'}
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