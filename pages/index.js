import React from 'react'

import { i18n, withTranslation } from '../i18n'

import BaseNavbar from '../components/BaseNavbar'
import BaseFooter from '../components/BaseFooter'
import BaseButton from '../components/BaseButton'

function Homepage ({ t }) {
    return (
        <>
            <div className="main-container">
                <BaseNavbar />

                <section className="main">
                    <div className="marketing-section">
                        <div className="marketing-section-description">
                            <h1>Multi-level marketing, reinvented</h1>
                            <p>Impact Crowd Technology will, as the first digital multi-level marketing company, address the challenge of long-term sustainability.</p>
                            
                            <BaseButton mode={'dark'}>Learn more</BaseButton>
                        </div>
                    </div>

                    <div className="banner-section">
                        <div className="banner-wrapper">
                            <div className="banner">
                                <div className="banner-image">
                                    <img src="/static/images/first-banner.png"/>
                                </div>  

                                <div className="banner-description">
                                    <h2>Continuous innovation</h2>

                                    <p>
                                        We’re proud of our unstinting commitment to generating 
                                        innovative digital products designed to provide you with new revenue streams. 
                                        We are equally dedicated to seeking out and developing innovations 
                                        that support our network of salespeople.
                                    </p>
                                </div>

                                <div className="banner-link">
                                    <BaseButton hideBorder={true} >Learn more</BaseButton>
                                </div>         
                            </div>

                            <div className="banner">
                                <div className="banner-image">
                                    <img src="/static/images/second-banner.png"/>
                                </div>  

                                <div className="banner-description">
                                    <h2>Purely digital</h2>

                                    <p>
                                        We intend to remain purely digital in our product offering.
                                        We want to deliver impact technology – via our online projects that will disrupt and 
                                        challenge traditional digital industries and software distribution channels.
                                    </p>
                                </div>

                                <div className="banner-link">
                                    <BaseButton hideBorder={true}> Learn more</BaseButton>
                                </div>         
                            </div>

                            <div className="banner">
                                <div className="banner-image">
                                    <img src="/static/images/third-banner.png"/>
                                </div>
    
                                <div className="banner-description">
                                    <h2>Global reach</h2>

                                    <p>
                                        Our priority is to build global frontrunners in multiple industries, 
                                        disrupting monopolised markets by offering a unique and robust value 
                                        proposition on a global scale. The aim of Impact Crowd Technology is to establish online global leaders.
                                    </p>
                                </div>

                                <div className="banner-link">
                                    <BaseButton hideBorder={true}>Learn more</BaseButton>
                                </div>         
                            </div>

                        </div>
                    </div> 

                    <div className="impact-section">
                        <div className="impact-section-description">
                            <h1>Impact Technology</h1>

                            <p>
                                Impact Technology refers to the intentional use of frontier technology to 
                                benefit and promote new sources of employment and accelerate economic 
                                diversification – while simultaneously addressing major social issues.
                            </p>

                            <BaseButton>Learn more</BaseButton>
                        </div>
                    </div>

                    <div className="network-section">
                        <div className="network-section-description">
                            <h1>The network marketing business model has been around for decades. And it works.</h1>
                        
                            <BaseButton>Learn more</BaseButton>
                        </div>
                    </div>

                </section>

                <BaseFooter />
            </div>
        </>
    )
}


Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(Homepage)