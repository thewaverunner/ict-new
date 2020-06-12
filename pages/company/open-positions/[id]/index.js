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

function OpenPositionJobPage ({ t, router, job }) {
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

                    <BaseButton mode={'dark'} linkUrl={`/company/open-positions/${router.query.id}/apply`}>{t('OpenPositionsJobPage_Job_Apply')}</BaseButton>
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

OpenPositionJobPage.getInitialProps = async ({ query }) => {
    async function getJob () {
        try {
            const { data } = await JobsService.getJob(query.id)

            const locations = await getLocations()

            const jobDetail = data.data.attributes.body.split('The position:')

            const job = {
                description: jobDetail[0],
                tasks: jobDetail[1],
                title: data.data.attributes.title,
                city: locations.data.data.attributes.city,
                country: locations.data.data.attributes.country,
            }

            return job
        } catch (err) {
            console.log(err)
        }
    }

    async function getLocations () {
        const locationsPromises = JobsService.getJobLocation(query.id)

        try {
            return await locationsPromises
        } catch (err) {
            console.log(err)
        }
    }

    return {
        namespacesRequired: ['common'],
        job: await getJob(),
    }
}

export default withRouter(withTranslation('common')(OpenPositionJobPage))