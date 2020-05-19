import React from 'react'

import { withTranslation } from '../../i18n'

import BaseButton from '../../components/BaseButton'
import BaseSection from '../../components/BaseSection'
import BaseSectionHeading from '../../components/BaseSectionHeading'
import BaseSectionWide from '../../components/BaseSectionWide'

import {
    AboutWrapper,
    TopBanner,
    TopBannerDescription,
    TopBannerTitle,
    TopBannerContent,
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
            <BaseSectionHeading 
                title={'About Us'} 
                mainPage={false}
            ></BaseSectionHeading>

            {/* <AboutWrapper>
                <TopBanner>
                     <TopBannerDescription>
                        <TopBannerTitle>{t('AboutUsPage_TopBanner_Title')}</TopBannerTitle>
                        <TopBannerContent>{t('AboutUsPage_TopBanner_Content')}</TopBannerContent>
                    </TopBannerDescription>    
                </TopBanner>    
            </AboutWrapper> */}
            <BaseSection
                title={t('AboutUsPage_TopBanner_Title')}
                description={t('AboutUsPage_TopBanner_Content')}
                backgroundImage={'/static/images/about-top-banner.svg'}
                textAlign={'left'}
                titleColor={'black'}
            ></BaseSection>
            <BaseSectionWide
                backgroundImage={'/static/images/about-ict-ict.svg'}
                backgroundImageMode={'half'}
                backgroundImageDirection={'left'}
                title={t('AboutUsPage_ImpactBanner_Title')}
                description={t('AboutUsPage_ImpactBanner_Content')}
            ></BaseSectionWide>

            <BaseSection
                backgroundImage={'/static/images/about-ict-social-impact.svg'}
                title={t('AboutUsPage_SocialImpact_Title')}
                textAlign={'center'}
                description={t('AboutUsPage_SocialImpact_Content')}
                buttonTitle={'Learn more'}
            ></BaseSection>

            <InfoBannerSection>
                <InfoBannerWrapper>
                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>{t('AboutUsPage_InfoBanner_First_Title')}</InfoBannerTitle>

                            <InfoBannerContent>{t('AboutUsPage_InfoBanner_First_Content')}</InfoBannerContent>
                        </InfoBannerDescription>

                        <BaseButton blackStyle hideBorder={true} >Learn more <span /></BaseButton>   
                    </InfoBanner>

                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>{t('AboutUsPage_InfoBanner_Second_Title')}</InfoBannerTitle>

                            <InfoBannerContent>{t('AboutUsPage_InfoBanner_Second_Content')}</InfoBannerContent>
                        </InfoBannerDescription>
                        
                        <BaseButton blackStyle hideBorder={true} >Learn more <span /></BaseButton>   
                    </InfoBanner>  

                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>{t('AboutUsPage_InfoBanner_Third_Title')}</InfoBannerTitle>

                            <InfoBannerContent>{t('AboutUsPage_InfoBanner_Third_Content')}</InfoBannerContent>
                        </InfoBannerDescription>
            
                        <BaseButton blackStyle hideBorder={true} >Learn more <span /></BaseButton>   
                    </InfoBanner>       
                </InfoBannerWrapper>
            </InfoBannerSection> 

            <BaseSection
                backgroundImage={'/static/images/about-ict-legal-environment.svg'}
                title={t('AboutUsPage_LegalEnvironment_Title')}
                description={t('AboutUsPage_LegalEnvironment_Content')}
                buttonTitle={'Learn more'}
            ></BaseSection>

            <QuestionsBannerSection>
                <QuestionsBannerWrapper>
                    <QuestionsBanner>
                        <QuestionsBannerImage>
                            <img src="../static/images/question-icon.svg" />
                        </QuestionsBannerImage>

                        <QuestionsBannerDescription>
                            <QuestionsBannerTitle>{t('AboutUsPage_QuestionBanner_First_Title')}</QuestionsBannerTitle>

                            <QuestionsBannerContent>{t('AboutUsPage_QuestionBanner_First_Content')}</QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>

                    <QuestionsBanner>
                        <QuestionsBannerImage>
                            <img src="../static/images/question-icon.svg" />
                        </QuestionsBannerImage>

                        <QuestionsBannerDescription>
                            <QuestionsBannerTitle>{t('AboutUsPage_QuestionBanner_Second_Title')}</QuestionsBannerTitle>

                            <QuestionsBannerContent>{t('AboutUsPage_QuestionBanner_Second_Content')}</QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>

                    <QuestionsBanner>
                        <QuestionsBannerImage>
                            <img src="../static/images/question-icon.svg" />
                        </QuestionsBannerImage>

                        <QuestionsBannerDescription>
                            <QuestionsBannerTitle>{t('AboutUsPage_QuestionBanner_Third_Title')}</QuestionsBannerTitle>

                            <QuestionsBannerContent>{t('AboutUsPage_QuestionBanner_Third_Content')}</QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>         
                </QuestionsBannerWrapper>
            </QuestionsBannerSection>

            <BaseSectionWide
                backgroundImage={'/static/images/about-ict-million-picture.svg'}
                backgroundImageMode={'shadow'}
                backgroundImageDirection={'left'}
                title={t('AboutUsPage_BottomBanner_Title')}
                description={t('AboutUsPage_BottomBanner_Content')}
                buttonTitle={'Learn more'}
            ></BaseSectionWide>
        </>
    )
}

AboutICTPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(AboutICTPage)