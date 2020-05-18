import React from 'react'

import {
    BaseSectionHeadingWrapper,
    BaseSectionTitle,
    BaseSectionHeadingContent
} from './BaseSectionHeading.styles'

function BaseSectionHeading (props) {
    const { title } = props

    return (
        <BaseSectionHeadingWrapper>
            <BaseSectionHeadingContent>
                <BaseSectionTitle>{title}</BaseSectionTitle>
            </BaseSectionHeadingContent>    
        </BaseSectionHeadingWrapper>
    )
}

export default BaseSectionHeading