import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'

import {
    CorporateGovernanceWrapper,
    CorporateGovernanceTopSection,
    CorporateGovernanceTopSectionTitle,
    CorporateGovernanceTopSectionDescription,
    CorporateGovernanceCrowdSection,
    CorporateGovernanceCrowdTitle,
    CorporateGovernanceCrowdContent,
    CorporateGovernanceCrowdNumber,
    CorporateGovernanceCrowdDescription,
    CorporateGovernanceFoundationSection,
    CorporateGovernanceFoundationImage,
    CorporateGovernanceFoundationContent,
    CorporateGovernanceFoundationTitle,
    CorporateGovernanceFoundationDescription,
    PressroomCTASection,
    BaseCardElement,
    BaseCardImage,
    BaseCardDescriptionWrapper,
    BaseCardTitleWrapper,
    BaseCardTitle,
    BaseCardDescription,
    ButtonWrapper,
} from './index.styles'

function CorporateGovernancePage ({ t }) {
    const crowdInfo = [
        { description: t('CorporateGovernancePage_CrowdSection_Description_First') },
        { description: t('CorporateGovernancePage_CrowdSection_Description_Second') },
        { description: t('CorporateGovernancePage_CrowdSection_Description_Third') },
        { description: t('CorporateGovernancePage_CrowdSection_Description_Fourth') },
    ]

    const governanceSection = [
        {
            imageSrc: '/static/images/solid-foundation.svg',
            title: t('CorporateGovernancePage_GovernanceSection_Title_First'),
            description: t('CorporateGovernancePage_GovernanceSection_Description_First'),
        },
        {
            imageSrc: '/static/images/digital-company.svg',
            title: t('CorporateGovernancePage_GovernanceSection_Title_Second'),
            description: t('CorporateGovernancePage_GovernanceSection_Description_Second'),
        },
    ]

    return (
        <>
            <Head>
                <title>{t('CorporateGovernancePage_Head_Title')}</title>
            </Head>

            <CorporateGovernanceWrapper>
                <CorporateGovernanceTopSection>
                    <CorporateGovernanceTopSectionTitle>{t('CorporateGovernancePage_Title')}</CorporateGovernanceTopSectionTitle>
                    <CorporateGovernanceTopSectionDescription>{t('CorporateGovernancePage_Description')}</CorporateGovernanceTopSectionDescription>
                </CorporateGovernanceTopSection>

                <CorporateGovernanceCrowdSection>
                    <CorporateGovernanceCrowdTitle>{t('CorporateGovernancePage_CrowdSection_Title')}</CorporateGovernanceCrowdTitle>

                    {crowdInfo.map((item, index) => (
                        <CorporateGovernanceCrowdContent key={index}>
                            <CorporateGovernanceCrowdNumber>{`0${index + 1}`}</CorporateGovernanceCrowdNumber>
                            <CorporateGovernanceCrowdDescription>{item.description}</CorporateGovernanceCrowdDescription>
                        </CorporateGovernanceCrowdContent>
                    ))}
                </CorporateGovernanceCrowdSection>

                {governanceSection.map((section, index) => (
                    <CorporateGovernanceFoundationSection key={index}>
                        <CorporateGovernanceFoundationImage>
                            <img src={section.imageSrc} />
                        </CorporateGovernanceFoundationImage> 
    
                        <CorporateGovernanceFoundationContent>
                            <CorporateGovernanceFoundationTitle>{section.title}</CorporateGovernanceFoundationTitle>
                            <CorporateGovernanceFoundationDescription dangerouslySetInnerHTML={{ __html: section.description}} />
                        </CorporateGovernanceFoundationContent>
                    </CorporateGovernanceFoundationSection>
                ))}
            </CorporateGovernanceWrapper>

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
                            <BaseCardTitle>{t('CorporateGovernancePage_ParthershipsSection_Title')}</BaseCardTitle>
                            <BaseCardDescription>{t('CorporateGovernancePage_ParthershipsSection_Description')}</BaseCardDescription>
                        </BaseCardTitleWrapper>

                        <ButtonWrapper>            
                            <BaseButton mode={'dark'}>{t('CorporateGovernancePage_ParthershipsSection_Button')}</BaseButton>  
                        </ButtonWrapper>     
                    </BaseCardDescriptionWrapper>
                </BaseCardElement>
            </PressroomCTASection> 
        </>
    )
}
    
CorporateGovernancePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(CorporateGovernancePage)