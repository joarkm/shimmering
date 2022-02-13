import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SubscriptionsEffects } from './subscriptions.effects';

import { subscriptionsReducer } from './subscriptions.reducer';
import { subscriptionsFeatureKey } from './subscriptions.state';


@NgModule({
  imports: [
    EffectsModule.forFeature([SubscriptionsEffects]),
    StoreModule.forFeature(subscriptionsFeatureKey, subscriptionsReducer),
  ]
})
export class SubscriptionstoreModule { }
