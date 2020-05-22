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
        { description: t('About-OurCompanyPage-OurMissionFirst-Description') },
        { description: t('About-OurCompanyPage-OurMissionSecond-Description') },
        { description: t('About-OurCompanyPage-OurMissionThird-Description') },
        { description: t('About-OurCompanyPage-OurMissionFourth-Description') },
    ]

    const ourGoals = [
        { 
            title: t('About-OurCompanyPage-CompanyGoals-Step'),
            description: t('About-OurCompanyPage-CompanyGoalsFirst-Description')
        },
        { 
            title: t('About-OurCompanyPage-CompanyGoals-Step'),
            description: t('About-OurCompanyPage-CompanyGoalsSecond-Description')
        },
        { 
            title: t('About-OurCompanyPage-CompanyGoals-Step'),
            description: t('About-OurCompanyPage-CompanyGoalsThird-Description')
        },
        { 
            title: t('About-OurCompanyPage-CompanyGoals-Step'),
            description: t('About-OurCompanyPage-CompanyGoalsFourth-Description')
        },
    ]

    return (
        <>
            <Head>
                <title>{t('About-OurCompanyPage-Title')}</title>
            </Head>

            <BaseSectionHeading 
                title={t('About-OurCompanyPage-Title')}
                mainPage={false}
            />

            <BaseSection
                backgroundImage={'/static/images/about-top-banner.svg'}
                description={t('About-OurCompanyPage-TopBanner-Description')}
                textAlign={'center'}
                titleColor={'black'}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageFull={true}
                imageUrl={'/static/images/about-our-company-business-idea.svg'}
                title={t('About-OurCompanyPage-BusinessIdea-Title')}
                subtitle={t('About-OurCompanyPage-BusinessIdea-SubTitle')}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-company-sales-product.svg'}
                title={t('About-OurCompanyPage-SalesProducts-Title')}
                subtitle={t('About-OurCompanyPage-SalesProducts-SubTitle')}
            />

            <OurMissionSection>
                <OurMissionWrapper>
                    <OurMissionTitle>{t('About-OurCompanyPage-OurMission-Title')}</OurMissionTitle>
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
                    <OurGoalsTitle>{t('About-OurCompanyPage-CompanyGoals-Title')}</OurGoalsTitle>
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
                title={t('About-OurCompanyPage-OurPeople-Title')}
                subtitle={t('About-OurCompanyPage-OurPeople-Subtitle')}
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