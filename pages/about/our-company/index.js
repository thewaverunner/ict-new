import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'
import BaseSectionWide from '../../../components/BaseSectionWide'

import {
    OurMissionSection,
    OurMissionWrapper,
    OurMissionContent,
    OurMissionContentWrapper,
    OurMissionTitle,
    OurMissionImage,
    OurMissionDescription,

    OurGoalsSection,
    OurGoalsWrapper,
    OurGoalsTitle,
    OurGoalsContentWrapper,
    OurGoalsContent,
    OurGoalsDescription,
    OurGoalsSubTitle
} from './index.styles'

function OurCompanyPage ({ t }) {
   
    const ourMission = [
        { description: t('OurCompanyPage_OurMissionFirst_Description') },
        { description: t('OurCompanyPage_OurMissionSecond_Description') },
        { description: t('OurCompanyPage_OurMissionThird_Description') },
        { description: t('OurCompanyPage_OurMissionFourth_Description') },
    ]

    const ourGoals = [
        { 
            title: t('OurCompanyPage_CompanyGoals_Step'),
            description: t('OurCompanyPage_CompanyGoalsFirst_Description')
        },
        { 
            title: t('OurCompanyPage_CompanyGoals_Step'),
            description: t('OurCompanyPage_CompanyGoalsSecond_Description')
        },
        { 
            title: t('OurCompanyPage_CompanyGoals_Step'),
            description: t('OurCompanyPage_CompanyGoalsThird_Description')
        },
        { 
            title: t('OurCompanyPage_CompanyGoals_Step'),
            description: t('OurCompanyPage_CompanyGoalsFourth_Description')
        },
    ]

    return (
        <>
            <Head>
                <title>{t('OurCompanyPage_Head_Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('OurCompanyPage_Title')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                description={t('OurCompanyPage_TopBanner_Description')}
                textAlign={'center'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-company-business-idea.svg'}
                title={t('OurCompanyPage_BusinessIdea_Title')}
                subtitle={t('OurCompanyPage_BusinessIdea_SubTitle')}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-company-sales-product.svg'}
                title={t('OurCompanyPage_SalesProducts_Title')}
                subtitle={t('OurCompanyPage_SalesProducts_SubTitle')}
            />

            <OurMissionSection>
                <OurMissionWrapper>
                    <OurMissionTitle>{t('OurCompanyPage_OurMission_Title')}</OurMissionTitle>
                        <OurMissionContentWrapper>
                        {
                            ourMission.map((mission, index) => (
                                <OurMissionContent key={index}>
                                    <OurMissionImage>
                                        <img src='/static/images/about-our-company-mission-arrow.svg' />
                                    </OurMissionImage>

                                    <OurMissionDescription>{mission.description}</OurMissionDescription>
                                </OurMissionContent>
                            ))
                        }
                        </OurMissionContentWrapper>
                </OurMissionWrapper>
            </OurMissionSection>

            <OurGoalsSection>
                <OurGoalsWrapper>
                    <OurGoalsTitle>{t('OurCompanyPage_CompanyGoals_Title')}</OurGoalsTitle>
                        <OurGoalsContentWrapper>
                            {
                                ourGoals.map((goal, index) => (
                                    <OurGoalsContent key={index}>
                                        <OurGoalsSubTitle>{goal.title} {index + 1}</OurGoalsSubTitle>
                                        <OurGoalsDescription>{goal.description}</OurGoalsDescription>
                                    </OurGoalsContent>
                                ))
                            }
                        </OurGoalsContentWrapper>
                </OurGoalsWrapper>
            </OurGoalsSection>       

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={false}
                imageFull={true}
                imageUrl={'/static/images/about-our-company-our-people.svg'}
                title={t('OurCompanyPage_OurPeople_Title')}
                subtitle={t('OurCompanyPage_OurPeople_Subtitle')}
            />

            <BaseSection
                backgroundImage={'/static/images/about-our-company-legal-environment.svg'}
                title={t('AboutICTPage_LegalEnvironment_Title')}
                description={t('AboutICTPage_LegalEnvironment_Description')}
                buttonTitle={'Learn more'}
            />
        </>
    )
}

OurCompanyPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurCompanyPage)