import React from 'react'

import BaseButton from '../BaseButton'

import {
    BaseSectionWrapper,
    BaseSectionTitle,
    BaseSectionSubtitle,
    BaseSectionDescription
} from './BaseSection.styles'

function BaseSection (props) {
    const { 
        buttonStyle, 
        backgroundImage, 
        title,
        titleColor,
        subtitle,
        description, 
        buttonTitle, 
        buttonLink 
    } = props

    return (
        <BaseSectionWrapper backgroundImage={backgroundImage}>
            {title && <BaseSectionTitle titleColor={titleColor}>{title}</BaseSectionTitle>}
            {subtitle && <BaseSectionSubtitle>{subtitle}</BaseSectionSubtitle>}
            {description && <BaseSectionDescription>{description}</BaseSectionDescription>}
            {buttonTitle && <BaseButton blackStyle={buttonStyle}>{buttonTitle}</BaseButton>}
        </BaseSectionWrapper>
    )
}

export default BaseSection