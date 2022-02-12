import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionItemComponent, SubscriptionListComponent } from './components';
import { SubscriptionsContainerComponent } from './containers';


@NgModule({
  imports: [
    CommonModule
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
