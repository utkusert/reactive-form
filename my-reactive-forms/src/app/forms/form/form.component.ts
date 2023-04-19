import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getRequest } from 'src/app/store/action-store';
import { AppState } from 'src/app/store/app-state-model';
import { citiesModel } from '../request/cities-model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cities: citiesModel[] = [];
  private citiesSub: Subscription = new Subscription();

  constructor(private store: Store<AppState>) { }
  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('')
  })
  ngOnInit(): void {
    this.store.dispatch(getRequest({ payload: [] }));
    this.citiesSub = this.store.select(state => state.get.cities).subscribe(data => {
      this.cities = data;
    })

  }
  onSubmit() {
    console.log(this.myForm.value);
  }
  ngOnDestroy(): void {
    this.citiesSub.unsubscribe();
  }
}
