
/**
 * Returns the apiKey argument for API searches.
 * @param {int} index index of the API key to use.
 * @returns string with "?apiKey=[API key]".
 */
export const get_key = (index = 0) => {
    const keys = ["60e0914780694a9789b017e7519fd30e", "ed5efa73e002400393a5034f3327b3c4", "8b93086b35874e698fc2efb972938a5f"]
    return "?apiKey=" + keys[index];
}


/**
 * Searches substitutes for the ingredient id specified. [Private version].
 * @param {int} id ingredient id.
 * @returns 
 */
async function search_substitutes(id: int): Array<Object> {
    try {
        url = 'https://api.spoonacular.com/food/ingredients/' + id + '/substitutes' + get_key();

        const response = await fetch(url);
        const json = await response.json();

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
 * 
 * @param {*} data 
 * @returns 
 */
export const get_similar = async ( data ) => {
    var similar = [];

    try {
        url = 'https://api.spoonacular.com/recipes/' + data.id + '/similar' + get_key() + '&number=3'

        const response = await fetch(url);
        const json = await response.json();

        for (i = 0; i < json.length; i++) {
            const response2 = await fetch("https://api.spoonacular.com/recipes/" + json[i].id + "/information" + get_key())
            const json2 = await response2.json()
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

        const response = await fetch(url);
        const json = await response.json();

        return {
            results: json.results,
            source: url
        }

    } catch (error) {
        console.error(error);
    }

};