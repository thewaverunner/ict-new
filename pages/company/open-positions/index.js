import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Head from 'next/head'

import Dropdown from 'react-dropdown'

import { withTranslation } from '../../../i18n'

import BaseCard from '../../../components/BaseCard'
import OpenPositionsPagePositionItem from '../../../components/OpenPositionsPagePositionItem'

import { AXIOS_CONFIG } from '../../../utils/constants'

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
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get("https://api.teamtailor.com/v1/jobs", AXIOS_CONFIG)
            .then(response => {
                const jobs = response.data.data
                setJobs(jobs)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

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
                        {jobs.map((job, index) => (
                            <OpenPositionsPagePositionItem 
                                key={index} 
                                position={job} 
                            />
                        ))}
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