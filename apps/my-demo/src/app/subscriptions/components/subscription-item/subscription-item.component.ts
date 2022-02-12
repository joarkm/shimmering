import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MySubscription } from '@my/api-interfaces';

@Component({
  selector: 'my-subscription-item',
  templateUrl: './subscription-item.component.html',
  styleUrls: ['./subscription-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionItemComponent {
  @Input() subscription!: MySubscription;

  public iconClass: { [key: string]: string } = {
    'audio': 'fi fi-rs-music',
    'student': 'fi fi-rr-graduation-cap',
    'video': 'fi fi-rr-film',
    'volleyball': 'fi fi-rr-volleyball'
  };

}
