import React from 'react'
import styled from 'styled-components'

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

const DevelopersDropdown = () => {
    return (
        <DevelopersDropdownEl>
            <DropdownSection data-first-dropdown-section>
               <ul> 
                <li>
                    <a href="#">Corporate Governance</a>
                </li>

                <li>
                    <a href="#">Our People</a>
                </li>

                <li>
                    <a href="#">Our Positions</a>
                </li>

                <li>
                    <a href="#">Pressroom</a>
                </li>

                <li>
                    <a href="#">Contact US</a>
                </li>
              </ul>                 
            </DropdownSection>
        </DevelopersDropdownEl>
    )
}

export default DevelopersDropdown
