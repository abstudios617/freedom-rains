import React, { useState } from 'react';
import { showsConstant } from '../../constants/shows';
import ModalOneBtn from '../../components/modal-one-btn';
import ModalTwoBtn from '../../components/modal-two-btn';
import { 
  Subcontent, 
  Content,
  Show,
  App,
} from './watch.style';
import {Container, LinkText, Title} from '../../styles/global.style';

const Watch = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showDescript, setShowDescript] = useState(false);
  const [isRoku, setIsRoku] = useState(false);
  const [isAmazon, setIsAmazon] = useState(false);

  const openModal = (data) => {
    setModalIsOpen(true);
    setShowName(data.show);
    setShowDescript(data.description);
    setIsRoku(data.roku);
    setIsAmazon(data.amazon);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openUrl = (type) => {
    const url =
      type === 'roku'
        ? 'https://channelstore.roku.com/en-ot/details/25d1bb353a476399904f57a98b99ab6e/freedom-tv-plus'
        : 'https://www.amazon.com/dp/B08X3Y6X5B/ref=sr_1_3?dchild=1&qid=1613992305&refinements=p_4%3A+Inc.%5CcAbove+%26amp%3Bamp%3B+Beyond+Studios&s=mobile-apps&sr=1-3';

    closeModal();
    window.open(url);
  };

  const showGuide = showsConstant.map((item) => {
    return (
      <Content key={item.show}>
        <Show
          className={'showName'}
          onClick={() => openModal(item)}
        >
          <LinkText>{item.show}</LinkText>
        </Show>
        <App>
          {item.roku ? <span>&#10004;</span> : null}
        </App>
        <App>
          {item.amazon ? <span>&#10004;</span> : null}
        </App>
      </Content>
    );
  });

  return (
    <Container>
      <Title>
        <span>Freedom Tv+ Tv Guide</span>
      </Title>
      <Subcontent>
        <Content>
          <Show className={'header'}>
            <strong>Creators</strong>
          </Show>
          <App className={'header'}>
            <strong>Roku Tv</strong>
          </App>
          <App className={'header'}>
            <strong>Amazon Fire Tv</strong>
          </App>
        </Content>
        {showGuide}
      </Subcontent>
      <ModalTwoBtn
        openModal={modalIsOpen && isRoku && isAmazon}
        closeModal={closeModal}
        title={showName}
        message1={showDescript}
        btnMessage1={'Download Roku Tv App'}
        btnLink1={() => openUrl('roku')}
        btnMessage2={'Download Amazon Fire Tv App'}
        btnLink2={() => openUrl('amazon')}
      />
      <ModalOneBtn
        openModal={modalIsOpen && ((isRoku && !isAmazon) || (!isRoku && isAmazon))}
        closeModal={closeModal}
        title={showName}
        message1={showDescript}
        hasBtn={true}
        btnMessage={isRoku ? 'Download Roku Tv App': 'Download Amazon Fire Tv App'}
        btnLink={() => isRoku ? openUrl('roku') : openUrl('amazon')}
      />
      <ModalOneBtn
        openModal={modalIsOpen && !isAmazon && !isRoku}
        closeModal={closeModal}
        title={showName}
        message1={showDescript}
        hasBtn={false}
      />
    </Container>
  );
};

export default Watch;
