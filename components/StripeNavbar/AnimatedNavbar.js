import React, { Component } from 'react'
import { Flipper } from 'react-flip-toolkit'

import Navbar from './Navbar'
import NavbarItem from './Navbar/NavbarItem'
import DropdownContainer from './DropdownContainer'

import AboutICTDropdown from './DropdownContents/AboutICTDropdown'
import CompanyDropdown from './DropdownContents/CompanyDropdown'
import ResponsibilityDropdown from './DropdownContents/ResponsibilityDropdown'
import MobileDropdown from './DropdownContents/MobileDropdown'

const navbarConfig = [
    { title: 'ABOUT US', dropdown: AboutICTDropdown },
    { title: 'RESPONSIBILITY', dropdown: ResponsibilityDropdown },
    { title: 'COMPANY', dropdown: CompanyDropdown },
    { title: 'CONTACT US', dropdown: null },
]

const navbarConfigMobile = [
    { title: null, dropdown: MobileDropdown }
]

export default class AnimatedNavbar extends Component {
    state = {
        activeIndices: []
    }

    resetDropdownState = i => {
        this.setState({
            activeIndices: typeof i === 'number' ? [i] : [],
            animatingOut: false
        })

        delete this.animatingOutTimeout
    }

    onMouseEnter = i => {
        if (this.props.isMobile) return
    
        if (this.animatingOutTimeout) {
            clearTimeout(this.animatingOutTimeout)
        
            this.resetDropdownState(i)
        
            return
        }

        if (this.state.activeIndices[this.state.activeIndices.length - 1] === i) return

        this.setState(prevState => ({
            activeIndices: prevState.activeIndices.concat(i),
            animatingOut: false
        }))
    }

    onOpen = i => {
       
        if (this.animatingOutTimeout) {
            clearTimeout(this.animatingOutTimeout)
        
            this.resetDropdownState(i)
        
            return
        }

        if (this.state.activeIndices[this.state.activeIndices.length - 1] === i) return

        this.setState(prevState => ({
            activeIndices: prevState.activeIndices.concat(i),
            animatingOut: false
        }))
    }

    onMouseLeave = () => {
        this.setState({
            animatingOut: true
        })
    
        this.animatingOutTimeout = setTimeout(this.resetDropdownState, this.props.duration)
    }

    render() {
        const { duration, isMobile, isFixed } = this.props

        let config = navbarConfig

        if (isMobile) config = navbarConfigMobile

        let CurrentDropdown
        let PrevDropdown
        let direction

        const currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1]
        const prevIndex = this.state.activeIndices.length > 1 && this.state.activeIndices[this.state.activeIndices.length - 2]

        if (typeof currentIndex === 'number')
            CurrentDropdown = config[currentIndex].dropdown
        if (typeof prevIndex === 'number') {
            PrevDropdown = config[prevIndex].dropdown

            direction = config > prevIndex ? 'right' : 'left' 
        }

        return (
            <Flipper
                flipKey={currentIndex}
                spring={duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }}
            >
                <Navbar onMouseLeave={this.onMouseLeave}>
                    {config.map((n, index) => {
                        return (
                            <NavbarItem
                                key={n.title}
                                title={n.title}
                                index={index}
                                isMobile={isMobile}
                                isFixed={isFixed}
                                onMouseEnter={this.onMouseEnter}
                                onOpen={this.onOpen}
                            >
                                {
                                    currentIndex === index && CurrentDropdown !== null && (
                                        <DropdownContainer
                                            direction={direction}
                                            animatingOut={this.state.animatingOut}
                                            duration={duration}
                                        >
                                            <CurrentDropdown onClose={this.onMouseLeave} />
                                            
                                            {PrevDropdown && <PrevDropdown />}
                                        </DropdownContainer>
                                    )
                                }
                            </NavbarItem>
                        )
                    })}
                </Navbar>
            </Flipper>
        )
    }
}
