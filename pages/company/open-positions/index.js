import React from 'react'

import Head from 'next/head'

import Dropdown from 'react-dropdown'

import { withTranslation } from '../../../i18n'

import BaseCard from '../../../components/BaseCard'
import OpenPositionsPagePositionItem from '../../../components/OpenPositionsPagePositionItem'

import {
    OpenPositionsPageList,
    OpenPositionsPageListWrapper,
    OpenPositionsPageWrapper,
    OpenPositionsPageTopSection,
    OpenPositionsPageTopSectionTitle,
    OpenPositionsPageTopSectionDescription,
    OpenPositionsPageFilter,
    ContactUsPageCardsSection,
} from './index.styles'

function OpenPositionsPage ({ t }) {
    const locations = [
        'All locations',
        'Western district',
        'South district',
    ]

    const departments = [
        'All departments',
        'Marketing department',
        'Managers department',
    ]

    const contactUsCard = [
        {
            image: '/static/images/press-card-image.svg',
            title: t('CompanyCard_First_Title'),
            description: t('CompanyCard_First_Description'),
        },
        {
            image: '/static/images/mediakit-card-image.svg',
            title: t('CompanyCard_Second_Title'),
            description: t('CompanyCard_Second_Description'),
        },
    ]

    return (
        <>
            <Head>
                <title>{t('OpenPositionsPage_Head_Title')}</title>
            </Head>

            <OpenPositionsPageTopSection>
                <OpenPositionsPageTopSectionTitle>{t('OpenPositionsPage_TopSection_Title')}</OpenPositionsPageTopSectionTitle>
                <OpenPositionsPageTopSectionDescription>{t('OpenPositionsPage_TopSection_Description')}</OpenPositionsPageTopSectionDescription>
            </OpenPositionsPageTopSection>

            <ContactUsPageCardsSection>
                {contactUsCard.map((card, index) => (
                    <BaseCard 
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}                    
            </ContactUsPageCardsSection>

            <OpenPositionsPageWrapper>
                <OpenPositionsPageFilter>
                    <Dropdown
                        options={locations}
                        value={locations[0]}
                        className={'filterLocationDropdown'}
                        menuClassName={'filterLocationDropdownMenu'}
                        arrowClassName={'filterArrow'}
                    />

                    <Dropdown
                        options={departments}
                        value={departments[0]}
                        className={'filterDepartmentDropdown'}
                        menuClassName={'filterDepartmentDropdownMenu'}
                        arrowClassName={'filterArrow'}
                    />  
                </OpenPositionsPageFilter>           

                <OpenPositionsPageListWrapper>        
                    <OpenPositionsPageList>
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((_, index) => <OpenPositionsPagePositionItem key={index} position={_} />)}
                    </OpenPositionsPageList>
                </OpenPositionsPageListWrapper>    
            </OpenPositionsPageWrapper>
        </>
    )
}

OpenPositionsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OpenPositionsPage)