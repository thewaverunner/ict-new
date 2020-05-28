import React from 'react'

import Link from 'next/link'

import {
    OpenPositionsPageItem,
    OpenPositionsPageItemLink,
    OpenPositionsPageItemTitle,
    OpenPositionsPageItemContent,
} from './OpenPositionsPagePositionItem.styles'

function OpenPositionsPagePositionItem ({ position }) {
    return (
        <OpenPositionsPageItem>
            <Link href={`/company/open-positions/manager`}>
                <OpenPositionsPageItemLink>
                    <OpenPositionsPageItemTitle>Job Title</OpenPositionsPageItemTitle>
                    <OpenPositionsPageItemContent>Description</OpenPositionsPageItemContent>
                </OpenPositionsPageItemLink>
            </Link>
        </OpenPositionsPageItem>
    )
}

export default OpenPositionsPagePositionItem