import { createReducer, on } from "@ngrx/store";
import { citiesModel } from "../forms/request/cities-model";
import { getRequest, requestFailure, requestSuccess } from "./action-store";
import { AppState } from "./app-state-model";


export const initialState: AppState['get'] = {
    cities: []
};
export const getReducer = createReducer(
    initialState,
    on(getRequest, (state) => ({ ...state })),
    on(requestSuccess, (state, { response }) => {
        return {
            ...state,
            cities: response.filter((res: citiesModel) => res.name)
        }
    }),
    on(requestFailure, (state, { error }) => ({ ...state, error }))
)
