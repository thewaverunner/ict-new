import React from 'react'
import styled from 'styled-components'

import { Icon, DropdownSectionMobile, Heading } from './Components'

const ProductsDropdownEl = styled.div`
    width: 100%;
`

const Logo = styled.div`
    width: 38px;
    height: 38px;
    margin-right: 16px;
    border-radius: 100%;
    opacity: 0.6;
    background-color: ${({ color }) => `var(--${color})`};
`

const SubProductsList = styled.ul`
    li {
        display: flex;
    }

    h3 {
        margin-right: 1rem;
        width: 3.2rem;
        display: block;
    }

    a {
        color: var(--dark-grey);
    }
`

const SubProductsListMobile = styled.div`
        display: flex;
        padding: 15px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h3 {
        display: block;
        font-size: 16px;
        font-family: 'DM Sans Bold';
        margin-bottom: 10px;
    }

    a {
        background-color: transparent;
        border: 1px solid #000000;
        text-decoration: none;
        border-radius: 6px;
        padding: 10px 25px;
        font-size: 14px;
        color: #000000;
        font-family: 'DM Sans Regular';
    }
    
    a:hover {
        background-color: #000000;
        color: #ffffff;
    }
`

const ProductsSection = styled.ul`
    li {
        display: flex;
    }
`

const WorksWithStripe = styled.div`
        border-top: 2px solid #fff;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: var(--spacer);
        padding-top: var(--spacer);
    }
    
    h3 {
        margin-bottom: 0;
    }
`

const MobileDropdown = ({ onClose }) => {
    return (
        <ProductsDropdownEl>
            <DropdownSectionMobile data-first-dropdown-section>
                <div className="close-icon" onClick={onClose}>
                    <span></span>
                    <span></span>
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
            </DropdownSectionMobile>
            
            <SubProductsListMobile>
                    <h3>Are you our next partner?</h3>
                    <a hfer="#">Contact Us</a>
            </SubProductsListMobile>
        </ProductsDropdownEl>
    )
}

export default MobileDropdown
