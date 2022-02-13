import { createFeatureSelector, createSelector } from '@ngrx/store';

import { subscriptionsAdapter, subscriptionsFeatureKey, SubscriptionsState } from './subscriptions.state';


export const selectSubscriptionstate = createFeatureSelector<SubscriptionsState>(
  subscriptionsFeatureKey
);

const {
  selectAll,
  selectTotal
} = subscriptionsAdapter.getSelectors(selectSubscriptionstate);

export const selectAllSubscriptions = selectAll;
export const selectSubscriptionsCount = selectTotal;
export const selectIsSubscriptionsLoaded = createSelector(selectSubscriptionstate, state => state.isLoaded);
export const selectActiveSubscriptions = createSelector(
  selectAllSubscriptions,
  subscriptions => subscriptions.filter(subscription => !subscription.expired)
);
export const selectExpiredSubscriptions = createSelector(
  selectAllSubscriptions,
  subscriptions => subscriptions.filter(subscription => subscription.expired)
);
