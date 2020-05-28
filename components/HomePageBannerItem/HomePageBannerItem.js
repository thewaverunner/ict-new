import React from 'react'

import BaseButton from '../BaseButton'

import {
    HomePageBanner,
    HomePageBannerContentSection,
    HomePageBannerContentWrapper,
    HomePageBannerContent,
    HomePageBannerImage,
    HomePageBannerContentTitle,
    HomePageBannerContentDescription,
} from './HomePageBannerItem.styles'

function HomePageBannerItem ({ banner }) {
    return (
        <HomePageBanner
            imageReverse={banner.imageReverse}
        >
            <HomePageBannerContentSection>
                <HomePageBannerContentWrapper imageReverse={banner.imageReverse}>
                    <HomePageBannerContent>
                        <HomePageBannerContentTitle>{banner.title}</HomePageBannerContentTitle>
                        <HomePageBannerContentDescription>{banner.description}</HomePageBannerContentDescription>

                        <BaseButton blackStyle>Learn More</BaseButton>
                    </HomePageBannerContent>
                </HomePageBannerContentWrapper>
            </HomePageBannerContentSection>

            <HomePageBannerImage>
                <img src={banner.image} /> 
            </HomePageBannerImage>
        </HomePageBanner>
    )
}

export default HomePageBannerItem