import React, { Component } from 'react'
import styled from 'styled-components'

const NavbarItemTitle = styled.button`
    background: transparent;
    border: 0;
    font-weight: bold;
    font-family: inherit;
    font-size: 14px;
    padding: 1rem 1.5rem 1.2rem 1.5rem;
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

const NavbarItemTitleMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 30px;
    align-self: center;
    background-color: white;
    z-index: 1;
    position: relative;
}

span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #000;
    border-radius: 3px;
    transition: transform 0.3s ease;
}

span:last-child {
    width: 75%;
    align-self: flex-end;
    margin-bottom: 0;
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

const DropdownSlotMobile = styled.div`
    position: fixed;
    top: 15px;
    left: 2%;
    z-index: 1;
    width: 96%;
    perspective: 1500px;
`

export default class NavbarItem extends Component {
    onMouseEnter = () => {
        this.props.onMouseEnter(this.props.index)
    }

    onOpen = () => {
        this.props.onOpen(this.props.index)
    }

    render() {
        const { title, children, isMobile } = this.props

        return (
            <NavbarItemEl 
                onMouseEnter={this.onMouseEnter} 
                onFocus={this.onMouseEnter}
            >
                {
                    isMobile
                    ? (
                        <NavbarItemTitleMobile onClick={this.onOpen}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </NavbarItemTitleMobile>
                    )
                    : (
                        <NavbarItemTitle>{title}</NavbarItemTitle>
                    )
                }

                {
                    isMobile
                    ? (
                        <DropdownSlotMobile>{children}</DropdownSlotMobile>
                    )
                    : (
                        <DropdownSlot>{children}</DropdownSlot>
                    )
                }
            </NavbarItemEl>
        )
    }
}
