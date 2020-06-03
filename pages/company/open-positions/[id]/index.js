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
                <title>{t('OpenPositionsJobPage_Head_Title')}</title>
            </Head>

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={t('OpenPositionsJobPage_Marketing_Banner_Title')}
                titleColor={'black'}
                subtitle={t('OpenPositionsJobPage_Marketing_Banner_Subtitle')}
            />

            <OpenPositionJobPageSection>
                <OpenPositionJobPageDescriptionJobWrapper>
                    <OpenPositionJobPageSectionTitle>{t('OpenPositionsJobPage_Job_Description_Title')}</OpenPositionJobPageSectionTitle>
                    <OpenPositionJobPageSectionDescription dangerouslySetInnerHTML={{ __html: t('OpenPositionsJobPage_Job_Description')}} />
                </OpenPositionJobPageDescriptionJobWrapper>

                <OpenPositionJobPageTaskWrapper>
                    <OpenPositionJobPageSectionTitle>{t('OpenPositionsJobPage_Job_Task_Title')}</OpenPositionJobPageSectionTitle>
                    <OpenPositionJobPageSectionDescription>{t('OpenPositionsJobPage_Job_Task_Description')}</OpenPositionJobPageSectionDescription>

                    <BaseButton mode={'dark'}>{t('OpenPositionsJobPage_Job_Apply')}</BaseButton>
                </OpenPositionJobPageTaskWrapper>
            </OpenPositionJobPageSection>

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img 
                        src="/static/images/company-parthership.svg" 
                        alt='parthership-image' 
                    />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>{t('OpenPositionApplyPage_ParthershipSection_Title')}</CorporateGovernancePartnershipsTitle>
                            <CorporateGovernancePartnershipsDescription>{t('OpenPositionApplyPage_ParthershipSection_Description')}</CorporateGovernancePartnershipsDescription>

                            <BaseButton mode={'dark'}>{t('OpenPositionsJobPage_ParthershipSection_Button')}</BaseButton>
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