import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionItemComponent, SubscriptionListComponent } from './components';
import { SubscriptionsContainerComponent } from './containers';
import { SubscriptionstoreModule } from './store/subscriptions.store.module';


@NgModule({
  imports: [
    CommonModule,
    SubscriptionstoreModule
  ],
  declarations: [
    SubscriptionItemComponent,
    SubscriptionListComponent,
    SubscriptionsContainerComponent
  ],
  exports: [
    SubscriptionsContainerComponent
  ]
})
export class SubscriptionsModule { }
