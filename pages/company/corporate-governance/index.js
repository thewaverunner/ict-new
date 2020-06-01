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

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img src="/static/images/company-parthership.svg" />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>{t('CorporateGovernancePage_ParthershipsSection_Title')}</CorporateGovernancePartnershipsTitle>
                            <CorporateGovernancePartnershipsDescription dangerouslySetInnerHTML={{ __html: t('CorporateGovernancePage_ParthershipsSection_Description')}} />

                            <BaseButton blackStyle>{t('CorporateGovernancePage_ParthershipsSection_Button')}</BaseButton>
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