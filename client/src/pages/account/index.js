import React, { useState } from 'react';
import { raceOptions, genderOptions } from '../../constants/account';
import { updateAccount } from '../../requests/api-request';
import { getItem, setItem } from '../../utils/index';
import InputField from '../../components/input-field';
import { useForm } from 'react-hook-form';
import ButtonField from '../../components/button-field';
import ModalOneBtn from '../../components/modal-one-btn';
import Login from '../../components/login';
import { getUserToken, setUserAccount, updateUserTokens } from '../../utils/account-utils';
import {
  Submit,
  AccountContain,
  SignIn,
  Content
} from './account.style';
import { Container, Title, Alert } from '../../styles/global.style';
import DropDown from '../../components/dropdown';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';
import LogoIcon from '../../components/logo-icons';
import AccountMenu from '../../components/account-menu';
import AccountMenuButton from '../../components/account-menu-button';
import AccountInfoField from '../../components/account-info-field';
import AccountInfoSpecial from '../../components/account-info-special';
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
      work_email: userData && userData.work_email,
      work_phone: userData && userData.work_phone,
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
    setValue('work_email', result.work_email);
    setValue('work_phone', result.work_phone);
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

  /* account info visibility & editing account info fields */
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [editAccountInfo, setEditAccountInfo] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    address: false,
    password: false
  });
  const handleAccountInfoChange = (e) => {
    const { name, id } = e.target;
    setEditAccountInfo(prevState => ({
      ...prevState,
      [name]: !id
    }));
    console.log(editAccountInfo);
  };

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
        />
        <AccountMenuButton
          icon={testIcon}
          title="Order History"
          subtitle="Track your order status, view order history and receipts."
        />
        <AccountMenuButton
          icon={testIcon}
          title="Games & Tokens"
          subtitle="Games you've played and tokens you've earned!"
        />
        <AccountMenuButton
          icon={testIcon}
          title="Account Info"
          subtitle="Edit your addresses, contact information, and password here."
          onclick={() => setShowAccountInfo(true)}
        />
        <AccountMenuButton
          icon={testIcon}
          title="Sign Out"
        />
      </AccountMenu>
      <div>
        {
          showAccountInfo &&
          <Container>
            <Title>
              <span>Account Information</span>
            </Title>
            {
              /* 
                contents for new account information page
                -> edit values are based on whether user wants to 
                edit a certain field; if true, pop up text field
              */
            }
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                <AccountInfoField
                  detail="Full Name"
                  text={
                    //(userData.first_name !== undefined && userData.last_name !== undefined) ?
                    //String(`${userData.first_name} ${userData.last_name}`) :
                    'FirstName LastName'
                  }
                  name="name"
                  id={editAccountInfo.name}
                  onClick={handleAccountInfoChange}
                />
                {
                  editAccountInfo.name &&
                  <>
                    <InputField
                      name="first_name"
                      placeHolder="First Name"
                      type="text"
                      register={register({
                        required: false,
                      })}
                    />
                    {errors.first_name && (
                      <Alert>
                        Please enter your first name
                      </Alert>
                    )}
                    <InputField
                      name="last_name"
                      placeHolder="Last Name"
                      type="text"
                      register={register({
                        required: false,
                      })}
                    />
                    {errors.last_name && (
                      <Alert>
                        Please enter your last name
                      </Alert>
                    )}
                  </>
                }
                <AccountInfoField
                  detail="Email"
                  text={
                    //(userData.email !== undefined) ?
                    //userData.email :
                    'firstnamelastname@gmail.com'
                  }
                  name="email"
                  id={editAccountInfo.email}
                  onClick={handleAccountInfoChange}
                />
                {
                  editAccountInfo.email &&
                  <>
                    <InputField
                      name="email"
                      placeHolder="Email"
                      type="email"
                      register={register({
                        required: false,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                    />
                    {errors.email && (
                      <Alert>
                        Please enter email address correctly
                      </Alert>
                    )}
                  </>
                }
                <AccountInfoField
                  detail="Phone Number"
                  text={
                    //(userData.phone !== undefined) ?
                    //userData.phone :
                    '1234567890'
                  }
                  name="phoneNumber"
                  id={editAccountInfo.phoneNumber}
                  onClick={handleAccountInfoChange}
                />
                {
                  editAccountInfo.phoneNumber &&
                  <>
                    <InputField
                      name="phone"
                      placeHolder="Phone Number"
                      type="tel"
                      register={register({
                        required: false,
                        maxLength: 10,
                      })}
                      extra="Use format 1234567890"
                    />
                    {errors.phone && (
                      <Alert>
                        Please enter your phone number correctly
                      </Alert>
                    )}
                  </>
                }
                <AccountInfoField
                  detail="Address"
                  text={'Add Address'}
                  name="address"
                  id={editAccountInfo.address}
                  onClick={handleAccountInfoChange}
                />
                {
                  editAccountInfo.address &&
                  <>
                    <InputField
                      name="zip_code"
                      placeHolder="Zip Code"
                      type="tel"
                      register={register({
                        required: false,
                        maxLength: 5,
                      })}
                    />
                    {errors.zip_code && (
                      <Alert>Please enter your zip code</Alert>
                    )}
                  </>
                }
                <AccountInfoField
                  detail="Password"
                  text={'************'}
                  name="password"
                  id={editAccountInfo.password}
                  onClick={handleAccountInfoChange}
                />
                {
                  editAccountInfo.password &&
                  <InputField
                    name="password"
                    placeHolder="Password"
                    type="password"
                    register={register({
                      required: false,
                    })}
                  />
                }
              </div>
              <div>
                <AccountInfoSpecial
                  icon={testIcon}
                  detail="Shopping Preference"
                />
                <AccountInfoSpecial
                  icon={testIcon}
                  detail="Delete Account"
                />
              </div>
            </div>

            <br />

            {/* Communication preferences */}
            <Title>
              <span>Communication & Privacy Policies</span>
            </Title>


            <br />

            {/* contents for old account info page (all fields)*/}
            <Title>
              <span>(Old Stuff)</span>
            </Title>
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
                name="work_email"
                placeHolder="Work Email"
                type="tel"
                register={register({
                  required: false,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              <InputField
                name="work_phone"
                placeHolder="Work Phone Number"
                type="tel"
                register={register({
                  required: false,
                  maxLength: 10,
                })}
                extra="Use format 1234567890"
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
          </Container>
        }
      </div>
    </div>
  );
};

export default Account;
