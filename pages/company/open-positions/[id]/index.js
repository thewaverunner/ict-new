import React, { useState, useEffect} from 'react'

import axios from 'axios'

import { withRouter } from 'next/router'
import Head from 'next/head'

import { withTranslation } from '../../../../i18n'

import BaseButton from '../../../../components/BaseButton'
import BaseSection from '../../../../components/BaseSection'

import { AXIOS_CONFIG } from '../../../../utils/constants'

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

function OpenPositionJobPage ({ t, router }) {
    const jobId = router.query.id

    const [jobDetail, setDescription] = useState({})

    useEffect(() => {
        axios.get(`https://api.teamtailor.com/v1/jobs/${jobId}`, AXIOS_CONFIG)
            .then(response => {
                const jobDetail = response.data.data.attributes.body.split('The position:')
                const jobDescription = jobDetail[0]
                const jobTasks = jobDetail[1]
                const jobTitle = response.data.data.attributes.title

                setDescription(prevState => {
                    return {
                        ...prevState,
                        description: jobDescription,
                        tasks: jobTasks,
                        title: jobTitle,
                    }
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <Head>
                <title>{t('OpenPositionsJobPage_Head_Title')}</title>
            </Head>

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={jobDetail.title}
                titleColor={'black'}
                subtitle={t('OpenPositionsJobPage_Marketing_Banner_Subtitle')}
            />

            <OpenPositionJobPageSection>
                <OpenPositionJobPageDescriptionJobWrapper>
                    <OpenPositionJobPageSectionTitle>{t('OpenPositionsJobPage_Job_Description_Title')}</OpenPositionJobPageSectionTitle>
                    <OpenPositionJobPageSectionDescription dangerouslySetInnerHTML={{ __html: jobDetail.description}} />
                </OpenPositionJobPageDescriptionJobWrapper>

                <OpenPositionJobPageTaskWrapper>
                    <OpenPositionJobPageSectionTitle>{t('OpenPositionsJobPage_Job_Task_Title')}</OpenPositionJobPageSectionTitle>
                    <OpenPositionJobPageSectionDescription dangerouslySetInnerHTML={{ __html: jobDetail.tasks}} />

                    <BaseButton mode={'dark'} linkUrl={`/company/open-positions/${jobId}/apply`}>{t('OpenPositionsJobPage_Job_Apply')}</BaseButton>
                </OpenPositionJobPageTaskWrapper>
            </OpenPositionJobPageSection>

            <CorporateGovernancePartnershipsSection>
                <CorporateGovernancePartnershipsImage>
                    <img 
                        src="/static/images/company-parthership.svg" 
                        alt="company-parthership"
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

export default withRouter(withTranslation('common')(OpenPositionJobPage))