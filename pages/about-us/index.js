import React from 'react'

import { withTranslation } from '../../i18n'
import BaseButton from '../../components/BaseButton'

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
    SocialImpactSection,
    SocialImpactDescription,
    SocialImpactTitle,
    SocialImpactContent,
    InfoBannerSection,
    InfoBannerWrapper,
    InfoBanner,
    InfoBannerDescription,
    InfoBannerTitle,
    InfoBannerContent,
    LegalEnvironmentSection,
    LegalEnvironmentDescription,
    LegalEnvironmentTitle,
    LegalEnvironmentContent,
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
    AboutBottomContent
} from './index.styles'


function AboutUsPage ({ t }) {
    return (
        <>
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

            <SocialImpactSection>
                <SocialImpactDescription>
                    <SocialImpactTitle>{t('AboutUsPage_SocialImpact_Title')}</SocialImpactTitle>

                    <SocialImpactContent>{t('AboutUsPage_SocialImpact_Content')}</SocialImpactContent>
                    <BaseButton>Learn more <span /></BaseButton>
                </SocialImpactDescription>
            </SocialImpactSection>

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

            <LegalEnvironmentSection>
                <LegalEnvironmentDescription>
                    <LegalEnvironmentTitle>{t('AboutUsPage_LegalEnvironment_Title')}</LegalEnvironmentTitle>

                    <LegalEnvironmentContent>{t('AboutUsPage_LegalEnvironment_Content')}</LegalEnvironmentContent>

                    <BaseButton>Learn more <span /></BaseButton>
                </LegalEnvironmentDescription>
            </LegalEnvironmentSection> 

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