import React from 'react'

import { withTranslation } from '../../i18n'

import BaseButton from '../../components/BaseButton'
import BaseSection from '../../components/BaseSection'

import {
    AboutWrapper,
    TopBanner,
    TopBannerDescription,
    TopBannerTitle,
    TopBannerContent,
    ImpactSection,
    ImpactSectionImage,
    ImpactSectionContent,
    ImpactSectionDescription,
    ImpactSectionTitle,
    ImpactSectionWrapper,
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
    QuestionsBannerImage,
    AboutBottomSection,
    AboutBottomDescription,
    AboutBottomTitle,
    AboutBottomContent,
    HeaderContainer,
    HeaderWrapper,
    HeaderDescriptionWrapper,
    HeaderTitle
} from './index.styles'


function AboutUsPage ({ t }) {
    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <HeaderDescriptionWrapper>
                        <HeaderTitle>{t('AboutUsPage_Title')}</HeaderTitle>
                    </HeaderDescriptionWrapper>
                </HeaderWrapper>
            </HeaderContainer> 

            <AboutWrapper>
                <TopBanner>
                     <TopBannerDescription>
                        <TopBannerTitle>{t('AboutUsPage_TopBanner_Title')}</TopBannerTitle>

                        <TopBannerContent>{t('AboutUsPage_TopBanner_Content')}</TopBannerContent>
                    </TopBannerDescription>    
                </TopBanner>    
            </AboutWrapper>

            <ImpactSection>
                <ImpactSectionImage>
                    <img src="../static/images/about-impact-banner.svg" />
                </ImpactSectionImage>

                <ImpactSectionDescription>
                    <ImpactSectionWrapper>
                        <ImpactSectionTitle>{t('AboutUsPage_ImpactBanner_Title')}</ImpactSectionTitle>

                        <ImpactSectionContent>{t('AboutUsPage_ImpactBanner_Content')} </ImpactSectionContent>
                    </ImpactSectionWrapper>     
                </ImpactSectionDescription>    
            </ImpactSection>

            <BaseSection
                backgroundImage={'/static/images/about-social-impact.svg'}
                title={t('AboutUsPage_SocialImpact_Title')}
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
                backgroundImage={'/static/images/about-legal-banner.svg'}
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

            <AboutBottomSection>
                <AboutBottomDescription>
                    <AboutBottomTitle>{t('AboutUsPage_BottomBanner_Title')}</AboutBottomTitle>

                    <AboutBottomContent>{t('AboutUsPage_BottomBanner_Content')}</AboutBottomContent>

                    <BaseButton>Learn more <span /></BaseButton>
                </AboutBottomDescription>    
            </AboutBottomSection>    
        </>
    )
}

AboutUsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(AboutUsPage)