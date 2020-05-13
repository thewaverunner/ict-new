import React from 'react'

import { i18n, withTranslation } from '../i18n'

function Homepage ({ t }) {
    return (
        <>
            <div className="main-container">
                <header className="header">
                    <div className="header-container">
                        <div className="header-navigation-wrapper">
                            <div className="header-logo">
                                <img src="/static/images/main-logo.png" alt="main logo"/>
                            </div>

                            <nav className="header-navigation">
                                <a href="#" className="header-navigation-link">responsibility</a>
                                <a href="#" className="header-navigation-link">company</a>
                                <a href="#" className="header-navigation-link">contact us</a>
                            </nav>
                        </div>  

                        <div className="header-description">
                            <h1>Striving for digital equality</h1>
                            <p>We want to create the world’s largest functioning sales force, disrupting the traditional value chain and distribution of apps, software and services.</p>
                            <a href="#">Learn more</a>    
                        </div>  
                    </div>       
                </header>  

                <section className="main">
                    <div className="marketing-section">
                        <div className="marketing-section-description">
                            <h1>Multi-level marketing, reinvented</h1>
                            <p>Impact Crowd Technology will, as the first digital multi-level marketing company, address the challenge of long-term sustainability.</p>
                            <a href="#">Learn more</a>  
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
                                    <a href="#">Learn more</a>
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
                                    <a href="#">Learn more</a>
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
                                    <a href="#">Learn more</a>
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

                            <a href="#">Learn more</a>  
                        </div>
                    </div>

                    <div className="network-section">
                        <div className="network-section-description">
                            <h1>The network marketing business model has been around for decades. And it works.</h1>
                            <a href="#">Learn more</a>  
                        </div>
                    </div>

                </section>
                <footer>
                    <div className="footer-wrapper">
                        <div className="footer-top-content">
                            <div className="footer-change-language">
                                <p>English</p>
                            </div>

                            <div className="footer-links">
                                <ul>
                                    <li>About</li>
                                    <li><a href="#">About ICT</a></li>
                                    <li><a href="#">Our Industry</a></li>
                                    <li><a href="#">Our Business</a></li>
                                    <li><a href="#">Questions & Answers</a></li>
                                </ul>
                            </div>

                            <div className="footer-links">          
                                <ul>
                                    <li>Responsibility</li>
                                    <li><a href="#">Our Values</a></li>
                                    <li><a href="#">Our Strategy</a></li>
                                    <li><a href="#">CSR</a></li>
                                    <li><a href="#">Challenges</a></li>
                                </ul>
                            </div> 

                            <div className="footer-links">
                                <ul>
                                    <li>Company</li>
                                    <li><a href="#">Corporate Governance</a></li>
                                    <li><a href="#">Our People</a></li>
                                    <li><a href="#">Our Posiyions</a></li>
                                    <li><a href="#">Pressroom</a></li>
                                    <li><a href="#">Contact US</a></li>
                                </ul>
                            </div>
                        </div>  

                        <div className="footer-bottom-content">
                            <div className="footer-bottom-wpapper">
                                <div className="footer-copyright">
                                    <p>	&copy; Impact Crowd Technology S.L. All Rights Reserved</p>
                                </div> 

                                <div className="footer-bottom-policy">
                                    <ul>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Cookie Policy</a></li>
                                    </ul>    
                                </div>
                            </div> 
                        </div>
                    </div>    
                </footer>     
            </div>
        </>
    )
}


Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation('common')(Homepage)