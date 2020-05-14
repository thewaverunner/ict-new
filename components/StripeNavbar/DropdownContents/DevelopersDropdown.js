import React from 'react'
import styled from 'styled-components'


import { withTranslation } from '../../../i18n'

import {
    Icon,
    DropdownSection,
    Heading,
    HeadingLink,
    LinkList
} from './Components'

const DevelopersDropdownEl = styled.div`
    min-width: 14rem;
`

const Flex = styled.div`
    display: flex;

    > div:first-of-type {
        margin-right: 48px;
    }
`

const DevelopersDropdown = ({ t }) => {
    return (
        <DevelopersDropdownEl>
            <DropdownSection data-first-dropdown-section>
               <ul> 
                <li>
                    <a href="#">{t('BaseFooter_Company_Governance')}</a>
                </li>

                <li>
                    <a href="#">{t('BaseFooter_Company_People')}</a>
                </li>

                <li>
                    <a href="#">{t('BaseFooter_Company_Positions')}</a>
                </li>

                <li>
                    <a href="#">{t('BaseFooter_Company_Pressroom')}</a>
                </li>

                <li>
                    <a href="#">{t('BaseFooter_Company_Contact')}</a>
                </li>
              </ul>                 
            </DropdownSection>
        </DevelopersDropdownEl>
    )
}

export default withTranslation('common')(DevelopersDropdown)
