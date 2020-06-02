import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseButton from '../../../components/BaseButton'

import {
    LifeAtICTPageTopSection,
    LifeAtICTPageTopSectionTitle,
    LifeAtICTPageTopSectionDescription
} from './index.styles'

function LifeAtICTPage ({ t }) {
    return (
        <>
            <Head>
                <title>ICT | Life At ICT</title>
            </Head>

            <LifeAtICTPageTopSection>
                <LifeAtICTPageTopSectionTitle>A culture built for innovators</LifeAtICTPageTopSectionTitle>
                <LifeAtICTPageTopSectionDescription>
                    ICT meets the strictest demands on compliance, 
                    transparency, as well as legal requirements, including 
                    tax laws and the relevant regulations.
                </LifeAtICTPageTopSectionDescription>

                <BaseButton blackStyle>View Open Positions</BaseButton>
            </LifeAtICTPageTopSection>
        </>
    )
}

LifeAtICTPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(LifeAtICTPage)