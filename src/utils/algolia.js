import algoliasearch from "algoliasearch"

export async function loadCategories() {
    /* Dynamically import JSON with all categories used in the entire database */
    // https://www.algolia.com/doc/api-reference/api-methods/search/
    const client = algoliasearch('S27OT8U78J', '6c71ae31ec984a2185234a501482d57a') // API Key to SEARCH
    const index = client.initIndex('firmy')
    const rawCategories = await index.search('', {
        attributesToRetrieve: ['vyrobny.kategorie0', 'vyrobny.kategorie1', 'vyrobny.kategorie2'],
        hitsPerPage: 10000,
    })
    return processCategories(rawCategories)
}

function processCategories(rawCategories) {
    const allCategories = []
    // For every Result
    rawCategories.hits.forEach(result => {
        // For every Factory in that result
        result.vyrobny.forEach(factory => {
            // For every category with lvl 0 (if exists)
            if (factory.kategorie0 != null){
                allCategories.push(...factory.kategorie0)
            }
            // For every category with lvl 1 (if exists)
            if (factory.kategorie1 != null){
                allCategories.push(...factory.kategorie1)
            }
            // For every category with lvl 2 (if exists)
            if (factory.kategorie2 != null){
                allCategories.push(...factory.kategorie2)
            }
        })
    })
    // Create array of unique categories
    // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    return [...new Set(allCategories)]
}
