import { getItem, setItem, targetPage } from './index';
import { addEvent } from '../requests/analytics-request';
import { updateTokens } from '../requests/api-request';

export const setUserAccount = (account) => {
  setItem(
    'accountInfo',
    JSON.stringify({
      userInfo: account,
      password: account.password,
      first_name: account.first_name,
      last_name: account.last_name,
      email: account.email,
      phone: account.phone,
      zip: account.zip,
      age: account.age,
      race: account.race,
      gender: account.gender,
      company: account.company,
      work_email: account.work_email,
      work_phone: account.work_phone,
    })
  );
};

export const getLoginToken = () => {
  const loginToken = document.cookie.substring(
    document.cookie.indexOf('token=') + 'token='.length, 
    document.cookie.indexOf(';', document.cookie.indexOf('token='))
  );
  return loginToken;
}

export const updateUserTokens = async (tokenCount, tasks) => {
  const amount = getItem('tokens');
  const total = +amount + tokenCount;
  const availableTokens = await updateTokens(
    {
      total: total,
      tasks: tasks,
    }
  );

  if (availableTokens.statusCode === 200) {
    setItem('tokens', availableTokens.token);
    return true;
  }

  return false;
};

export const goToSignIn = async (pageName, screen) => {
  addEvent({
    event: 'Go to sign in',
    props: {
      action: 'Click',
      location: pageName,
      label: screen,
    },
  });
  
  targetPage(pageName);
};
