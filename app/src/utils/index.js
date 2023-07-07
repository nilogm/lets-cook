
/**
 * Returns the apiKey argument for API searches.
 * @param {int} index index of the API key to use.
 * @returns string with "?apiKey=[API key]".
 */
export const get_key = (index = 0) => {    
    const keys = ["60e0914780694a9789b017e7519fd30e", "ed5efa73e002400393a5034f3327b3c4", "e365b60980d24026979b52053ea8f456"]
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
export const round_ml = (item) => {
    var amount = item.measures.metric.amount;
    if (amount >= 10){
        amount /= 10;
        amount = Math.ceil(amount) * 10;
    }
    return amount
}