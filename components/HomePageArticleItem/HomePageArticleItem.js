import React from 'react'

import {
    HomePageLatestNewsItem,
    HomePageLatestNewsItemImage,
    HomePageLatestNewsItemDescription,
    HomePageLatestNewsItemReleaseWrapper,
    HomePageLatestNewsItemRelease,
    HomePageLatestNewsItemReleaseData,
    HomePageLatestNewsItemTitle,
} from './HomePageArticleItem.styles'

function HomePageArticleItem ({ article }) {
    return (
        <HomePageLatestNewsItem>
            <HomePageLatestNewsItemImage>
                <img src={article.image} alt='article-image'/>
            </HomePageLatestNewsItemImage>

            <HomePageLatestNewsItemDescription>
                <HomePageLatestNewsItemReleaseWrapper>
                    <HomePageLatestNewsItemRelease>{article.release}</HomePageLatestNewsItemRelease>
                    <HomePageLatestNewsItemReleaseData>{article.data}</HomePageLatestNewsItemReleaseData>
                </HomePageLatestNewsItemReleaseWrapper>

                <HomePageLatestNewsItemTitle>{article.title}</HomePageLatestNewsItemTitle>
            </HomePageLatestNewsItemDescription>
        </HomePageLatestNewsItem> 
    )
}

export default HomePageArticleItem