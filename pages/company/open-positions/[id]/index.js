import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../../i18n'

import BaseButton from '../../../../components/BaseButton'
import BaseSection from '../../../../components/BaseSection'

import {
    CorporateGovernancePartnershipsSection,
    CorporateGovernancePartnershipsImage,
    CorporateGovernancePartnershipsContent,
    CorporateGovernancePartnershipsContentWrapper,
    CorporateGovernancePartnershipsTitle,
    CorporateGovernancePartnershipsDescription,
    CorporateGovernancePartnershipsDescriptionWrapper,

    OpenPositionJobPageSection,
    OpenPositionJobPageSectionTitle,
    OpenPositionJobPageSectionDescription,
    OpenPositionJobPageDescriptionJobWrapper,
    OpenPositionJobPageTaskWrapper,
} from './index.styles'

function OpenPositionJobPage ({ t }) {

    return (
        <>
            <Head>
                <title>{t('OpenPositionsJobPage-Title')}</title>
            </Head>


            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={t('OpenPositionsJobPage-Marketing-Banner-Title')}
                titleColor={'black'}
                subtitle={t('OpenPositionsJobPage-Marketing-Banner-Subtitle')}
            />

            <OpenPositionJobPageSection>
        
                <OpenPositionJobPageDescriptionJobWrapper>
                    <OpenPositionJobPageSectionTitle>{t('OpenPositionsJobPage-Job-Description-Title')}</OpenPositionJobPageSectionTitle>
                    <OpenPositionJobPageSectionDescription dangerouslySetInnerHTML={{ __html: t('OpenPositionsJobPage-Job-Description')}}/>
                </OpenPositionJobPageDescriptionJobWrapper>

                <OpenPositionJobPageTaskWrapper>
                    <OpenPositionJobPageSectionTitle>{t('OpenPositionsJobPage-Job-Task-Title')}</OpenPositionJobPageSectionTitle>
                    <OpenPositionJobPageSectionDescription>{t('OpenPositionsJobPage-Job-Task-Description')}</OpenPositionJobPageSectionDescription>

                    <BaseButton blackStyle>{t('OpenPositionsJobPage-Job-Apply')}</BaseButton>
                </OpenPositionJobPageTaskWrapper>
            </OpenPositionJobPageSection>

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img src="/static/images/company-parthership.svg" />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>{t('OpenPositionsJobPage-ParthershipSection-Title')}</CorporateGovernancePartnershipsTitle>
                            <CorporateGovernancePartnershipsDescription>{t('OpenPositionsJobPage-ParthershipSection-Description')}</CorporateGovernancePartnershipsDescription>

                            <BaseButton blackStyle>{t('OpenPositionsJobPage-ParthershipSection-Button')}</BaseButton>
                        </CorporateGovernancePartnershipsDescriptionWrapper>
                    </CorporateGovernancePartnershipsContentWrapper>
                </CorporateGovernancePartnershipsContent>
            </CorporateGovernancePartnershipsSection>
        </>
    )
}

OpenPositionJobPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionJobPage)