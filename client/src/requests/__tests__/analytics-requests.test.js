import * as request from '../analytics-request';
import amplitude from 'amplitude-js';
import { it, expect, describe } from '@jest/globals';

describe('analytics - addEvent', () => {
  it('should hit the amplitude api', () => {
    request.addEvent({
      event: 'test'
    });

    expect(amplitude.getInstance().logEvent('test'));
  });
});
