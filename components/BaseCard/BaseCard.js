import React from 'react'

import {
    BaseCardElement,
    BaseCardImage,
    BaseCardDescriptionWrapper,
    BaseCardTitleWrapper,
    BaseCardTitle,
    BaseCardArrow,
    BaseCardDescription,
} from './BaseCard.styles'

function BaseCard ({ image, title, description }) {
    return (
        <>
            <BaseCardElement href='#'>
                <BaseCardImage>
                    <img 
                        src={image} 
                        alt="card"
                    />
                </BaseCardImage>

                <BaseCardDescriptionWrapper>
                    <BaseCardTitleWrapper>
                        <BaseCardTitle>{title}</BaseCardTitle>

                        <BaseCardArrow>
                            <img 
                                src="/static/images/card-arrow-image.svg" 
                                alt="card-arrow"
                            />
                        </BaseCardArrow>
                    </BaseCardTitleWrapper>

                    <BaseCardDescription>{description}</BaseCardDescription>
                </BaseCardDescriptionWrapper>
            </BaseCardElement> 
        </>
    )
}

export default BaseCard