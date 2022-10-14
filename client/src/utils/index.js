import { createCommunityUser, getCommunityInfo, getUserInfo } from '../requests/api-request';
import { setUserAccount } from './account-utils';
import useSSR from 'use-ssr';

const { isBrowser } = useSSR();

export const isChrome = () => {
  if (!isBrowser) {
    return false;
  }
  
  return navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
};

export const isFirefox = () => {
  if (!isBrowser) {
    return false;
  }
  
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
};

export const isMobile = () => {
  if (!isBrowser) {
    return false;
  }
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

export const getItem = (name) => {
  if (!isBrowser) {
    return false;
  }

  return window.localStorage.getItem(`freedom.${name}`);
};

export const setItem = (name, val) => {
  if (!isBrowser) {
    return false;
  }

  window.localStorage.setItem(`freedom.${name}`, val);
};

export const removeItem = (name) => {
  if (!isBrowser) {
    return false;
  }
  
  window.localStorage.removeItem(`freedom.${name}`);
};

export const resetCache = () => {
  removeItem('loggedIn');
  removeItem('categories');
  removeItem('tokens');
  removeItem('unlockedItems');
  removeItem('tasks');
  removeItem('accountInfo');
  removeItem('favorites');
  removeItem('specificProd');
};

export const setUserData = async (loggedInData) => {
  setItem('loggedIn', JSON.stringify(loggedInData));
  const userData = await getUserInfo();
  if (userData.statusCode === 200) {
    setUserAccount(userData);
  }

  setItem('categories', userData.categories || JSON.stringify([]));

  setItem('favorites', userData.favorites || JSON.stringify([]));

  
  /* The three items below are from community_tokens */
  const communityData = await getCommunityInfo();
  if (communityData.statusCode === 200)
  {
    setItem('tokens', communityData.tokens);
    setItem('unlockedItems', communityData.locked);
    setItem('tasks', communityData.tasks);
  }
  else if (communityData.statusCode === 500 && userData.statusCode === 200) // New User...
  {
    const defValues = {
      tokens: '0',
      locked: JSON.stringify({}),
      tasks: JSON.stringify({})
    };
    const makeCommunityData = await createCommunityUser(defValues);
    setItem('tokens', makeCommunityData.tokens);
    setItem('unlockedItems', makeCommunityData.locked);
    setItem('tasks', makeCommunityData.tasks);
  }
};

//This Function is outdated. Instead of using target page. 
//We should be using the <Link to=""> anytime we want to link to something
//Programmatically we should be using History()
export const targetPage = (page) => {
  if (!isBrowser) {
    return false;
  }
  
  window.location.href = `/${page}`;
};

const getUrlParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams;
};

export const getUrlParamProduct = () => {
  const urlParams = getUrlParam();
  const prodId = urlParams.get('prod');

  return prodId;
};

export const getUrlParamSearch = () => {
  const urlParams = getUrlParam();
  const itemType = urlParams.get('type');
  const itemValue = urlParams.get('val');

  return {
    type: itemType,
    val: decodeURIComponent(itemValue),
  };
};

export const shuffleArray = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const formatPrice = (price) => {
  return (price * .01).toFixed(2);
};
