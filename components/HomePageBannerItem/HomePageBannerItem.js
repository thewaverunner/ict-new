import React from 'react'

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
        <HomePageBanner imageReverse={banner.imageReverse}>
            <HomePageBannerContentSection>
                <HomePageBannerContentWrapper imageReverse={banner.imageReverse}>
                    <HomePageBannerContent>
                        <HomePageBannerContentTitle>{banner.title}</HomePageBannerContentTitle>
                        <HomePageBannerContentDescription>{banner.description}</HomePageBannerContentDescription>
                    </HomePageBannerContent>
                </HomePageBannerContentWrapper>
            </HomePageBannerContentSection>

            <HomePageBannerImage>
                <img 
                    src={banner.image}
                    alt='banner-image' 
                /> 
            </HomePageBannerImage>
        </HomePageBanner>
    )
}

export default HomePageBannerItem