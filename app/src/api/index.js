
var current_key = 0;
const keys = ["60e0914780694a9789b017e7519fd30e", "ed5efa73e002400393a5034f3327b3c4", "8b93086b35874e698fc2efb972938a5f", "66228dc61713457e87b43cca2818f18e"]
const amount_keys = keys.length


/**
 * Fetches data from tha API. Changes key if remaining tokens are low.
 * @param {string} url 
 * @returns json with results.
 */
const getResponse = async (url) => {
    const response = await fetch(url);
    
    if (response.headers.map["x-api-quota-left"] < 3){
        current_key += 1;
        current_key %= amount_keys;
    }

    const json = await response.json();
    return json;
}


/**
 * Returns the apiKey argument for API searches.
 * @returns string with "?apiKey=[API key]".
 */
export const get_key = () => {
    return "?apiKey=" + keys[current_key];
}


/**
 * Searches substitutes for the ingredient id specified. [Private version].
 * @param {int} id ingredient id.
 * @returns 
 */
async function search_substitutes(id: int): Array<Object> {
    try {
        url = 'https://api.spoonacular.com/food/ingredients/' + id + '/substitutes' + get_key();
        const json = await getResponse(url);
        return json;

    } catch (error) {
        console.error(error);
    }

    return null;
}


/**
 * Searches substitutes for the ingredient id specified.
 * @param {int} id ingredient id.
 * @returns 
 */
export const make_search = async (id: int) => {
    const result = await search_substitutes(id);
    return result;
}


/**
 * Searches for similar recipes based on the recipe's id.
 * @param {recipe} data 
 * @returns 
 */
export const get_similar = async (data) => {
    var similar = [];

    try {
        url = 'https://api.spoonacular.com/recipes/' + data.id + '/similar' + get_key() + '&number=3'
        const json = await getResponse(url);

        for (i = 0; i < json.length; i++) {
            var similarUrl = "https://api.spoonacular.com/recipes/" + json[i].id + "/information" + get_key();
            var json2 = await getResponse(similarUrl);
            similar.push(json2)
        }

        return {
            recipe: data,
            similarRecipes: similar
        }

    } catch (error) {
        console.error(error)
    }
}


/**
 * Searches for recipes with the given fiters.
 * @param {string} ingredients_search 
 * @param {string} macros_search 
 * @param {string} diets_search 
 * @returns 
 */
export const get_recipes = async (ingredients_search, macros_search, diets_search) => {
    try {
        const numberofRecipes = 7;
        const url = 'https://api.spoonacular.com/recipes/complexSearch' + get_key() + '&addRecipeInformation=true&includeIngredients='
            + ingredients_search + '&' + macros_search + '&number=' + numberofRecipes + "&fillIngredients=true&diet=" + diets_search
        const json = await getResponse(url);

        return {
            results: json.results,
            source: url
        }

    } catch (error) {
        console.error(error);
    }
};

/**
 * Returns matches for ingredient autocomplete search.
 * @param {string} search search string.
 */
export const search_item = async (search: string) => {
    try {
        const url = 'https://api.spoonacular.com/food/ingredients/autocomplete' + get_key() + '&query=' + search + '&number=5'
        const json = await getResponse(url);
        return json

    } catch (error) {
        console.error(error);
    }
}


/**
 * Loads more recipes with the original filters' url.
 * @param {string} url original search url.
 * @param {Array<Object>} results list of recipe results.
 * @param {int} offset load offset.
 */
export const get_more_recipes = async (url: string, results: Array<Object>, offset : int) => {
    try {
        url += "&offset=" + offset;
        const json = await getResponse(url);

        const moreResults = json.results
        for (i = 0; i < moreResults.length; i++)
            results.push(moreResults[i])

        return results

    } catch (error) {
        console.error(error);
        
    }
    return null
};