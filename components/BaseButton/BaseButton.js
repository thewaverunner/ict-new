import React from 'react'

import Link from 'next/link'

import { Button } from './BaseButton.styles'

function BaseButton ({ children, hideBorder }) {
    return (
        <Link href="/">
            <Button hideBorder={hideBorder}>{children}</Button>
        </Link>
    )
}

export default BaseButton