import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
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
