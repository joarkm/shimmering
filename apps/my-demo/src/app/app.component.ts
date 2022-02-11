import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, MySubscription } from '@my/api-interfaces';
import { Observable, share, shareReplay } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public message$: Observable<Message> = this.appService.getMessage();
  public message!: Message;
  public subscriptions$: Observable<Observable<MySubscription>[]>;
  public iconClass: { [key: string]: string } = {
    'audio': 'fi fi-rs-music',
    'video': 'fi fi-rr-film',
    'volleyball': 'fi fi-rr-volleyball'
  }

  constructor(private appService: AppService) {
    this.isLoading$ = this.appService.isLoading$;
    this.subscriptions$ = this.appService.getSubscriptions().pipe(shareReplay());
  }

  ngOnInit(): void {
    this.appService.getMessage().subscribe(message => this.message = message);
  }
  
}
