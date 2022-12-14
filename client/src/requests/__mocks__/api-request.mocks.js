export const testData = { test: 123 };

export const sampleAccount = {
  first_name: 'First',
  last_name: 'Last',
  email: 'test2@test.com',
  password: 'Whoops1234'
}

export const sampleAccountData = {
  'user_id': 304,
  'first_name': 'First',
  'last_name': 'Last',
  'age': null,
  'race': null,
  'gender': null,
  'phone': null,
  'zip': null,
  'categories': null,
  'favorites': null,
  'username': null,
  'password': '$2a$08$ZBmVEvMZMwTC6jSC7TqidOL.Lr3KmKubNgLeb4vwKs/1NOOOeoDTG',
  'created_on': '2022-10-14T14:58:48.670Z',
  'email': 'test2@test.com',
  'token': null
}

/* TODO: Reflect on what CreateAccount would return */
export const createAccount = {
    'username': null,
    'email': 'test2@test.com',
    'first_name': 'First',
    'last_name': 'Last',
    'age': null,
    'race': null,
    'gender': null,
    'phone': null,
    'zip': null,
    'categories': null,
    'favorites': null,
    statusCode: 200
};

export const defaultResponse = {
  message: 'default messaging',
  statusCode: 200,
};

/* TODO: Not sure if we need this since we are using Cookies */
export const updateToken = {
  statusCode: 200,
};

export const updateAccount = {
  message: 'default messaging',
  account: Object,
  statusCode: 200,
};

export const allProducts = {
  category: 'cleaning',
  color: 'black',
  description: 'Purchase Product',
  id: 'prod_Ls5ESfNtWxVI0c',
  image: 'https://image.com',
  name: 'Test Product for Purchase',
  platform: 'local',
  price: '15.99',
  priority: '3',
  size: 'l',
  store: 'Oasis Vegan Veggie',
};

/* TODO: Setup how getUser return data */
export const getCurrentUser = {

}

/* TODO: Do we need this? */
export const getAllUsers = {
  acct_id: 1,
  age: '23',
  categories: '[3,5,7,10]',
  company: '',
  created_on: '2021-08-19T06:16:00.000Z',
  favorites:
    '["prod_JtyI2kNsJfnAnt","prod_JtzSgRXXqxqhdq","prod_Jtyy3re4hOseHP","prod_KzirCKOw0Xinig","prod_L02g4odjdk6EXy","prod_KzjerxJxMY9MmC","prod_Jty71KKG2wCRD3"]',
  first_name: 'Tester',
  gender: 'male',
  info_id: 1,
  last_name: 'Account',
  locked:
    '{"games":[1,2,3,7,6,4,5,13],"tvShows":[1,2,3],"music":[1,2,3],"vlogs":[1,2,3],"podcast":[1,2,3],"reels":[1,2,3]}',
  org_id: 1,
  phone: '',
  race: 'black_african',
  tasks: '{"account":true,"shop":true}',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY1Nzk0MTQ1OCwiZXhwIjoxNjU4NTQ2MjU4fQ.5JnOfvXYtwPXIO-DeAGBrJRYlfgKcnrXYa9Dvl5IESs',
  token_id: 1,
  tokens: '150',
  username: 'info@freedomrains.com',
  work_email: 'work@email.com',
  work_phone: '1029384756',
  zip: '39485',
};

/* TODO: Is this how LoggedinAccount setup? */
export const loggedInAccount = {
  acct_id: 1,
  created_on: '2021-08-19T06:16:00.000Z',
  statusCode: 200,
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY1Nzk0MTQ1OCwiZXhwIjoxNjU4NTQ2MjU4fQ.5JnOfvXYtwPXIO-DeAGBrJRYlfgKcnrXYa9Dvl5IESs',
  username: 'info@freedomrains.com',
};

export const getLeads = {
  lead_id: 1,
  created_on: '2021-08-19T06:16:00.000Z',
  first_name: 'John',
  source: 'male',
  last_name: 'Doe',
  prime: 'true',
  affiliate: 'gamestop',
  email: 'work@email.com',
  zip: '39485',
};

/* TODO: Check if this is actually the account body */
export const accountBody = {
  age: '23',
  company: '',
  first_name: 'Tester',
  gender: 'male',
  last_name: 'Account',
  phone: '',
  race: 'black_african',
  work_email: 'work@email.com',
  work_phone: '1029384756',
  zip: '39485',
};

export const uninstalledBody = {
  annoyed: 'true',
  canada: 'false',
  cashback: 'true',
  shop: 'true',
  technical: 'false',
  useful: 'true',
  work: 'false',
  other: 'false',
  other_response: 'some other reason why',
  sizing: 'false',
};

export const uninstalledResponse = {
  uninstall_id: 1,
  annoyed: 'true',
  canada: 'false',
  cashback: 'true',
  shop: 'true',
  technical: 'false',
  useful: 'true',
  work: 'false',
  other: 'false',
  other_response: 'some other reason why',
  sizing: 'false',
};

export const couponResponse = {
  codes: Object,
  couponCount: 3,
  notRecommended: false,
};

export const printfulResponse = {
  code: 200,
  result: [
    {
      id: 277518510,
      external_id: '62b1db704eb097',
      name: 'Freedom Large Organic Tote Bag',
      variants: 1,
      synced: 1,
      thumbnail_url:
        'https://files.cdn.printful.com/files/051/05183dafc0b4c72574fe67ce56a1e363_preview.png',
      is_ignored: false,
    },
  ],
};

export const printfulSpecificProdResponse = {
  code: 200,
  result: {
    sync_product: {
      id: 277518510,
      external_id: '62b1db704eb097',
      name: 'Freedom Large Organic Tote Bag',
      variants: 1,
      synced: 1,
      thumbnail_url:
        'https://files.cdn.printful.com/files/051/05183dafc0b4c72574fe67ce56a1e363_preview.png',
      is_ignored: false,
    },
    sync_variants: [],
  },
  extra: [],
};
