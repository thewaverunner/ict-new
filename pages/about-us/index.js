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
                        <TopBannerTitle>Who we are</TopBannerTitle>

                        <TopBannerContent>
                             This is where remarkable innovation meets rapid pace 
                             fuelled by relentless focus. Our extraordinary drive 
                             comes from our willingness to go that extra mile in everything we do.
                        </TopBannerContent>
                    </TopBannerDescription>    
                </TopBanner>    
            </AboutWrapper>

            <ImpactSection>
                <ImpactSectionImage>
                    <img src="../static/images/about-impact-banner.svg" />
                </ImpactSectionImage>

                <ImpactSectionDescription>
                    <ImpactSectionWrapper>
                        <ImpactSectionTitle>Impact Crowd Technology S.L.</ImpactSectionTitle>

                        <ImpactSectionContent>
                            Headquartered in Madrid, Impact Crowd Technology S.L. 
                            is a privately held Spanish company. The company’s vision 
                            is to create the world’s largest salesforce, disrupting the 
                            traditional value chain and distribution of apps, software and services. 
                        </ImpactSectionContent>
                    </ImpactSectionWrapper>     
                </ImpactSectionDescription>    
            </ImpactSection> 

            <SocialImpactSection>
                <SocialImpactDescription>
                    <SocialImpactTitle>Social impact at ITC</SocialImpactTitle>

                    <SocialImpactContent>
                        We are partnering with leading CSR experts to create lasting, transformative 
                        solutions to some of the world’s most critical social challenges.
                    </SocialImpactContent>

                    <BaseButton>Learn more <span /></BaseButton>
                </SocialImpactDescription>
            </SocialImpactSection>

            <InfoBannerSection>
                <InfoBannerWrapper>
                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>What we believe</InfoBannerTitle>

                            <InfoBannerContent>
                                Digital products are 1’s and 0’s, duplicated through cut and paste. 
                                Unlike many other MLM companies, our network will never have to buy 
                                or sit on physical inventory. This differentiates our business model 
                                from current competitors in the MLM space.
                            </InfoBannerContent>
                        </InfoBannerDescription>

                        <BaseButton blackStyle hideBorder={true} >Learn more <span /></BaseButton>   
                    </InfoBanner>

                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>What we do</InfoBannerTitle>

                            <InfoBannerContent>
                                Impact Crowd Technology’s aim is to use a MLM sales structure to enable 
                                a network of salespeople to sell other companies’ digital products. Our 
                                focus is on cherry- picking great products and distributing these through 
                                Crowd1’s extensive online sales network.
                            </InfoBannerContent>
                        </InfoBannerDescription>
                        
                        <BaseButton blackStyle hideBorder={true} >Learn more <span /></BaseButton>   
                    </InfoBanner>  

                    <InfoBanner>
                        <InfoBannerDescription>
                            <InfoBannerTitle>What is our goal</InfoBannerTitle>

                            <InfoBannerContent>
                                As the first digital MLM company, Impact Crowd Technology will 
                                address the challenge of long- term sustainability. We aim to 
                                build a vast library of digital products that are easily accessible 
                                for an entire network of salespeople to use, recommend and sell.
                            </InfoBannerContent>
                        </InfoBannerDescription>
                        
                        <BaseButton blackStyle hideBorder={true} >Learn more <span /></BaseButton>   
                    </InfoBanner>       
                </InfoBannerWrapper>
            </InfoBannerSection> 

            <LegalEnvironmentSection>
                <LegalEnvironmentDescription>
                    <LegalEnvironmentTitle>Legal Environment</LegalEnvironmentTitle>

                    <LegalEnvironmentContent>
                        Impact Crowd Technology has been set up in accordance 
                        with strict corporate governance and a solid managerial 
                        foundation that meets all European laws and regulations. 
                    </LegalEnvironmentContent>

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
                            <QuestionsBannerTitle>Meet our team</QuestionsBannerTitle>

                            <QuestionsBannerContent>
                                At Impact Crowd Technology, we always go that 
                                extra mile in everything we do. Together we 
                                have built a network of salespeople with an 
                                unprecedented reach and future sales potential.
                            </QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>

                    <QuestionsBanner>
                        <QuestionsBannerImage>
                            <img src="../static/images/question-icon.svg" />
                        </QuestionsBannerImage>

                        <QuestionsBannerDescription>
                            <QuestionsBannerTitle>Join us</QuestionsBannerTitle>

                            <QuestionsBannerContent>
                                ICT is a multigenerational company with employees
                                 from 20 to 65. We are proud that so many have chosen 
                                 to remain and grow with us and we’d like you to 
                                 join us on our journey.
                            </QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>

                    <QuestionsBanner>
                        <QuestionsBannerImage>
                            <img src="../static/images/question-icon.svg" />
                        </QuestionsBannerImage>

                        <QuestionsBannerDescription>
                            <QuestionsBannerTitle>Advisors</QuestionsBannerTitle>

                            <QuestionsBannerContent>
                                Crowd1 has attracted some of the world’s leading 
                                experts in network marketing. They have all been 
                                attracted by the potential of Crowd1’s unique business 
                                proposition and are motivated by ICT’s 
                                long-term prospects and ambition.
                            </QuestionsBannerContent>
                        </QuestionsBannerDescription>   
                    </QuestionsBanner>         
                </QuestionsBannerWrapper>
            </QuestionsBannerSection>

            <AboutBottomSection>
                <AboutBottomDescription>
                    <AboutBottomTitle>Ambitious members extraordinary salespeople</AboutBottomTitle>

                    <AboutBottomContent>
                        Crowd1’s network consists of millions of highly ambitious 
                        members with a love of entrepreneurship and sales that provides 
                        both employment and a source of income. The simplicity and speed 
                        of Crowd1 is what motivates our entrepreneurs and salespeople.
                    </AboutBottomContent>

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