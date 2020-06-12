import React, { Component } from 'react'

import styled from 'styled-components'

import { 
    BREAKPOINTS,
    FONTS,
    COLORS 
} from '../../../utils/constants'

const NavbarItemTitle = styled.button`
    background: transparent;
    border: 0;
    font-family: "DM Sans Bold";
    line-height: 44px;
    display: flex;
    justify-content: center;
    transition: opacity 0.3s;
    cursor: pointer;
    position: relative;
    z-index: 2;

    color: ${props => props.isFixed ? COLORS.white : '#1d1d1f'};
    
    font-size: ${FONTS.p}px;

    &:last-child {
        padding: 1px 0 1px 6px;
    }

    &:hover, &:focus {
        opacity: 0.5;
        outline: none;
    }

    @media screen and (max-width: ${BREAKPOINTS.lg}px) {
        // padding: 0 1.5rem 1.2rem 0;
    }
`

// const NavbarItemTitle = styled.button`
//     background: transparent;
//     border: 0;

//     font-family: "DM Sans Bold";
//     font-size: ${FONTS.p}px;
//     line-height: 44px;

//     color: #ffffff;

//     display: flex;
//     justify-content: center;

//     transition: opacity 0.3s;
//     cursor: pointer;
//     position: relative;
//     z-index: 2;

//     &:hover, &:focus {
//         opacity: 0.5;
//         outline: none;
//     }

//     @media screen and (max-width: ${BREAKPOINTS.lg}px) {
//         padding: 0 1.5rem 1.2rem 0;
//     }
// `

const NavbarItemTitleMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40px;
    height: 25px;
    align-self: center;
    background-color: white;
    z-index: 1;
    position: relative;
}

span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #000;
    border-radius: 3px;
    transition: transform 0.3s ease;
}

span:last-child {
    width: 65%;
    align-self: flex-end;
    margin-bottom: 0;
}
`

const NavbarItemEl = styled.li`
    position: relative;
    padding-left: 35px;
`

const DropdownSlot = styled.div`
   position: absolute;
   left: 50%;
   z-index: 10;
   transform: translateX(-50%);
   perspective: 1500px;
`

const DropdownSlotMobile = styled.div`
    position: fixed;
    top: 15px;
    left: 2%;
    z-index: 10;
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
        const { title, children, isMobile, isFixed } = this.props

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
                        <NavbarItemTitle isFixed={isFixed}>{title}</NavbarItemTitle>
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
