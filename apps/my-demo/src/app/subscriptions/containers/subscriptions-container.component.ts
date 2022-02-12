import { Component, OnInit } from '@angular/core';
import { MySubscription } from '@my/api-interfaces';
import { delay, merge, Observable, of } from 'rxjs';
import { SubscriptionsService } from '../services';

@Component({
  selector: 'my-subscriptions-container',
  templateUrl: './subscriptions-container.component.html',
  styles: [
  ]
})
export class SubscriptionsContainerComponent implements OnInit {

  public isLoading$: Observable<boolean>;
  public subscriptions$: Observable<Observable<MySubscription>[]>;

  constructor(private subscriptionsService: SubscriptionsService) {
    this.isLoading$ = merge(
      of(true),
      of(false).pipe(delay(1500))
    );
    this.subscriptions$ = this.subscriptionsService.getSubscriptions();
  }

  ngOnInit(): void {
  }

}
