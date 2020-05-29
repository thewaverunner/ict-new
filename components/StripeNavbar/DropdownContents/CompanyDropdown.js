import React from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import { withTranslation } from '../../../i18n'

import { DropdownSection } from './Components'

const CompanyDropdownSection = styled.div`
    min-width: 14rem;
`

const CompanyDropdown = ({ t }) => {
    return (
        <CompanyDropdownSection>
            <DropdownSection data-first-dropdown-section>
                <ul> 
                    <li>
                        <Link href="/company/corporate-governance">
                            <a>{t('BaseFooter_Company_Governance')}</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/company/our-people">
                            <a>{t('BaseFooter_Company_People')}</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/company/open-positions">
                            <a>{t('BaseFooter_Company_Positions')}</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/company/pressroom">
                            <a>{t('BaseFooter_Company_Pressroom')}</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact-us">
                            <a>{t('BaseFooter_Company_Contact')}</a>
                        </Link>
                    </li>
                </ul>                 
            </DropdownSection>
        </CompanyDropdownSection>
    )
}

export default withTranslation('common')(CompanyDropdown)
