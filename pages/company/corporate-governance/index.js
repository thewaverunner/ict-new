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

    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper
} from './index.styles'

function CorporateGovernancePage ({ t }) {
    const crowdInfo = [
        { description: t('CorporateGovernancePage-CrowdSection-Description-First') },
        { description: t('CorporateGovernancePage-CrowdSection-Description-Second') },
        { description: t('CorporateGovernancePage-CrowdSection-Description-Third') },
        { description: t('CorporateGovernancePage-CrowdSection-Description-Fourth') },
    ]

    const governanceSection = [
        {
            imageSrc: '/static/images/solid-foundation.svg',
            title: t('CorporateGovernancePage-GovernanceSection-Title-First'),
            description: t('CorporateGovernancePage-GovernanceSection-Description-First'),
        },
        {
            imageSrc: '/static/images/digital-company.svg',
            title: t('CorporateGovernancePage-GovernanceSection-Title-Second'),
            description: t('CorporateGovernancePage-GovernanceSection-Description-Second'),
        },
    ]

    return (
        <>
            <Head>
                <title>{t('CorporateGovernancePage-Head-Title')}</title>
            </Head>

            <CorporateGovernanceWrapper>
                <CorporateGovernanceTopSection>
                    <CorporateGovernanceTopSectionTitle>{t('CorporateGovernancePage-Title')}</CorporateGovernanceTopSectionTitle>
                    <CorporateGovernanceTopSectionDescription>{t('CorporateGovernancePage-Description')}</CorporateGovernanceTopSectionDescription>
                </CorporateGovernanceTopSection>

                <CorporateGovernanceCrowdSection>
                    <CorporateGovernanceCrowdTitle>{t('CorporateGovernancePage-CrowdSection-Title')}</CorporateGovernanceCrowdTitle>

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

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img src="/static/images/company-parthership.svg" />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>{t('CorporateGovernancePage-ParthershipsSection-Title')}</CorporateGovernancePartnershipsTitle>
                            <CorporateGovernancePartnershipsDescription dangerouslySetInnerHTML={{ __html: t('CorporateGovernancePage-ParthershipsSection-Description')}} />

                            <BaseButton blackStyle>{t('CorporateGovernancePage-ParthershipsSection-Button')}</BaseButton>
                        </CorporateGovernancePartnershipsDescriptionWrapper>
                    </CorporateGovernancePartnershipsContentWrapper>
                </CorporateGovernancePartnershipsContent>
            </CorporateGovernancePartnershipsSection>
        </>
    )
}
    
CorporateGovernancePage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(CorporateGovernancePage)