import React from 'react'
import styled from 'styled-components'

import { Icon, DropdownSection, Heading } from './Components'

const ProductsDropdownEl = styled.div`
   min-width: 12rem;
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
        margin-bottom: 1rem;
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

const ProductsSection = styled.ul`
    li {
        padding: 10px 0;
    }
    a {
        text-decoration: none;
        color: #000000;
        font-size: 14px;
        font-family: 'DM Sans Bold';
    }
    a:hover {
        color: #a3a3a4;
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

const ProductsDropdown = () => {
    return (
        <ProductsDropdownEl>
            <DropdownSection data-first-dropdown-section>
                <ProductsSection> 
                   <ul> 
                        <li>
                            <a href="#">Our Values</a>
                        </li>

                        <li>
                            <a href="#">Our Strategy</a>
                        </li>

                        <li>
                            <a href="#">CSR</a>
                        </li>

                        <li>
                            <a href="#">Challenges</a>
                        </li>
                   </ul> 
                </ProductsSection>
            </DropdownSection>
        </ProductsDropdownEl>
    )
}

export default ProductsDropdown
