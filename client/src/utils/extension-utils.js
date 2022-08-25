import { isFirefox } from '.';

export const goToExtension = () => {
  const chromeExt =
    'https://chrome.google.com/webstore/detail/freedom-super-saver/cibkpkemnhicmcmkchpledgebbapjdbp';
  const firefoxExt =
    'https://addons.mozilla.org/en-US/firefox/addon/shop-with-freedom/';
  const url = isFirefox() ? firefoxExt : chromeExt;

  return url;
};
