import * as fromSubscriptions from './subscriptions.actions';

describe('loadSubscriptions', () => {
  it('should return an action', () => {
    expect(fromSubscriptions.loadSubscriptions().type).toBe('[Subscriptions] Load Subscriptions');
  });
});
