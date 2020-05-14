import React from 'react'
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
                       <a href='#'>{t('BaseFooter_About_ICT')}</a>
                   </li>

                   <li>
                       <a href='#'>{t('BaseFooter_About_Industry')}</a>
                    </li>

                    <li>
                       <a href='#'>{t('BaseFooter_About_Business')}</a>
                    </li>    
                    
                    <li>
                       <a href='#'>{t('BaseFooter_About_FAQ')}</a>
                    </li>
                </ul>    
            </DropdownSection>
        </CompanyDropdownEl>
    )
}

export default withTranslation('common')(CompanyDropdown)
