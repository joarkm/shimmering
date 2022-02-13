import { Component, OnInit } from '@angular/core';
import { MySubscription } from '@my/api-interfaces';
import { select, Store } from '@ngrx/store';
import { delay, merge, Observable, of } from 'rxjs';
import { Subscriptionservice } from '../services';
import { loadSubscriptions } from '../store/subscriptions.actions';
import { selectAllSubscriptions, selectIsSubscriptionsLoaded } from '../store/subscriptions.selectors';
import { SubscriptionsState } from '../store/subscriptions.state';

@Component({
  selector: 'my-subscriptions-container',
  templateUrl: './subscriptions-container.component.html',
  styles: [
  ]
})
export class SubscriptionsContainerComponent implements OnInit {

  public isLoaded$: Observable<boolean>;
  public subscriptions$: Observable<MySubscription[]>;

  constructor(private store: Store<SubscriptionsState>) {
    this.isLoaded$ = this.store.pipe(select(selectIsSubscriptionsLoaded));
    this.subscriptions$ = this.store.pipe(select(selectAllSubscriptions));
  }

  ngOnInit(): void {
    this.store.dispatch(loadSubscriptions());
  }

}
