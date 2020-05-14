import React, { Component } from 'react'
import styled from 'styled-components'

const NavbarEl = styled.nav`
    margin: auto;
`

const NavbarList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    background-color: transparent;

    li {
        font-size: 14px;
        font-family: 'DM Sans Bold';
    }
`

class Navbar extends Component {
    render() {
        const { children, onMouseLeave, onClose } = this.props

        return (
            <NavbarEl onMouseLeave={onMouseLeave} onClick={onClose}>
                <NavbarList>{children}</NavbarList>
            </NavbarEl>
        )
    }
}

export default Navbar
