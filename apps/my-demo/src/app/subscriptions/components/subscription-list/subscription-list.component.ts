import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MySubscription } from '@my/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionListComponent implements OnInit {
  @Input() isLoading!: boolean;
  @Input() subscriptions!: Observable<MySubscription>[];

  constructor() { }

  ngOnInit(): void {
  }

}
