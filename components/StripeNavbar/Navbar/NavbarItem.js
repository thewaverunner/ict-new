import React, { Component } from 'react'
import styled from 'styled-components'

const NavbarItemTitle = styled.button`
    background: transparent;
    border: 0;
    font-weight: bold;
    font-family: inherit;
    font-size: 18px;
    padding: 2rem 1.5rem 1.2rem 1.5rem;
    color: white;
    display: flex;
    justify-content: center;
    transition: opacity 250ms;
    cursor: pointer;
    position: relative;
    z-index: 2;

    &:hover, &:focus {
        opacity: 0.7;
        outline:none;
    }
`

const NavbarItemEl = styled.li`
    position: relative;
`

const DropdownSlot = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    perspective: 1500px;
`

export default class NavbarItem extends Component {
    onMouseEnter = () => {
        this.props.onMouseEnter(this.props.index)
    }

    render() {
        const { title, children } = this.props

        return (
            <NavbarItemEl 
                onMouseEnter={this.onMouseEnter} 
                onFocus={this.onMouseEnter}
            >
                <NavbarItemTitle>{title}</NavbarItemTitle>
                <DropdownSlot>{children}</DropdownSlot>
            </NavbarItemEl>
        )
    }
}
