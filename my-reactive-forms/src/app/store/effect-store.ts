import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { RequestService } from "../forms/request/request.service";
import { getRequest, requestFailure, requestSuccess } from "./action-store";

@Injectable()
export class GetEffects {
    constructor(private actions$: Actions, private requestService: RequestService) { }
    getRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getRequest),
            map(actions$ => actions$.payload),
            switchMap((payload) =>
                this.requestService.getUrl(payload).pipe(
                    map(response => requestSuccess({ response })),
                    catchError(error => of(requestFailure({ error })))
                ))
        ))
}