import { subscriptionsReducer } from './subscriptions.reducer';
import { initialSubscriptionsState } from './subscriptions.state';

describe('Subscriptions Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = subscriptionsReducer(initialSubscriptionsState, action);

      expect(result).toBe(initialSubscriptionsState);
    });
  });
});
