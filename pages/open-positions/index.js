import React from 'react'
import Link from 'next/link'

import { withTranslation } from '../../i18n'

import BaseSection from '../../components/BaseSection'
import BaseSectionHeading from '../../components/BaseSectionHeading'

import {
    OurPositionSection,
    OurPositionSectionWrapper,
    OurPositionSectionTitle,
    OurPositionItem,
    OurPositionItemTitle,
    OurPositionItemContent,
    OurPositionList,
    OurPositionItemLink
} from './index.styles'

function WorkWithUsPage ({ t }) {
    return (
        <>
            <BaseSectionHeading 
                title={'Work with us'}
            ></BaseSectionHeading>

            <OurPositionSection>
                <OurPositionSectionWrapper>
                    <OurPositionSectionTitle>Our open positions</OurPositionSectionTitle>

                    <OurPositionList>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => 
                            <OurPositionItem key={index}>
                                <Link href={`/open-positions/manager-${index}`}>
                                    <OurPositionItemLink>
                                        <OurPositionItemTitle>Job Title {index}</OurPositionItemTitle>
                                        <OurPositionItemContent>Description</OurPositionItemContent>
                                    </OurPositionItemLink>
                                </Link>
                            </OurPositionItem>
                        )}
                    </OurPositionList>
                </OurPositionSectionWrapper>
            </OurPositionSection>    

            <BaseSection
                backgroundImage={'/static/images/work-with-us-banner.svg'}
                title={'Join our team'}
                description={'We are always looking for talented people to join our force. Please don’t hesitate to apply to any of our currently open positions within the company.'}
                buttonTitle={'Contact Us'}
                buttonStyle={'blackStyle'}
            ></BaseSection>
        </>
    )
}

WorkWithUsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(WorkWithUsPage)