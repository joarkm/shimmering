import { Component, OnInit } from '@angular/core';
import { MySubscription } from '@my/api-interfaces';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { loadSubscriptions } from '../store/subscriptions.actions';
import { selectActiveSubscriptions, selectAllSubscriptions, selectExpiredSubscriptions, selectIsSubscriptionsLoaded } from '../store/subscriptions.selectors';
import { sortByDaysRemaining, SubscriptionsState } from '../store/subscriptions.state';


@Component({
  selector: 'my-subscriptions-container',
  templateUrl: './subscriptions-container.component.html',
  styles: [
  ]
})
export class SubscriptionsContainerComponent implements OnInit {

  public isLoaded$: Observable<boolean>;
  public subscriptions$: Observable<MySubscription[]>;
  public activeSubscriptions$: Observable<MySubscription[]>;
  public expiredSubscriptions$: Observable<MySubscription[]>;

  constructor(private store: Store<SubscriptionsState>) {
    this.isLoaded$ = this.store.pipe(select(selectIsSubscriptionsLoaded));
    this.subscriptions$ = this.store.pipe(select(selectAllSubscriptions));
    this.activeSubscriptions$ = this.store.pipe(
      select(selectActiveSubscriptions),
      map(subscriptions => subscriptions.sort(sortByDaysRemaining))
    );
    this.expiredSubscriptions$ = this.store.pipe(
      select(selectExpiredSubscriptions),
      map(subscriptions => subscriptions.sort(sortByDaysRemaining))
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadSubscriptions());
  }

}
