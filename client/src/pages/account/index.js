import React, { useState } from 'react';
import { updateAccount } from '../../requests/api-request';
import { getItem, setItem, targetPage } from '../../utils/index';
import InputField from '../../components/input-field';
import { useForm } from 'react-hook-form';
import ModalOneBtn from '../../components/modal-one-btn';
import Login from '../../components/login';
import {
  getUserToken, setUserAccount, updateUserTokens
} from '../../utils/account-utils';
import {
  SignIn,
  Content,
  AccountInfoContainer,
  AccountCommContainer
} from './account.style';
import { Container, Title, Alert } from '../../styles/global.style';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';
import LogoIcon from '../../components/logo-icons';

import { AccountMenu, AccountMenuButton } from '../../components/account-menu';
import AccountLikes from '../../components/account-likes';
import AccountOrderHistory from '../../components/account-order-history';
import AccountGamesTokens from '../../components/account-games-tokens';
import { AccountInfoField, AccountInfoSpecial } from '../../components/account-info-field';
import AccountCommField from '../../components/account-comm-field';
import DeleteAccount from '../../components/account-delete';
import testIcon from '../../assets/header/group.png';
import {
  testLikes, testOrders, testLeaders, testMissions
} from './testData.account';

/**
 *  ICONS
 */
import likeIcon from '../../assets/icons/heart-solid.svg';
import orderIcon from '../../assets/icons/scroll-solid.svg';
import gamesIcon from '../../assets/icons/gamepad-solid.svg';
import accountIcon from '../../assets/icons/user-solid.svg';
import signOutIcon from '../../assets/icons/right-from-bracket-solid.svg';
import shopIcon from '../../assets/icons/shop-solid.svg';
import deleteIcon from '../../assets/icons/right-from-bracket-solid.svg';

