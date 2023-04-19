import { createAction, props } from "@ngrx/store";
import { citiesModel } from "../forms/request/cities-model";

export const getRequest = createAction('[Get Component] Get Request', props<{ payload: citiesModel[] }>());
export const requestSuccess = createAction(
    '[Get Service] Request Success',
    props<{ response: citiesModel[] }>()
);
export const requestFailure = createAction(
    '[Get Service] Request Failure',
    props<{ error: any }>()
)