import React from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import { withTranslation } from '../../../i18n'

import { DropdownSection } from './Components'

const AboutICTDropdownSection = styled.div`
    min-width: 14rem;
`

const AboutICTDropdown = ({ t }) => {
    return (
        <AboutICTDropdownSection>
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
                        <Link href="/">
                            <a>{t('BaseFooter_About_FAQ')}</a>
                       </Link>
                    </li>
                </ul>    
            </DropdownSection>
        </AboutICTDropdownSection>
    )
}

export default withTranslation('common')(AboutICTDropdown)
