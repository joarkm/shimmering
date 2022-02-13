import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ name: 'Subscriptions app' }),
    SubscriptionsModule
  ],
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
