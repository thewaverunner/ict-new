import React from 'react'

import {
    ElementBaseCard,
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
            <ElementBaseCard>
                <BaseCardImage>
                    <img 
                        src={image} 
                        alt='card-image' 
                    />
                </BaseCardImage>

                <BaseCardDescriptionWrapper>
                    <BaseCardTitleWrapper>
                        <BaseCardTitle href='#'>{title}</BaseCardTitle>

                        <BaseCardArrow>
                            <img 
                                src='/static/images/card-arrow-image.svg' 
                                alt='card-arrow-image' 
                            />
                        </BaseCardArrow>
                    </BaseCardTitleWrapper>

                    <BaseCardDescription>{description}</BaseCardDescription>
                </BaseCardDescriptionWrapper>
            </ElementBaseCard> 
        </>
    )
}

export default BaseCard