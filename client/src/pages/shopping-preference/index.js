import React, { useEffect, useState } from 'react';
import { preferenceCategories } from '../../constants/categories';
import { updateAccountCategory } from '../../requests/api-request';
import { getItem, setItem } from '../../utils/index';
import ModalOneBtn from '../../components/modal-one-btn';
import ButtonField from '../../components/button-field';
import { addEvent } from '../../requests/analytics-request';
import { updateUserTokens } from '../../utils/account-utils';
import { 
  Content,
  Grid,
  CategoryCircle,
  Submit,
  ImgContainer,
  PreferenceCheckmarkContainer
} from './shoppingPreference.style';
import {Container, Title, Alert} from '../../styles/global.style';
import FreedomLogo from '../../assets/icons/FreedomLogo.png';
import StepTwo from '../../assets/account/step_two.png';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import LogoIcon from '../../components/logo-icons/index';

const ShoppingPreference = ({ setUpdateTokens }) => {
  const [data, setData] = useState(preferenceCategories);
  const [start, setStart] = useState(false);
  const [tokenReward, setTokenReward] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [openModalOne, setOpenModalOne] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const alreadySelected = data.filter((elem) => elem.selected);
    setShowButton(alreadySelected.length !== 0 && alreadySelected.length <= 4);
  });
 
  const onSelectionChange = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      })
    );

    const alreadySelected = data.filter((elem) => elem.selected);
    
    
    let canDeselected = false;
    alreadySelected.forEach((item) => {
      if (item.id === id) {
        canDeselected = true;
      }
    });

    if (alreadySelected.length >= 4) {
      if (!canDeselected) {
        return;
      }
    }
  };

  const submitCategories = async () => {
    const selected = data.filter((item) => {
      return item.selected;
    });

    const arr = [];

    selected.forEach((item) => {
      arr.push(item.id);
    });

    if (arr.length === 0) {
      setHasSelected(true);
      setOpenModalTwo(true);
      return;
    } else if (arr.length > 4) {
      setHasSelected(false);
      setOpenModalTwo(true);
      return;
    } else {
      setHasSelected(false);
      setOpenModalOne(true);
    }
    
    const values = {
      category: JSON.stringify(arr),
    };

    const update = await updateAccountCategory(values);

    if (update.statusCode === 200) {
      setErrMsg(null);
      let currentTask = getItem('tasks');

      if (currentTask) {
        currentTask = JSON.parse(currentTask);
        if (!currentTask.shop) {
          currentTask.shop = true;
          setItem('tasks', JSON.stringify(currentTask));

          const tokens = await updateUserTokens(
            200,
            JSON.stringify(currentTask)
          );
          setUpdateTokens(tokens);
          setTokenReward(true);
        }
      }

      setItem('categories', JSON.stringify(arr));
      addEvent({
        event: 'Shopping Preference selected',
        props: {
          action: 'Click',
          label: JSON.stringify(arr),
        },
      });
      setOpenModalOne(true);
    } else {
      console.log('Update Category Error');
      setErrMsg(update.message);
    }
  };

  const renderItem = data.map((item) => {
    const [showIcon, setShowIcon] = useState(false);
    
    return (
      <CategoryCircle
        onClick={() => {onSelectionChange(item.id);}}
        className={item.selected && 'categoryCircleSelected'}
        key={item.value}
      >
        <ImgContainer 
          onClick={() => setShowIcon((state) => !state)}>
          {
            showIcon && 
            <PreferenceCheckmarkContainer>
              <IoCheckmarkCircleOutline size={30} top="45px"/>
            </PreferenceCheckmarkContainer>
          }
          <img src={item.img} width="150"></img>
        </ImgContainer>
      </CategoryCircle>
    );
  });

  const getSelectedData = async () => {
    let category = getItem('categories');

    if (!category) {
      return;
    }

    category = JSON.parse(category);

    preferenceCategories.forEach((item) => {
      category.indexOf(item.id) !== -1
        ? (item.selected = true)
        : (item.selected = false);
    });

    setData(preferenceCategories);
    setStart(true);
  };

  const closeModal = () => {
    setOpenModalOne(false);
    setOpenModalTwo(false);
    setTokenReward(false);
  };

  useEffect(() => {
    if (!start) {
      getSelectedData();
    }
  }, [start]);

  return (
    <Container>
      <Title>
        <img src={StepTwo} width="65%"></img><br/><br/>
        <LogoIcon src={FreedomLogo} alt="freedom"/><br/>
      </Title>
      <Content>Tell us what you like!</Content>
      <Grid>{renderItem}</Grid>
      {errMsg && <Alert>{errMsg}</Alert>}

      <Submit>
        <ButtonField color={
          showButton ? 'preference' : 'grey'
        } onClick={submitCategories}>
          Done
        </ButtonField>
      </Submit><br/><br/>

      {tokenReward ? 
        (<ModalOneBtn
          openModal={openModalOne}
          closeModal={closeModal}
          message1={'You have been rewarded 200 tokens.'}
          message2={'Thank for you choosing your shopping preferences!'}
          hasBtn={false}
          isSmall={true}
        />
        )
        :
        (<ModalOneBtn
          openModal={openModalOne}
          closeModal={closeModal}
          message1={'Thank for you choosing your shopping preferences!'}
          hasBtn={false}
          isSmall={true}
        />)
      }
      <ModalOneBtn
        openModal={openModalTwo}
        closeModal={closeModal}
        message1={
          hasSelected 
            ? 'You need to choose at least one category.' 
            : 'Choose only your top 4 categories.'
        }
        hasBtn={false}
        isSmall={true}
      />
    </Container>
  );
};

export default ShoppingPreference;
