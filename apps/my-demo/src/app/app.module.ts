import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SubscriptionItemComponent } from './subscription-item/subscription-item.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    SubscriptionItemComponent,
    SubscriptionListComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
