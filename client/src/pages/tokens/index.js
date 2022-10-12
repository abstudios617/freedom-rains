import React, { useEffect, useState } from 'react';
import { targetPage, getItem } from '../../utils/index';
import { addEvent } from '../../requests/analytics-request';
import { 
  Arrows,
  Subcontent,
  Subtitle,
  Complete,
  Missions,
  Task,
  Disclaimer,
  ImgContainer,
  Footer,
  LeftBtn,
  RightBtn
} from './token.style';
import { Container, Title } from '../../styles/global.style';
import ModalTokens from '../../components/modalToken';
import StepThree from '../../assets/account/step_three.png';
import temp from '../../assets/tokens/temp.png';
import FirstMission from '../../assets/tokens/first_mission.png';
import ButtonField from '../../components/button-field';
import Arrow_Right from '../../assets/tokens/arrow_right.png';
import Arrow_Left from '../../assets/tokens/arrow_left.png';


const Tokens = ({ isLoggedIn, updateTokens }) => { 
  const [accountComplete, setAccountComplete] = useState(false);
  const [shopComplete, setShopComplete] = useState(false);
  const [ showModal1, setShowModal1 ] = useState(true);
  const [ showModal2, setShowModal2 ] = useState(false);
  const [ showModal3, setShowModal3 ] = useState(false);

  const userData = JSON.parse(getItem('accountInfo'));
  
  const handleClose = () =>{
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(false);
  };

  const TokenOneNext = () => {
    setShowModal2(true);
    setShowModal1(false);
  };

  const TokenTwoNext = () =>{
    setShowModal2(false);
    setShowModal3(true);
  };

  const TokenTwoBack = () =>{
    setShowModal2(false);
    setShowModal1(true);
  };

  const TokenThreeBack = () =>{
    setShowModal2(true);
    setShowModal3(false);
  };

  const checkShopComplete = async () => {
    let items = getItem('tasks');

    if (items) {
      items = JSON.parse(items);
      setShopComplete(items.shop);
    }
  };

  const checkAccountComplete = async () => {
    let items = getItem('tasks');

    if (items) {
      items = JSON.parse(items);
      setAccountComplete(items.account);
    }
  };

  const handleAcctTask = (destination) => {
    addEvent({
      event: 'Token Tasks',
      props: {
        action: 'Click',
        label: 'Filling out all Account info task',
      },
    });

    return accountComplete ? null : targetPage(destination);
  };

  const handleShopPrefTask = (destination) => {
    addEvent({
      event: 'Token Tasks',
      props: {
        action: 'Click',
        label: 'Selecting your Shopping Preference task',
      },
    });

    return shopComplete ? null : targetPage(destination);
  };

  useEffect(() => {
    checkAccountComplete();
  }, [accountComplete]);

  useEffect(() => {
    checkShopComplete();
  }, [shopComplete]);

  if (!isLoggedIn) {
    return (
      <Container>
        <ModalTokens
          openToken={showModal1}
          openTokenTwo={showModal2}
          openTokenThree={showModal3}
          handleClose={handleClose}
          handleTokenTwoB = {TokenTwoBack}
          handleTokenThreeB = {TokenThreeBack}
          btnLink2={TokenOneNext}
          btnLink3={TokenTwoNext}
          title={'Complete Missions to Earn Tokens!'}
          message1={'💰 How to Earn Community Tokens'}
        />
        
        <Title>
          <img src={StepThree} width="65%"></img><br/><br/>
          <span>Congrats &quot;{(userData) ? userData.first_name : 'First Name'}&quot;</span>
        </Title>
        <Subtitle>
          <span>Last step, choose your avatar and get started!</span>
        </Subtitle>

        <LeftBtn onClick={'/'}>
          <Arrows src={Arrow_Left}></Arrows>
        </LeftBtn>
        <RightBtn onClick={'/'}>
          <Arrows src={Arrow_Right}></Arrows>
        </RightBtn>
        <ImgContainer src={temp}></ImgContainer><br/><br/>
        <Missions src={FirstMission}></Missions>
        <Footer>
          <span>
            <u>Community Tokens Blurb:</u> <br/> The Freedom Community is powered by community tokens!<br/>
            Complete tasks & missions to unlock <b>NEW</b> games, <br/><b>EXCLUSIVE</b> creator content, and the <b>BEST</b> deals!
          </span><br/><br/>
          <ButtonField color="mission">
            Finish Your First Mission!
          </ButtonField>
        </Footer>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        <span>How to Earn Tokens</span>
        <Disclaimer>
          Click on a task to go earn tokens
        </Disclaimer>
      </Title>
      <Subcontent>
        <div>
          <strong>Available Tokens:</strong>{' '}
          {updateTokens || getItem('tokens')}
        </div>
        <div>
          <Subtitle>One Time Tasks</Subtitle>
          <Complete>
            Creating an Account - 100 tokens
          </Complete>
          <div onClick={() => handleAcctTask('account')}>
            <Task className={accountComplete && 'complete'}>
              Filling out all Account information - 200 tokens
            </Task>
          </div>
          <div onClick={() => handleShopPrefTask('shopping-preference')}>
            <Task className={shopComplete && 'complete'}>
              Selecting your Shopping Preference - 200 tokens
            </Task>
          </div>
        </div>
      </Subcontent>
    </Container>
  );
};

export default Tokens;
