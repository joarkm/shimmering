import { selectSubscriptionstate } from './subscriptions.selectors';
import { subscriptionsFeatureKey } from './subscriptions.state';

describe('Subscriptions Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSubscriptionstate({
      [subscriptionsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
