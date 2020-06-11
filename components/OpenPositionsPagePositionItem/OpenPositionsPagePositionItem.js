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
            <Link href={`/company/open-positions/` + position.id}>
                <OpenPositionsPageItemLink>
                    <OpenPositionsPageItemTitle dangerouslySetInnerHTML={{ __html: position.attributes.title }} />
                    <OpenPositionsPageItemContent dangerouslySetInnerHTML={{ __html: position.id }}></OpenPositionsPageItemContent>
                </OpenPositionsPageItemLink>
            </Link>
        </OpenPositionsPageItem>
    )
}

export default OpenPositionsPagePositionItem