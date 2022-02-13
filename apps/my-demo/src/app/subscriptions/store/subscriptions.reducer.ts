import { Action, createReducer, on } from '@ngrx/store';
import * as SubscriptionsActions from './subscriptions.actions';
import { initialSubscriptionsState, subscriptionsAdapter } from './subscriptions.state';


export const subscriptionsReducer = createReducer(
  initialSubscriptionsState,

  on(SubscriptionsActions.loadSubscriptions, state => state),
  
  on(
    SubscriptionsActions.loadSubscriptionsFailure,
    SubscriptionsActions.loadSubscriptionsSuccess,

    state => ({ ...state, isLoaded: true })
  ),
  
  // on(
  //   SubscriptionsActions.subscriptionUpdated,
  //   (state, { subscriptionId, daysRemaining }) =>
  //     subscriptionsAdapter.updateOne({
  //       id: subscriptionId,
  //       changes: {
  //         daysRemaining
  //       }
  //     }, state)
  // ),
  on(
    SubscriptionsActions.subscriptionUpdated,
    (state, { subscription }) =>
      subscriptionsAdapter.upsertOne(subscription, state)
  ),
  
);
