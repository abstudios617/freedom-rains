import React, { useState } from 'react';
import { raceOptions, genderOptions } from '../../constants/account';
import { updateAccount } from '../../requests/api-request';
import { getItem, setItem, targetPage } from '../../utils/index';
import InputField from '../../components/input-field';
import { useForm } from 'react-hook-form';
import ButtonField from '../../components/button-field';
import ModalOneBtn from '../../components/modal-one-btn';
import Login from '../../components/login';
import {
  getUserToken, setUserAccount, updateUserTokens
} from '../../utils/account-utils';

import {
  Submit,
  AccountContain,
  SignIn,
  Content,
  AccountInfoContainer,
  AccountCommContainer
} from './account.style';
import { Container, Title, Alert } from '../../styles/global.style';
import DropDown from '../../components/dropdown';
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

const Account = ({ setUpdateTokens, isLoggedIn, setIsLoggedIn }) => {
  const userData = JSON.parse(getItem('accountInfo'));
  const accountData = JSON.parse(getItem('loggedIn'));
  const [openModalOne, setOpenModalOne] = useState(false);
  const [tokenReward, setTokenReward] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
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
      setErrMsg(null);
      setOpenModalOne(true);
    } else {
      console.log('Update Account Error');
      setErrMsg(update.message);
    }
  };

  const closeModal = () => {
    setOpenModalOne(false);
    setTokenReward(false);
  };

  const raceDropdown = raceOptions.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    );
  });
  const genderDropdown = genderOptions.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    );
  });

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
   *  FOR LIKES
   */

  /**
   *  FOR ORDER HISTORY
   */

  /**
   *  FOR GAMES & TOKENS
   */

  // testing stuff
  const testLeaders = [], testMissions = [];

  /**
   *  FOR ACCOUNT INFO
   */
  const [showEditAccountInfo, setShowEditAccountInfo] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    address: false,
    password: false
  });
  const [showEditCommInfo, setShowEditCommInfo] = useState({
    marketing: false,
    sharing: false,
    purchases: false
  });
  const [showDeleteAccount, setShowDeleteAccount] = useState({
    accountInfo: false,
    accountModal: false
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
  if (showDeleteAccount.accountModal) {
    window.alert('TEST: account deleted');
    setShowDeleteAccount({
      ...showDeleteAccount,
      accountModal: false
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
          icon={testIcon}
          title="Likes"
          onClick={
            () => setShowMenuItem(
              { accountLikes: true }
            )
          }
        />
        <AccountMenuButton
          icon={testIcon}
          title="Order History"
          subtitle="Track your order status, view order history and receipts."
          onClick={
            () => setShowMenuItem(
              { accountOrders: true }
            )
          }
        />
        <AccountMenuButton
          icon={testIcon}
          title="Games & Tokens"
          subtitle="Games you've played and tokens you've earned!"
          onClick={
            () => setShowMenuItem(
              { accountGames: true }
            )
          }
        />
        <AccountMenuButton
          icon={testIcon}
          title="Account Info"
          subtitle="Edit your addresses, contact information, and password here."
          onClick={
            () => setShowMenuItem(
              { accountInfo: true }
            )
          }
        />
        <AccountMenuButton
          icon={testIcon}
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
            <AccountLikes>
              LIKES TEST
            </AccountLikes>
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
            <AccountOrderHistory>
              ORDERS TEST
            </AccountOrderHistory>
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
                  name="name"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="first_name"
                  placeHolder="First Name"
                  type="text"
                  register={register({
                    required: false,
                  })}
                  show={showEditAccountInfo.firstName}
                  showHandler={setShowEditAccountInfo}
                  save={null}
                />
                {errors.first_name && (
                  <Alert>
                    Please enter your first name
                  </Alert>
                )}
                <AccountInfoField 
                  detail="Last Name"
                  text={
                    'LastName'
                  }
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
                  show={showEditAccountInfo.name}
                  showHandler={setShowEditAccountInfo}
                  save={null}
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
                  showHandler={setShowEditAccountInfo}
                  save={null}
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
                  name="phoneNumber"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="phone"
                  placeHolder="Phone Number"
                  type="tel"
                  register={register({
                    required: false,
                    maxLength: 10,
                  })}
                  extra="Use format 1234567890"
                  show={showEditAccountInfo.phoneNumber}
                  showHandler={setShowEditAccountInfo}
                  save={null}
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
                  showHandler={setShowEditAccountInfo}
                  save={null}
                />
                {errors.zip_code && (
                  <Alert>Please enter your zip code</Alert>
                )}
                <AccountInfoField
                  detail="Password"
                  text={'************'}
                  name="password"
                  onClick={handleInfoChange}
                />
                <InputField
                  name="password"
                  placeHolder="Password"
                  type="password"
                  register={register({
                    required: false,
                  })}
                  show={showEditAccountInfo.password}
                  showHandler={setShowEditAccountInfo}
                  save={null}
                />
              </div>
              <div>
                <AccountInfoSpecial
                  icon={testIcon}
                  detail="Shopping Preference"
                  onClick={() => targetPage('preferences')}
                />
                <AccountInfoSpecial
                  icon={testIcon}
                  detail="Delete Account"
                  onClick={() => setShowDeleteAccount(
                    {
                      ...showDeleteAccount,
                      accountInfo: true
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
              />
              <AccountCommField
                title="Information Sharing"
                name="sharing"
                onclick={handleInfoChange}
                show={showEditCommInfo.sharing}
              />
              <AccountCommField
                title="Store Purchases"
                name="purchases"
                onClick={handleInfoChange}
                show={showEditCommInfo.purchases}
              />
            </AccountCommContainer>

            {errMsg && <Alert>{errMsg}</Alert>}
            <AccountContain>
              <InputField
                name="company"
                placeHolder="Company"
                type="text"
                register={register({
                  required: false,
                })}
              />
              <InputField
                name="age"
                placeHolder="Age"
                type="tel"
                register={register({
                  required: false,
                  maxLength: 2,
                })}
              />
              {errors.age && (
                <Alert>Please enter your age</Alert>
              )}
              <DropDown
                name="race"
                ref={register({
                  required: false,
                })}
                label="Select an Ethnicity"
                list={raceDropdown}
              >
              </DropDown>
              {errors.race && (
                <Alert>Please select your Ethnicity</Alert>
              )}
              <DropDown
                name="gender"
                ref={register({
                  required: false,
                })}
                label="Select a Gender"
                list={genderDropdown}
              >
              </DropDown>
              {errors.gender && (
                <Alert>Please select your gender</Alert>
              )}
            </AccountContain>
            <Submit>
              <ButtonField color="primary" onClick={handleSubmit(updateAccountInfo)}>
                Save
              </ButtonField>
            </Submit>
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
            <br/>
            {
              /**
               *  DELETE ACCOUNT
               *  Purpose: to show separate page for redirecting user to delete their account
               *  What needs to change: 
               */
            }
            {
              showDeleteAccount.accountInfo &&
              <>
                <Title>
                  <span>Delete Account</span>
                </Title>
                <DeleteAccount
                  onClick={() => setShowDeleteAccount(
                    {
                      ...showDeleteAccount, 
                      accountModal: true
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
