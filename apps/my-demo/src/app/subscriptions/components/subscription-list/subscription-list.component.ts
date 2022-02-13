import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MySubscription } from '@my/api-interfaces';

@Component({
  selector: 'my-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionListComponent {
  @Input() isLoaded!: boolean;
  @Input() subscriptions!: MySubscription[];
  @Input() activeSubscriptions!: MySubscription[];
  @Input() expiredSubscriptions!: MySubscription[];

}
