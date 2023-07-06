import { ingredient } from "../types";

/**
 * Returns the apiKey argument for API searches.
 * @param {int} index index of the API key to use.
 * @returns string with "?apiKey=[API key]".
 */
export const get_key = (index = 2) => {
    const keys = ["60e0914780694a9789b017e7519fd30e", "ed5efa73e002400393a5034f3327b3c4", "8b93086b35874e698fc2efb972938a5f"]
    return "?apiKey=" + keys[index];
}

/**
 * Builds arguments using default arguments and selected arguments.
 * @param {Object} default_args 
 * @param {Object} args 
 * @returns arguments Object.
 */
export const set_params = (default_args, args) => {
    if (args) {
        Object.keys(default_args).forEach(element => {
            if (args[element] != undefined)
                default_args[element] = args[element];
        });
    }
    return default_args;
}

/**
 * Rounds up milliliters.
 * @param {ingredient} item
 * @returns rounded ml.
 */
export const round_ml = (item : ingredient) => {
    var amount = item.measures.metric.amount;
    if (amount >= 10){
        amount /= 10;
        amount = Math.ceil(amount) * 10;
    }
    return amount
}

/**
 * Capitalizes first letter in name.
 * @param {string} name 
 * @returns first letter capitalized string.
 */
export const get_name = (name : string) => {
    return name[0].toUpperCase() + name.slice(1);
}


/**
 * Returns complete path to API image.
 * @param {string} image 
 * @returns 
 */
export const get_image = (image : string) => {
    return "https://spoonacular.com/cdn/ingredients_100x100/" + image;
}


async function searchSubstitutes(id) {
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


export const makeSearch = async (id) => {
    const result = await searchSubstitutes(id);
    return result;
}