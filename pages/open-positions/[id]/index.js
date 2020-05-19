import React from 'react'

import Head from 'next/head'

import BaseButton from '../../../components/BaseButton'
import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'

import {
    OpenPositionPageSection,
    OpenPositionPageTitle,
    OpenPositionPageDescription
} from './index.styles'

const title = 'Job title'
const description = 'We are looking for an experienced SEO (Search Engine Optimization) Manager to join our Marketing team! As a SEO Manager you will be responsible for planning, implementing and managing our SEO strategy. As our online presence is extremely important for the success of the business, the SEO Manager will work with all functions of the business and liaise with the tech team and our agencies to drive organic growth globally. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'

function OpenPositionPage ({ t }) {
    return (
        <>
            <Head>
                <title>Job Title</title>
            </Head>
    
            <BaseSectionHeading title={'Work with us'} />

            <BaseSection
                backgroundImage={'/static/images/open-positions-job-title.svg'}
                title={'Job title'}
                subtitle={'Marketing & Sales - Stockholm'}
            />

            <OpenPositionPageSection>
                <OpenPositionPageTitle>{title}</OpenPositionPageTitle>
                <OpenPositionPageDescription>{description}</OpenPositionPageDescription>

                <BaseButton blackStyle>Apply now</BaseButton>
            </OpenPositionPageSection>

            <BaseSection
                backgroundImage={'/static/images/open-positions-join-our-team.svg'}
                title={'Join our team'}
                titleColor={'black'}
                description={'We are always looking for talented people to join our force. Please don’t hesitate to apply to any of our currently open positions within the company.'}
                buttonTitle={'Contact Us'}
                buttonStyle={'blackStyle'}
            />
        </>
    )
}

export default OpenPositionPage