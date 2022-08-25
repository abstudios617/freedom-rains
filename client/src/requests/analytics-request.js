import amplitude from 'amplitude-js';
import { amplitudeKey } from '../config';
import { getItem } from '../utils';

let user;
const amp = amplitude.getInstance();
amp.init(amplitudeKey);

if (getItem) {
  user = getItem('loggedIn');
}

export const addEvent = (data) => {
  amp.logEvent(data.event, {
    site: 'Shop with Freedom',
    user: user ? JSON.parse(user).acct_id : 'guest',
    ...data.props,
  });
};
