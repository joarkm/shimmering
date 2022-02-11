import { Item } from "./item-interface";

export interface MySubscription {
    subscriptionItem: Item;
    daysRemaining: number;
    daysTotal: number;
}