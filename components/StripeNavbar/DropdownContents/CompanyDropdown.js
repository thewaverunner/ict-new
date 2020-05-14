import React from 'react'
import styled from 'styled-components'

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

const CompanyDropdown = () => {
    return (
        <CompanyDropdownEl>
            <DropdownSection data-first-dropdown-section>
                <ul>
                   <li>
                        <a href='#'>About ICT</a>
                   </li>

                    <li>
                       <a href='#'>Our Industry</a>
                    </li>

                    <li>
                       <a href='#'>Our Business</a>
                    </li>    
                    
                    <li>
                       <a href='#'>Questinos & Answers</a>
                    </li>
                </ul>    
            </DropdownSection>
        </CompanyDropdownEl>
    )
}

export default CompanyDropdown
