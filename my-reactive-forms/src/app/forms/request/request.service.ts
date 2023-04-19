import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { citiesModel } from './cities-model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = 'https://koqtwbsil3.execute-api.us-east-1.amazonaws.com/newStage';

  constructor(private http: HttpClient) { }

  getUrl(payload: any): Observable<citiesModel[]> {
    return this.http.get<citiesModel[]>(this.url)
  }
}
