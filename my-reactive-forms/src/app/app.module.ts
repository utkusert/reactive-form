import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './forms/form/form.component';
import { CvaInputComponent } from './forms/cva-input/cva-input.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GetEffects } from './store/effect-store';
import { getReducer } from './store/reducer-store';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CvaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ get: getReducer }),
    EffectsModule.forRoot([GetEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
