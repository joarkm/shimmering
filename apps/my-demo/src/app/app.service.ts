import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message, MySubscription } from '@my/api-interfaces';
import { BehaviorSubject, combineLatest, concat, delay, interval, map, merge, Observable, of, switchMap, take, tap, withLatestFrom } from 'rxjs';

@Injectable()
export class AppService {

  private isLoadingSource = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoadingSource.asObservable();

  constructor(private http: HttpClient) {}

  public getMessage(): Observable<Message> {
    return of(null).pipe(
      tap(() => this.isLoadingSource.next(true)),
      delay(2000),
      switchMap(() => this.http.get<Message>('/api/hello')),
      tap(() => this.isLoadingSource.next(false))
    );
  }

  public getSubscriptions(): Observable<Observable<MySubscription>[]> {
    const subscriptions: Observable<MySubscription>[] = [
      combineLatest(
        of<MySubscription>({
          daysTotal: 5,
          daysRemaining: 5,
          subscriptionItem: {
            title: 'Video streaming',
            description: 'Streaming service for video content',
            icon: 'video'
          }
        } as MySubscription),
        merge(
          of(-1),
          interval(1000)
        ).pipe(
          map(x => 4 - x),
          take(6)
        )
      ).pipe(
        map(([subscription, daysRemaining]) => ({
          ...subscription,
          daysRemaining
        }))
      ),

      combineLatest(
        of<MySubscription>({
          daysTotal: 10,
          daysRemaining: 10,
          subscriptionItem: {
            title: 'Audio streaming',
            description: 'Streaming service for audio content',
            icon: 'audio'
          }
        } as MySubscription),
        merge(
          of(-1),
          interval(1000)
        ).pipe(
          map(x => 9 - x),
          take(11)
        )
      ).pipe(
        map(([subscription, daysRemaining]) => ({
          ...subscription,
          daysRemaining
        }))
      ),

      of<MySubscription>({
        daysTotal: 365,
        daysRemaining: 365,
        subscriptionItem: {
          title: 'Club membership',
          description: 'Club member ship fee',
          icon: 'volleyball'
        }
      } as MySubscription),
    ];

    return of(subscriptions);
  }

}
