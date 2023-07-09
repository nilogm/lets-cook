

export type ingredient = {
    name: string,
    image: string,
    unit: string,
    measures: Object,
    usPreference: boolean | undefined,
}

export type substitute = {
    comparison: string,
    substitute: string,
}

export type recipe = {
    title: string,
    image: var,
    cookingMinutes: string,
    preparationMinutes: string,
    readyInMinutes: string,
    servings: string,
    dishTypes: Array,
    diets: Array,
    dairyFree: boolean,
    vegan: boolean,
    vegetarian: boolean,
    healthScore: int,
    nutrition: Array | undefined,
    missedIngredients: Array
}

export type tag = {
    name: string,
    amount: float | undefined,
    unit: string | undefined,
    unitLong: string | undefined,
}
