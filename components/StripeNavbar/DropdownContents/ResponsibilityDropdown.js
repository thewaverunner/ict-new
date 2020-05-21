import React from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import { withTranslation } from '../../../i18n'

import { DropdownSection } from './Components'

const ResponsibilityDropdownSection = styled.div`
   min-width: 12rem;
`

const ResponsibilityDropdown = ({ t }) => {
    return (
        <ResponsibilityDropdownSection>
            <DropdownSection data-first-dropdown-section>
                <ul> 
                    <li>
                        <Link href="/">
                            <a>{t('BaseFooter_Responsibility_Values')}</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>{t('BaseFooter_Responsibility_Strategy')}</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>{t('BaseFooter_Responsibility_CSR')}</a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/">
                            <a>{t('BaseFooter_Responsibility_Challenges')}</a>
                        </Link>
                    </li>
                </ul> 
            </DropdownSection>
        </ResponsibilityDropdownSection>
    )
}

export default withTranslation('common')(ResponsibilityDropdown)
