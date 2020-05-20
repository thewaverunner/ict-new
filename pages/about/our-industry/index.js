import React from 'react'

import Head from 'next/head'

import { withTranslation } from '../../../i18n'

import BaseSection from '../../../components/BaseSection'
import BaseSectionHeading from '../../../components/BaseSectionHeading'
import BaseSectionWide from '../../../components/BaseSectionWide'

import {} from './index.styles'

function OurIndustryPage ({ t }) {
    return (
        <>
            <Head>
                <title>{'Our Industry'}</title>
            </Head>

            <BaseSectionHeading 
                title={'Our Industry'}
                mainPage={false}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageUrl={'/static/images/about-our-industry-direct-selling.svg'}
                title={'Understanding direct selling'}
                subtitle={'Direct selling refers to selling products directly to the consumer in a non-store environment, including at home, at work, online, and other locations. Direct selling often eliminates several middlemen involved in product distribution, such as regional distribution centres and wholesalers. Instead, products go from manufacturer to the direct sales company, the distributor or representative, and then to the consumer. The products sold through direct sales are usually not found in typical retail locations. This means that finding a distributor or representative is the only way to buy the products or services.'}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'dark'}
                reverse={false}
                imageUrl={'/static/images/about-our-industry-multi-marketing.svg'}
                title={'Understanding direct selling'}
                subtitle={'Direct selling refers to selling products directly to the consumer in a non-store environment, including at home, at work, online, and other locations. Direct selling often eliminates several middlemen involved in product distribution, such as regional distribution centres and wholesalers. Instead, products go from manufacturer to the direct sales company, the distributor or representative, and then to the consumer. The products sold through direct sales are usually not found in typical retail locations. This means that finding a distributor or representative is the only way to buy the products or services.'}
            />

            <BaseSectionWide
                mode={'half'}
                themeMode={'light'}
                reverse={true}
                imageUrl={'/static/images/about-our-industry-impact-technology.svg'}
                imageResized={true}
                title={'Impact technology'}
                subtitle={'Impact Technology refers to the intentional use of frontier technology to benefit and promote new sources of employment and accelerate economic diversification, while also addressing major social issues.Impact Crowd Technology aims to leverage innovative technology to decrease the digital divide and drive prosperity through trade in developing countries by giving access to the latest software technologies.'}
            />

            <BaseSectionWide
                mode={'shadow'}
                themeMode={'light'}
                reverse={true}
                imageUrl={'/static/images/about-our-industry-opportunity.svg'}
                title={'A huge opportunity'}
                subtitle={'We seek to provide an opportunity for technological leapfrogging to countries with the right capabilities. We accomplish this by leveraging rapid innovation and technology while ensuring that everyone has equal rights to economic resources and opportunities. As more than 20,000 new apps and software are released daily, 365 days a year, the concept of “free” not only prevents entrepreneurs from succeeding (as the apps drown in the abundance of new tech), but it also prevents developing countries from finding and accessing new content. Impact Crowd Technology, in partnership with Crowd1, intends to distribute other companies’ software through its network, not only in the western world, but especially to developing nations. Customer acquisition costs, in the form of sales commissions (as opposed to advertising), will be allocated to neglected geographical areas and to people who want and need an income.'}
            /> 

            {/* <BaseSectionWide
                backgroundImage={'/static/images/about-our-industry-multi-marketing.svg'}
                backgroundImageMode={'shadow'}
                backgroundImageDirection={'right'}
                title={'Multi-level marketing'}
                description={'Multi-level marketing is a business model where people get a commission from product sales and compensation for sales from people in their downline. Sales depend on the distributors’ ability to share products and business opportunities with others. This is done via direct selling, word-of-mouth marketing, referrals, online marketing, and more. Most MLM companies are well-established, offering quality products that people love. These companies usually have fair compensation plans in place as well as training on how to work the business. The world’s top ten multi-level marketing companies had combined net revenues of USD 40.8 billion in 2018. Companies such as Amway, Avon, Herbalife, Tupperware and Oriflame have proven business models that have been around for decades. The industry supports millions of full- and part-time employees.'}
            />

            <BaseSectionWide
                backgroundImage={'/static/images/about-our-industry-impact-technology.svg'}
                backgroundImageMode={'half'}
                backgroundImageDirection={'right'}
                title={'Impact technology'}
                description={'Impact Technology refers to the intentional use of frontier technology to benefit and promote new sources of employment and accelerate economic diversification, while also addressing major social issues.Impact Crowd Technology aims to leverage innovative technology to decrease the digital divide and drive prosperity through trade in developing countries by giving access to the latest software technologies.'}
            />

            <BaseSection
                backgroundImage={'/static/images/about-our-industry-economy-banner.svg'}
                description={'The taxi industry has Uber and the hotel/apartment rental sector has Airbnb. The ‘crowd economy’ is where millions of people share the benefits of a collective effort, using the power of the internet, human interaction and relationships.'}
                textAlign={'center'}
            />

            <BaseSectionWide
                backgroundImage={'/static/images/about-our-industry-opportunity.svg'}
                backgroundImageMode={'shadow'}
                backgroundImageDirection={'right'}
                title={'A huge opportunity'}
                description={'We seek to provide an opportunity for technological leapfrogging to countries with the right capabilities. We accomplish this by leveraging rapid innovation and technology while ensuring that everyone has equal rights to economic resources and opportunities. As more than 20,000 new apps and software are released daily, 365 days a year, the concept of “free” not only prevents entrepreneurs from succeeding (as the apps drown in the abundance of new tech), but it also prevents developing countries from finding and accessing new content. Impact Crowd Technology, in partnership with Crowd1, intends to distribute other companies’ software through its network, not only in the western world, but especially to developing nations. Customer acquisition costs, in the form of sales commissions (as opposed to advertising), will be allocated to neglected geographical areas and to people who want and need an income.'}
            />   */}
        </>
    )
}

OurIndustryPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(OurIndustryPage)