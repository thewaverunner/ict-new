import React from 'react'

import Link from 'next/link'

import { Button } from './BaseButton.styles'

function BaseButton ({ children, hideBorder, blackStyle }) {
    return (
        <Link href="/">
            <Button blackStyle={blackStyle} hideBorder={hideBorder}>{children}</Button>
        </Link>
    )
}

export default BaseButton