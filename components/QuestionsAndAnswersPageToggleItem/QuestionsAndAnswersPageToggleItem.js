import React, { useState } from 'react'

import OpenIcon from '../../public/static/images/about-question-open-icon.svg'
import CloseIcon from '../../public/static/images/about-question-close-icon.svg'

import {
    QuestionsAndAnswersPageQuestionItem,
    QuestionsAndAnswersPageQuestionItemTitleWrapper,
    QuestionsAndAnswersPageQuestionItemTitle,
    QuestionsAndAnswersPageQuestionItemDescription,
    QuestionsAndAnswersPageQuestionIcon,
} from './QuestionsAndAnswersPageToggleItem.styles'

function QuestionsAndAnswersPageToggleItem ({ topic, defaultValue = false }) {
    const [toggled, setToggled] = useState(defaultValue)

    return (
        <QuestionsAndAnswersPageQuestionItem>
            <QuestionsAndAnswersPageQuestionItemTitleWrapper onClick={() => setToggled(!toggled)}>
                <QuestionsAndAnswersPageQuestionItemTitle>{topic.title}</QuestionsAndAnswersPageQuestionItemTitle>
                
                <QuestionsAndAnswersPageQuestionIcon>
                    {toggled ? <CloseIcon style={{ marginRight: 2 }} /> : <OpenIcon />}
                </QuestionsAndAnswersPageQuestionIcon>
            </QuestionsAndAnswersPageQuestionItemTitleWrapper>

            {toggled && <QuestionsAndAnswersPageQuestionItemDescription>{topic.description}</QuestionsAndAnswersPageQuestionItemDescription>}
        </QuestionsAndAnswersPageQuestionItem>
    )
}

export default QuestionsAndAnswersPageToggleItem