const Account = ({ setUpdateTokens, isLoggedIn, setIsLoggedIn }) => {
  const userData = JSON.parse(getItem('accountInfo'));
  const accountData = JSON.parse(getItem('loggedIn'));
  const [openModalOne, setOpenModalOne] = useState(false);
  const [tokenReward, setTokenReward] = useState(false);
  const { register, handleSubmit, getValues, errors, setValue } = useForm({
    defaultValues: {
      email: accountData && accountData.username,
      password: userData && userData.pwd,
      first_name: userData && userData.first_name,
      last_name: userData && userData.last_name,
      phone: userData && userData.phone,
      zip: userData && userData.zip,
      race: userData && userData.race,
      age: userData && userData.age,
      gender: userData && userData.gender,
      company: userData && userData.company,
    },
  });

  const updateAllfields = (result) => {
    setValue('password', result.pwd);
    setValue('first_name', result.first_name);
    setValue('last_name', result.last_name);
    setValue('email', result.email);
    setValue('phone', result.phone);
    setValue('zip', result.zip);
    setValue('age', result.age);
    setValue('race', result.race);
    setValue('gender', result.gender);
    setValue('company', result.company);
  };

  const updateAccountInfo = async () => {
    const values = getValues();
    const update = await updateAccount(values, await getUserToken());

    if (update.statusCode === 200) {
      let currentTask = getItem('tasks');

      if (currentTask) {
        currentTask = JSON.parse(currentTask);
        if (!currentTask.account) {
          currentTask.account = true;
          setItem('tasks', JSON.stringify(currentTask));

          const tokens = await updateUserTokens(
            200,
            JSON.stringify(currentTask)
          );
          setUpdateTokens(tokens);
          setTokenReward(true);
        }
      }

      updateAllfields(update.account);
      await setUserAccount(update.account);
      setOpenModalOne(true);
    } else {
      console.log('Update Account Error');
    }
  };

  const closeModal = () => {
    setOpenModalOne(false);
    setTokenReward(false);
  };

  /**
   *  FOR ALL MENU ITEMS
   */
  const [showMenuItem, setShowMenuItem] = useState({
    accountLikes: false,
    accountOrders: false,
    accountGames: false,
    accountInfo: false,
    accountSignOut: false
  });

  /**
   *  FOR ACCOUNT INFO
   */
  const [showEditAccountInfo, setShowEditAccountInfo] = useState({
    first_name: false,
    last_name: false,
    email: false,
    phone_number: false,
    address: false,
    pwd: false
  });

  const [showEditCommInfo, setShowEditCommInfo] = useState({
    marketing: false,
    sharing: false,
    purchases: false
  });

  const [showDeleteAccount, setShowDeleteAccount] = useState({
    account: false,
    modal: false
  });

  // lastly, all events to open fields that contain hidden subfields
  const handleInfoChange = (e) => {
    const { name, id, defaultValue } = e.target;
    if (defaultValue === 'Edit') {
      setShowEditAccountInfo((prevState) => ({
        ...prevState,
        [name]: !id
      }));
    } else {
      setShowEditCommInfo((prevState) => ({
        ...prevState,
        [name]: !id
      }));
    }
  };

  // tests
  if (showMenuItem.accountSignOut) {
    window.alert('TEST: signed out.');
    setShowMenuItem({
      ...showMenuItem,
      accountSignOut: false
    });
  }
  if (showDeleteAccount.modal) {
    window.alert('TEST: account deleted');
    setShowDeleteAccount({
      ...showDeleteAccount,
      modal: false
    });
  }

  if (!isLoggedIn) {
    return (
      <Container>
        <Title>
          <LogoIcon src={FreedomLogo} alt="freedom" />
          <br></br>
          <SignIn>Sign in to your Freedom Account</SignIn>
        </Title>
        <Login setIsLoggedIn={setIsLoggedIn} redirect="account" />
      </Container>
    );
  }

  /* DESIGN FOR ACCOUNT MENU WITHIN <AccountMenu />, TAKE THIS WHENEVER NEEDED */

  return (
    <div style={{ direction: 'flex', flexDirection: 'row' }}>
      <AccountMenu>
        <Content>
          <h3>Hi *First Name*, welcome to your account!</h3>
          <span>Thank you for supporting small and local businesses!</span>
        </Content>
        <AccountMenuButton
          icon={likeIcon}
          title="Likes"
          onClick={
            () => setShowMenuItem(
              { accountLikes: true }
            )
          }
        />
        <AccountMenuButton
          icon={orderIcon}
          title="Order History"
          subtitle="Track your order status, view order history and receipts."
          onClick={
            () => setShowMenuItem(
              { accountOrders: true }
            )
          }
        />
        <AccountMenuButton
          icon={gamesIcon}
          title="Games & Tokens"
          subtitle="Games you've played and tokens you've earned!"
          onClick={
            () => setShowMenuItem(
              { accountGames: true }
            )
          }
        />
        <AccountMenuButton
          icon={accountIcon}
          title="Account Info"
          subtitle="Edit your addresses, contact information, and password here."
          onClick={
            () => setShowMenuItem(
              { accountInfo: true }
            )
          }
        />
        <AccountMenuButton
          icon={signOutIcon}
          title="Sign Out"
          onClick={() => setShowMenuItem(
            {
              ...showMenuItem,
              accountSignOut: true
            }
          )}
        />
      </AccountMenu>
      <div>
        {
          /*
              ::: FOR LIKES :::
          */
        }
        {
          showMenuItem.accountLikes &&
          <Container>
            <Title>
              <span>Likes</span>
            </Title>
            <AccountLikes 
              likes={testLikes}
            />
          </Container>
        }
        {
          /*
              ::: FOR ORDER HISTORY :::
          */
        }
        {
          showMenuItem.accountOrders &&
          <Container>
            <Title>
              <span>Order History</span>
            </Title>
            <AccountOrderHistory 
              orders={testOrders}
            />
          </Container>
        }
        {
          /*
              ::: FOR GAMES & TOKENS :::
          */
        }
        {
          showMenuItem.accountGames &&
          <Container>
            <Title>
              <span>Games & Tokens</span>
            </Title>
            <AccountGamesTokens
              name={'Stephen Believin'}
              image={testIcon}
              leaders={testLeaders}
              missions={testMissions}
            />
          </Container>
        }
        {
          /*
              ::: FOR ACCOUNT INFO :::
          */
        }
        {
          showMenuItem.accountInfo &&
          <Container>
            <Title>
              <span>Account Information</span>
            </Title>
            <AccountInfoContainer>
              <div>
                <AccountInfoField
                  detail="First Name"
                  text={
                    //(userData.first_name !== undefined && userData.last_name !== undefined) ?
                    //String(`${userData.first_name} ${userData.last_name}`) :
                    'FirstName'
                  }
                  name="first_name"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="first_name"
                  placeHolder="First Name"
                  type="text"
                  register={register({
                    required: false,
                  })}
                  show={showEditAccountInfo.first_name}
                  showHandler={() => setShowEditAccountInfo({
                    ...showEditAccountInfo,
                    first_name: false
                  })}
                  save={() => {
                    setShowEditAccountInfo({
                      ...showEditAccountInfo,
                      first_name: false
                    });
                    try {
                      handleSubmit(updateAccountInfo);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />
                {errors.first_name && (
                  <Alert>
                    Please enter your first name
                  </Alert>
                )}

                <AccountInfoField
                  detail="Last Name"
                  text={'LastName'}
                  name="last_name"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="last_name"
                  placeHolder="Last Name"
                  type="text"
                  register={register({
                    required: false,
                  })}
                  show={showEditAccountInfo.last_name}
                  showHandler={() => setShowEditAccountInfo({
                    ...showEditAccountInfo,
                    last_name: false
                  })}
                  save={() => {
                    setShowEditAccountInfo({
                      ...showEditAccountInfo,
                      last_name: false
                    });
                    try {
                      handleSubmit(updateAccountInfo);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />
                {errors.last_name && (
                  <Alert>
                    Please enter your last name
                  </Alert>
                )}

                <AccountInfoField
                  detail="Email"
                  text={
                    //(userData.email !== undefined) ?
                    //userData.email :
                    'firstnamelastname@gmail.com'
                  }
                  name="email"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="email"
                  placeHolder="Email"
                  type="email"
                  register={register({
                    required: false,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  show={showEditAccountInfo.email}
                  showHandler={() => setShowEditAccountInfo({
                    ...showEditAccountInfo,
                    email: false
                  })}
                  save={() => {
                    setShowEditAccountInfo({
                      ...showEditAccountInfo,
                      email: false
                    });
                    try {
                      handleSubmit(updateAccountInfo);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />
                {errors.email && (
                  <Alert>
                    Please enter email address correctly
                  </Alert>
                )}

                <AccountInfoField
                  detail="Phone Number"
                  text={
                    //(userData.phone !== undefined) ?
                    //userData.phone :
                    '1234567890'
                  }
                  name="phone_number"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="phone_number"
                  placeHolder="Phone Number"
                  type="tel"
                  register={register({
                    required: false,
                    maxLength: 10,
                  })}
                  extra="Use format 1234567890"
                  show={showEditAccountInfo.phone_number}
                  showHandler={() => setShowEditAccountInfo({
                    ...showEditAccountInfo,
                    phone_number: false
                  })}
                  save={() => {
                    setShowEditAccountInfo({
                      ...showEditAccountInfo,
                      phone_number: false
                    });
                    try {
                      handleSubmit(updateAccountInfo);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />
                {errors.phone && (
                  <Alert>
                    Please enter your phone number correctly
                  </Alert>
                )}

                <AccountInfoField
                  detail="Address"
                  text={'Add Address'}
                  name="address"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="zip_code"
                  placeHolder="Zip Code"
                  type="tel"
                  register={register({
                    required: false,
                    maxLength: 5,
                  })}
                  show={showEditAccountInfo.address}
                  showHandler={() => setShowEditAccountInfo({
                    ...showEditAccountInfo,
                    address: false
                  })}
                  save={() => {
                    setShowEditAccountInfo({
                      ...showEditAccountInfo,
                      address: false
                    });
                    try {
                      handleSubmit(updateAccountInfo);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />
                {errors.zip_code && (
                  <Alert>Please enter your zip code</Alert>
                )}

                <AccountInfoField
                  detail="Password"
                  text={'************'}
                  name="pwd"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="pwd"
                  placeHolder="Password"
                  type="password"
                  register={register({
                    required: false,
                  })}
                  show={showEditAccountInfo.pwd}
                  showHandler={() => setShowEditAccountInfo({
                    ...showEditAccountInfo,
                    pwd: false
                  })}
                  save={() => {
                    setShowEditAccountInfo({
                      ...showEditAccountInfo,
                      pwd: false
                    });
                    try {
                      handleSubmit(updateAccountInfo);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                />

              </div>
              <div>
                <AccountInfoSpecial
                  icon={shopIcon}
                  detail="Shopping Preference"
                  onClick={() => targetPage('preferences')}
                />
                <AccountInfoSpecial
                  icon={deleteIcon}
                  detail="Delete Account"
                  onClick={() => setShowDeleteAccount(
                    {
                      ...showDeleteAccount,
                      account: true
                    }
                  )}
                />
              </div>
            </AccountInfoContainer>
            <br />

            {/* Communication preferences */}
            <Title>
              <span>Communication & Privacy Policies</span>
            </Title>
            <AccountCommContainer>
              <AccountCommField
                title="Marketing Emails"
                name="marketing"
                onClick={handleInfoChange}
                show={showEditCommInfo.marketing}
                showHandler={() => setShowEditCommInfo({
                  ...showEditCommInfo,
                  marketing: false,
                })}
                save={() => {
                  setShowEditCommInfo({
                    ...showEditCommInfo,
                    marketing: false,
                  });
                  try {
                    handleSubmit(updateAccountInfo);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              />
              <AccountCommField
                title="Information Sharing"
                name="sharing"
                onclick={handleInfoChange}
                show={showEditCommInfo.sharing}
                showHandler={() => setShowEditCommInfo({
                  ...showEditCommInfo,
                  sharing: false,
                })}
                save={() => {
                  setShowEditCommInfo({
                    ...showEditCommInfo,
                    sharing: false,
                  });
                  try {
                    handleSubmit(updateAccountInfo);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              />
              <AccountCommField
                title="Store Purchases"
                name="purchases"
                onClick={handleInfoChange}
                show={showEditCommInfo.purchases}
                showHandler={() => setShowEditCommInfo({
                  ...showEditCommInfo,
                  purchases: false,
                })}
                save={() => {
                  setShowEditCommInfo({
                    ...showEditCommInfo,
                    purchases: false,
                  });
                  try {
                    handleSubmit(updateAccountInfo);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              />
            </AccountCommContainer>
            {tokenReward ?
              (<ModalOneBtn
                openModal={openModalOne}
                closeModal={closeModal}
                message1={'You have been rewarded 200 tokens!'}
                message2={'Successfully updated your account.'}
                hasBtn={false}
              />)
              :
              (<ModalOneBtn
                openModal={openModalOne}
                closeModal={closeModal}
                message1={'Successfully updated your account.'}
                hasBtn={false}
              />)
            }
            <br />
            {
              /**
               *  DELETE ACCOUNT
               *  Located on lines 615-634
               *  Purpose: to show design for account deletion
               *  What needs to change: 
               *        - redirect to a different page when user, take this design
               */
            }
            {
              showDeleteAccount.account &&
              <>
                <Title>
                  <span>Delete Account</span>
                </Title>
                <DeleteAccount
                  onClick={() => setShowDeleteAccount(
                    {
                      ...showDeleteAccount,
                      modal: true
                    }
                  )}
                  onCancel={() => setShowDeleteAccount(
                    {
                      ...showDeleteAccount,
                      account: false
                    }
                  )}
                />
              </>
            }
          </Container>
        }
      </div>
    </div>
  );
};

export default Account;
