import React, { Component, Children, createRef } from 'react'
import { Flipped } from 'react-flip-toolkit'

import {
    DropdownRoot,
    Caret,
    DropdownBackground,
    DropdownBackgroundMobile,
    AltBackground,
    InvertedDiv
} from './Components'

import FadeContents from './FadeContents'

const getFirstDropdownSectionHeight = el => {
    if (
        !el ||
        !el.querySelector ||
        !el.querySelector('*[data-first-dropdown-section]')
    ) return 0

    return el.querySelector('*[data-first-dropdown-section]').offsetHeight
}

const updateAltBackground = ({
  altBackground,
  prevDropdown,
  currentDropdown
}) => {
    const prevHeight = getFirstDropdownSectionHeight(prevDropdown)
    const currentHeight = getFirstDropdownSectionHeight(currentDropdown)

    const immediateSetTranslateY = (el, translateY) => {
        el.style.transform = `translateY(${translateY}px)`
        el.style.transition = 'transform 0s'

        requestAnimationFrame(() => (el.style.transitionDuration = ''))
    }

    if (prevHeight) {
        immediateSetTranslateY(altBackground, prevHeight)

        requestAnimationFrame(() => {
            altBackground.style.transform = `translateY(${currentHeight}px)`
        })
    } else {
        immediateSetTranslateY(altBackground, currentHeight)
    }
}

class DropdownContainer extends Component {
    currentDropdownEl = createRef()
    prevDropdownEl = createRef()

    componentDidMount() {
        updateAltBackground({
            altBackground: this.altBackgroundEl,
            prevDropdown: this.prevDropdownEl.current,
            currentDropdown: this.currentDropdownEl.current,
            duration: this.props.duration
        })
    }

    render() {
        const { children, direction, animatingOut, duration } = this.props
        const [currentDropdown, prevDropdown] = Children.toArray(children)

        return (
            <DropdownRoot
                direction={direction}
                animatingOut={animatingOut}
                duration={duration}
            >
                {/* <Flipped flipId='dropdown-caret'>
                    <Caret />
                </Flipped> */}

                <Flipped flipId='dropdown'>
                    <DropdownBackgroundMobile>
                        <Flipped inverseFlipId='dropdown'>
                            <InvertedDiv>
                                <AltBackground
                                    ref={el => (this.altBackgroundEl = el)}
                                    duration={duration}
                                />

                                <FadeContents
                                    direction={direction}
                                    duration={duration}
                                    ref={this.currentDropdownEl}
                                >
                                    {currentDropdown}
                                </FadeContents>
                            </InvertedDiv>
                        </Flipped>

                        <Flipped inverseFlipId='dropdown' scale>
                            <InvertedDiv absolute>
                                {prevDropdown && (
                                <FadeContents
                                    animatingOut
                                    direction={direction}
                                    duration={duration}
                                    ref={this.prevDropdownEl}
                                >
                                    {prevDropdown}
                                </FadeContents>
                                )}
                            </InvertedDiv>
                        </Flipped>
                    </DropdownBackgroundMobile>
                </Flipped>
            </DropdownRoot>
        )
    }
}

export default DropdownContainer
