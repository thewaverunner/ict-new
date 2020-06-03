import React from 'react'

import Link from 'next/link'

import { Button } from './BaseButton.styles'

function BaseButton ({ children, hideBorder, mode, withArrow, linkUrl }) {
    function renderButton () {
        return (
            <Button 
                blackStyle={mode} 
                hideBorder={hideBorder}
            >
                {children} {withArrow ? <span/> : ''}
            </Button>
        )
    }
    return (
        <>
            {
                linkUrl
                ? (
                    <Link href={linkUrl ? linkUrl : '/'}>
                        {renderButton()}
                    </Link>
                )
                : renderButton()
            }
        </>
    )
}

export default BaseButton