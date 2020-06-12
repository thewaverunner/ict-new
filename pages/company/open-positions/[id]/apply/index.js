import React, { useState, useEffect } from 'react'

import Head from 'next/head'

import { withRouter } from 'next/router'

import { withTranslation } from '../../../../../i18n'

import JobsService from '../../../../../services/jobs'

import BaseButton from '../../../../../components/BaseButton'
import BaseSection from '../../../../../components/BaseSection'

import {
    OpenPositionApplyPageContent,
    OpenPositionApplyPageWrapper,
    OpenPositionApplyPageTitle,
    PressroomCTASection,
    BaseCardElement,
    BaseCardImage,
    BaseCardDescriptionWrapper,
    BaseCardTitleWrapper,
    BaseCardTitle,
    BaseCardDescription,
    ButtonWrapper,
} from './index.styles'

function OpenPositionApplyPage ({ t, job }) {
    return (
        <>
            <Head>
                <title>{t('OpenPositionApplyPage_Head_Title')}</title>
            </Head>

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={job.title}
                titleColor={'black'}
                subtitle={`${job.country} - ${job.city}`}
                textAlign={'center'}
            />

            <OpenPositionApplyPageContent>
                <OpenPositionApplyPageWrapper>
                    <OpenPositionApplyPageTitle>{t('OpenPositionsJobPage_Job_Apply')}</OpenPositionApplyPageTitle>
                    <iframe src={job.jobApply} style={{width: '100%', height: '1600px'}}></iframe>
                </OpenPositionApplyPageWrapper>
            </OpenPositionApplyPageContent>

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
                            <BaseCardTitle>{t('OpenPositionApplyPage_ParthershipSection_Title')}</BaseCardTitle>
                            <BaseCardDescription>{t('OpenPositionApplyPage_ParthershipSection_Description')}</BaseCardDescription>
                        </BaseCardTitleWrapper>

                        <ButtonWrapper>            
                            <BaseButton mode={'dark'}>{t('OpenPositionApplyPage_ParthershipSection_Button')}</BaseButton>  
                        </ButtonWrapper>     
                    </BaseCardDescriptionWrapper>
                </BaseCardElement>
            </PressroomCTASection> 
        </>
    )
}

OpenPositionApplyPage.getInitialProps = async ({ query }) => {
    async function getJob () {
        try {
            const { data } = await JobsService.getJob(query.id)

            const locations = await getLocations()

            const job = {
                jobApply: data.data.links['careersite-job-apply-iframe-url'],
                title: data.data.attributes.title,
                city: locations.data.data.attributes.city,
                country: locations.data.data.attributes.city,
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

export default withRouter(withTranslation('common')(OpenPositionApplyPage))