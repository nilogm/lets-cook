import { ingredient } from "../types";
import { Text } from "react-native";

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
export const round_ml = (item: ingredient) => {
    var amount = item.measures.metric.amount;
    if (amount >= 10) {
        amount /= 10;
        amount = Math.ceil(amount) * 10;
    }
    else if (amount < 1) {
        amount /= 100;
        amount = Math.ceil(amount) * 100;
    }
    return amount
}

/**
 * Capitalizes first letter in name.
 * @param {string} name 
 * @returns first letter capitalized string.
 */
export const get_name = (name: string) => {
    return name[0].toUpperCase() + name.slice(1);
}


/**
 * Returns complete path to API image.
 * @param {string} image 
 * @returns 
 */
export const get_image = (image: string) => {
    return "https://spoonacular.com/cdn/ingredients_100x100/" + image;
}


/**
 * Formats summary to a single Text component with highlighted texts.
 * @returns Text component list
 */
export const format_summary = (summary) => {
    var info = []

    var firstSplit = summary.split("<a")[0]
    var lastDot = -1
    var lastlastDot = -1
    var lastlastlastDot = -1
    for (i = 0; i < firstSplit.length; i++) {
        if (firstSplit[i] == ".") {
            lastlastlastDot = lastlastDot
            lastlastDot = lastDot
            lastDot = i
        }
    }
    summary = firstSplit.substring(0, lastlastlastDot + 1)

    var focus = false;
    var splitted = summary.split("<b>")
    for (i = 0; i < splitted.length; i++) {
        var splitted2 = splitted[i].split("</b>")
        for (j = 0; j < splitted2.length; j++) {

            info.push(focus ? <Text style={{ fontWeight: 'bold', color: "#B6B681" }}>{splitted2[j]}</Text> : <Text>{splitted2[j]}</Text>)
            focus = !focus
        }
    }

    return info
}