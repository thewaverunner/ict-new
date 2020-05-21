import React from 'react'

import BaseButton from '../BaseButton'

import {
    BaseSectionHeadingWrapper,
    BaseSectionTitle,
    BaseSectionHeadingContent,
    BaseSectionDescription
} from './BaseSectionHeading.styles'

function BaseSectionHeading (props) {
    const { title, description, mainPage} = props

    return (
        <BaseSectionHeadingWrapper mainPage={mainPage}>
            <BaseSectionHeadingContent>
                <BaseSectionTitle mainPage={mainPage}>{title}</BaseSectionTitle>

                {description && <BaseSectionDescription>{description}</BaseSectionDescription>}  
                {description && <BaseButton>Learn more <span /></BaseButton>}   
            </BaseSectionHeadingContent>    
        </BaseSectionHeadingWrapper>
    )
}

export default BaseSectionHeading