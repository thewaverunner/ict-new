import * as contentful from 'contentful'

let client = null

function createClient () {
    client = contentful.createClient({
        space: 'ftjkhyqy0t7f',
        accessToken: '-WvajWtFqjgAafrDIZ2Xnak8ltrfQ7OF9bZilMSe5W4',
    })

    return client
}

function getClient () {
    return client
}

export default {
    createClient,
    getClient,
}