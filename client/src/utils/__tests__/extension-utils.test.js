import { describe, expect, test} from '@jest/globals';
import * as utils from '..';
import { goToExtension } from '../extension-utils';

describe('extension - goToExtension', () => {
  test('should return chrome extension url', () => {
    const isFirefox = jest.spyOn(utils, 'isFirefox');
    isFirefox.mockReturnValue(false);
    const extension = goToExtension();

    expect(isFirefox).toHaveBeenCalled();
    expect(extension).toEqual('https://chrome.google.com/webstore/detail/freedom-super-saver/cibkpkemnhicmcmkchpledgebbapjdbp');
  });

  test('should return firefox extension url', () => {
    const isFirefox = jest.spyOn(utils, 'isFirefox');
    isFirefox.mockReturnValue(true);
    const extension = goToExtension();

    expect(isFirefox).toHaveBeenCalled();
    expect(extension).toEqual('https://addons.mozilla.org/en-US/firefox/addon/shop-with-freedom/');
  });
});
