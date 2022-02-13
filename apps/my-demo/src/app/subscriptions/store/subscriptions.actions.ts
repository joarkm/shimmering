import { MySubscription } from '@my/api-interfaces';
import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';

export const loadSubscriptions = createAction(
  '[Subscriptions] Load Subscriptions'
);

export const loadSubscriptionsSuccess = createAction(
  '[Subscriptions] Load Subscriptions Success',
  props<{ subscriptions: Observable<MySubscription>[] }>()
);

export const loadSubscriptionsFailure = createAction(
  '[Subscriptions] Load Subscriptions Failure',
  props<{ error: any }>()
);

export const subscriptionUpdated = createAction(
  '[Subscriptions] Subscription updated',
  // props<{ subscriptionId: string, daysRemaining: number }>()
  props<{ subscription: MySubscription }>()
);
