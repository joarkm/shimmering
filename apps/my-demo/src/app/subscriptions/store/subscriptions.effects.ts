import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatAll, concatMap, map, mergeMap } from 'rxjs/operators';
import { Subscriptionservice } from '../services';
import * as SubscriptionsActions from './subscriptions.actions';




@Injectable()
export class SubscriptionsEffects {

  loadSubscriptions$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SubscriptionsActions.loadSubscriptions),
      concatMap(() =>
        this.subscriptionservice.getSubscriptions().pipe(
          map(subscriptions => SubscriptionsActions.loadSubscriptionsSuccess({ subscriptions })),
          catchError(error => of(SubscriptionsActions.loadSubscriptionsFailure({ error }))))
      )
    );
  });
  
  loadSubscriptionsSuccess$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SubscriptionsActions.loadSubscriptionsSuccess),
      map(({ subscriptions }) => subscriptions),
      concatAll(),
      mergeMap(subscription => subscription.pipe(
        // map(({ subscriptionItem: { id }, daysRemaining }) =>
        //   SubscriptionsActions.subscriptionUpdated({ subscriptionId: id, daysRemaining })
        // )
        map(subscription =>
          SubscriptionsActions.subscriptionUpdated({ subscription })
        )
      ))
    );
  });


  constructor(
    private actions$: Actions,
    private subscriptionservice: Subscriptionservice
  ) {}

}
