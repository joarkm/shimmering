import { MySubscription } from "@my/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export const subscriptionsFeatureKey = 'subscriptions';

export interface SubscriptionsState extends EntityState<MySubscription> {
    isLoaded: boolean;
}

export function selectSubscriptionId(subscription: MySubscription): string {
    //In this case this would be optional since primary key is id
    return subscription.subscriptionItem.id;
}

export function sortByTitle(s1: MySubscription, s2: MySubscription): number {
    return s1.subscriptionItem.title.localeCompare(s2.subscriptionItem.title);
}

export function sortActiveFirst(s1: MySubscription, s2: MySubscription): number {
    return (s1.expired === s2.expired)? 0 : s1.expired? 1 : -1;
}

export function sortByDaysRemaining(s1: MySubscription, s2: MySubscription): number {
    return s1.daysRemaining - s2.daysRemaining;
}

export const subscriptionsAdapter: EntityAdapter<MySubscription> = createEntityAdapter<MySubscription>({
    selectId: selectSubscriptionId,
    sortComparer: sortByTitle
});

export const initialSubscriptionsState: SubscriptionsState = subscriptionsAdapter.getInitialState({
    // additional entity state properties
    isLoaded: false
});
