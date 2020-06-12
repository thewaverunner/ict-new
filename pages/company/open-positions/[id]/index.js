import React, { useState, useEffect} from 'react'

import { withRouter } from 'next/router'

import Head from 'next/head'

import { withTranslation } from '../../../../i18n'

import JobsService from '../../../../services/jobs'

import BaseButton from '../../../../components/BaseButton'
import BaseSection from '../../../../components/BaseSection'

import {
    OpenPositionJobPageSection,
    OpenPositionJobPageSectionTitle,
    OpenPositionJobPageSectionDescription,
    OpenPositionJobPageDescriptionJobWrapper,
    OpenPositionJobPageTaskWrapper,
    PressroomCTASection,
    BaseCardElement,
    BaseCardImage,
    BaseCardDescriptionWrapper,
    BaseCardTitleWrapper,
    BaseCardTitle,
    BaseCardDescription,
    ButtonWrapper,
} from './index.styles'

function OpenPositionJobPage ({ t, router }) {
    const jobId = router.query.id

    const [job, setJob] = useState({})

    useEffect(() => {
        getJob(jobId)
    }, [])

    async function getJob (id) {
        try {
            const { data } = await JobsService.getJob(id)

            const locations = await getLocations(id)

            const jobDetail = data.data.attributes.body.split('The position:')

            const job = {
                description: jobDetail[0],
                tasks: jobDetail[1],
                title: data.data.attributes.title,
                city: locations.data.data.attributes.city,
                country: locations.data.data.attributes.city,
            }

            setJob(job)
        } catch (err) {
            console.log(err)
        }
    }

    async function getLocations (id) {
        const locationsPromises = JobsService.getJobLocation(id)

        try {
            return await locationsPromises
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Head>
                <title>{t('OpenPositionsJobPage_Head_Title')}</title>
            </Head>

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={job.title}
                titleColor={'black'}
                subtitle={`${job.country} - ${job.city}`}
            />

            <OpenPositionJobPageSection>
                <OpenPositionJobPageDescriptionJobWrapper>
                    <OpenPositionJobPageSectionTitle>{t('OpenPositionsJobPage_Job_Description_Title')}</OpenPositionJobPageSectionTitle>
                    <OpenPositionJobPageSectionDescription dangerouslySetInnerHTML={{ __html: job.description}} />
                </OpenPositionJobPageDescriptionJobWrapper>

                <OpenPositionJobPageTaskWrapper>
                    <OpenPositionJobPageSectionTitle>{t('OpenPositionsJobPage_Job_Task_Title')}</OpenPositionJobPageSectionTitle>
                    <OpenPositionJobPageSectionDescription dangerouslySetInnerHTML={{ __html: job.tasks}} />

                    <BaseButton mode={'dark'} linkUrl={`/company/open-positions/${jobId}/apply`}>{t('OpenPositionsJobPage_Job_Apply')}</BaseButton>
                </OpenPositionJobPageTaskWrapper>
            </OpenPositionJobPageSection>

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
                            <BaseCardTitle>{t('OpenPositionsJobPage_ParthershipSection_Title')}</BaseCardTitle>
                            <BaseCardDescription>{t('OpenPositionsJobPage_ParthershipSection_Description')}</BaseCardDescription>
                        </BaseCardTitleWrapper>

                        <ButtonWrapper>            
                            <BaseButton mode={'dark'}>{t('OpenPositionsJobPage_ParthershipSection_Button')}</BaseButton>  
                        </ButtonWrapper>     
                    </BaseCardDescriptionWrapper>
                </BaseCardElement>
            </PressroomCTASection> 
        </>
    )
}

OpenPositionJobPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withRouter(withTranslation('common')(OpenPositionJobPage))