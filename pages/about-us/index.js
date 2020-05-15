import React from 'react'

import { withTranslation } from '../../i18n'

import {
    AboutWrapper,
    TopBanner,
    TopBannerDescription,
    TopBannerTitle,
    TopBannerContent
} from './index.styles'


function AboutUsPage ({ t }) {
    return (
            <>
                <AboutWrapper>
                    <TopBanner>
                        <TopBannerDescription>
                            <TopBannerTitle>Who we are</TopBannerTitle>

                            <TopBannerContent>
                                This is where remarkable innovation meets rapid pace 
                                fuelled by relentless focus. Our extraordinary drive 
                                comes from our willingness to go that extra mile in everything we do.
                            </TopBannerContent>
                        </TopBannerDescription>    
                    </TopBanner>    
                </AboutWrapper> 
            </>
    )
}

AboutUsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(AboutUsPage)