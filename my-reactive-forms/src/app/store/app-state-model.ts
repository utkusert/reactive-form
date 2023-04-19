import { citiesModel } from "../forms/request/cities-model"

export interface AppState {
    get: {
        cities: citiesModel[]
        error?: any
    }
}