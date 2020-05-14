import React from 'react'

import {
    Footer, 
    FooterWrapper, 
    FooterTopContent, 
    FooterChangeLanguage, 
    FooterLinks, 
    FooterLinksTitle,
    FooterLinksList,
    FooterLinksItem,
    FooterLinksItemLink,
    FooterBottomContent,
    FooterBottomWrapper,
    FooterCopyright,
    FooterBottomPolicyList,
    FooterBottomPolicyItem,
    FooterBottomPolicyItemLink
} from './BaseFooter.styles'

const aboutLinks = [
    { title: 'About ICT', link: '#' },
    { title: 'Our Industry', link: '#' },
    { title: 'Our Business', link: '#' },
    { title: 'Questions & Answers', link: '#' },
]

const responsibilityLinks = [
    { title: 'Our Values', link: '#' },
    { title: 'Our Strategy', link: '#' },
    { title: 'CSR', link: '#' },
    { title: 'Challenges', link: '#' },
]

const companyLinks = [
    { title: 'Corporate Governance', link: '#' },
    { title: 'Our People', link: '#' },
    { title: 'Our Positions', link: '#' },
    { title: 'Pressroom', link: '#' },
    { title: 'Contact US', link: '#' }
]

const footerBottomLinks = [
    { title: 'Terms of Use', link: '#' },
    { title: 'Privacy Policy', link: '#' },
    { title: 'Cookie Policy', link: '#' }
]


function BaseFooter () {
    function renderLinks (title, links) {
        return (
            <FooterLinks>
                <FooterLinksTitle>{title}</FooterLinksTitle>

                <FooterLinksList>
                    {links.map(({ title, link }, index) => (
                        <FooterLinksItem key={index}>
                            <FooterLinksItemLink href={link}>{title}</FooterLinksItemLink>
                        </FooterLinksItem>
                    ))}
                </FooterLinksList>
            </FooterLinks>
        )
    }

    return (
        <Footer>
            <FooterWrapper>
                <FooterTopContent>
                    <FooterChangeLanguage>                 
                        <p>English</p>
                    </FooterChangeLanguage>

                    {renderLinks('About', aboutLinks)}
                    {renderLinks('Responsibility', responsibilityLinks)}
                    {renderLinks('Company', companyLinks)}
                </FooterTopContent>  

                <FooterBottomContent>
                    <FooterBottomWrapper>
                        <FooterCopyright>&copy; Impact Crowd Technology S.L. All Rights Reserved</FooterCopyright> 

                        <FooterBottomPolicyList>
                            {footerBottomLinks.map(({ title, link }, index) => (
                                <FooterBottomPolicyItem key={index}>
                                    <FooterBottomPolicyItemLink href={link}>{title}</FooterBottomPolicyItemLink>
                                </FooterBottomPolicyItem>
                            ))}
                        </FooterBottomPolicyList>    
                    </FooterBottomWrapper> 
                </FooterBottomContent>
            </FooterWrapper>    
        </Footer>     
    )
}

export default BaseFooter