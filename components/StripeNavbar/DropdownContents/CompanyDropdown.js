import React from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import { withTranslation } from '../../../i18n'

import {
    Heading,
    HeadingLink,
    LinkList,
    DropdownSection,
    Icon
} from './Components'

const CompanyDropdownEl = styled.div`
    min-width: 14rem;
`

const CompanyDropdown = ({ t }) => {
    return (
        <CompanyDropdownEl>
            <DropdownSection data-first-dropdown-section>
                <ul>
                   <li>
                       <Link href="/about/about-ict">
                            <a>{t('BaseFooter_About_ICT')}</a>
                       </Link>
                   </li>

                   <li>
                       <Link href="/about/our-industry">
                            <a>{t('BaseFooter_About_Industry')}</a>
                       </Link>
                    </li>

                    <li>
                        <Link href="/about/our-business">
                            <a>{t('BaseFooter_About_Business')}</a>
                        </Link>
                    </li>    
                    
                    <li>
                        <Link href="/about/our-industry">
                            <a>{t('BaseFooter_About_FAQ')}</a>
                       </Link>
                    </li>
                </ul>    
            </DropdownSection>
        </CompanyDropdownEl>
    )
}

export default withTranslation('common')(CompanyDropdown)
