import React from 'react'

import BaseButton from '../BaseButton'

import {
    OurPeoplePageManagementItem,
    OurPeoplePageManagementItemImage,
    OurPeoplePageManagementItemInfoWrapper,
    OurPeoplePageManagementItemDescription,
    OurPeoplePageManagementItemDescriptionWrapper,
    OurPeoplePageManagementItemName,
    OurPeoplePageManagementItemPosition,
} from './OurPeoplePageMemberItem.styles'

function OurPeoplePageMemberItem ({ member }) {
    return (
        <OurPeoplePageManagementItem>
            <OurPeoplePageManagementItemImage>
                <img src="/static/images/management-image.svg"/>

                <OurPeoplePageManagementItemInfoWrapper>
                    <OurPeoplePageManagementItemName>{member.name}</OurPeoplePageManagementItemName>
                    <OurPeoplePageManagementItemPosition>{member.position}</OurPeoplePageManagementItemPosition>
                </OurPeoplePageManagementItemInfoWrapper>
            </OurPeoplePageManagementItemImage>
        
            <OurPeoplePageManagementItemDescriptionWrapper>
                <OurPeoplePageManagementItemDescription dangerouslySetInnerHTML={{ __html: member.description }}/>

                <BaseButton 
                    withArrow={true}
                    hideBorder
                    blackStyle
                >
                    Read more
                </BaseButton>
            </OurPeoplePageManagementItemDescriptionWrapper>
        </OurPeoplePageManagementItem>
    )
}

export default OurPeoplePageMemberItem