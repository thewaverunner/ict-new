import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../../i18n'

import BaseButton from '../../../../components/BaseButton'
import BaseSection from '../../../../components/BaseSection'
// import BaseSectionHeading from '../../../../components/BaseSectionHeading'

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
    OpenPositionJobPageTaskWrapper
    // OpenPositionPageSection,
    // OpenPositionPageTitle,
    // OpenPositionPageDescription
} from './index.styles'

function OpenPositionJobPage ({ t }) {

    return (
        <>
            <Head>
                <title>{t('OpenPositionsJobPage-Title')}</title>
            </Head>
    
            {/* <BaseSectionHeading title={t('OpenPositionsPage-Heading')}/> */}

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

            {/* <OpenPositionPageSection>
                <OpenPositionPageTitle>{t('OpenPositionsJobPage-Job-Title')}</OpenPositionPageTitle>
                <OpenPositionPageDescription>{t('OpenPositionsJobPage-Job-Description')}</OpenPositionPageDescription>

                <BaseButton blackStyle linkUrl={`/company/open-positions/manager/apply`}>{t('OpenPositionsJobPage-Job-Apply')}</BaseButton>
            </OpenPositionPageSection>

            <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={t('OpenPositionsPage-JoinUs-Banner-Title')}
                titleColor={'black'}
                description={t('OpenPositionsPage-JoinUs-Banner-Description')}
                buttonTitle={'Contact Us'}
                buttonStyle={'blackStyle'}
            /> */}

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img src="/static/images/company-governance-parthnership.svg" />
                </CorporateGovernancePartnershipsImage> 
            
                <CorporateGovernancePartnershipsContent>
                    <CorporateGovernancePartnershipsContentWrapper>
                        <CorporateGovernancePartnershipsDescriptionWrapper>
                            <CorporateGovernancePartnershipsTitle>Join our team</CorporateGovernancePartnershipsTitle>

                            <CorporateGovernancePartnershipsDescription>
                                We are always looking for talented people to 
                                join our force. Please don’t hesitate to apply 
                                to any of our currently open positions within the company.
                            </CorporateGovernancePartnershipsDescription>

                            <BaseButton blackStyle>View Open Positions</BaseButton>
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