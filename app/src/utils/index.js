import { ingredient } from "../types";

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