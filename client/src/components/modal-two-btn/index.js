import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { customStyles, searchStyles, homepageStyles, dailyMissionStyles } from '../../constants/modal-styles';
import ButtonField from '../button-field';
import {
  ModalTitle,
  ModalText,
  ModalBtnContainer,
} from '../modal-one-btn/modalOneBtn.styles';
import {
  PromoImg,
  FlexContainer,
  TextContainer,
  XImg,
  ImgContainer,
  DailyMission,
} from './modalTwoBtn.styles';
import greenX from '../../assets/homepage/x-green.png';

const ModalTwoBtn = ({openModal, closeModal, isSmall, title, message1, message2, message3, btnMessage1, btnLink1, btnMessage2, btnLink2, type, image}) => {
  const [modalStyle, setModalStyle] = useState(null);

  Modal.setAppElement('#root');

  useEffect(() => {
    switch (type) {
    case 'homepage':
      setModalStyle(homepageStyles);
      break;
    case 'dailyMission':
      setModalStyle(dailyMissionStyles);
      break;
    }
  }, []);

  return (
    <Modal
      isOpen={openModal}
      style={modalStyle ? modalStyle : (isSmall ? searchStyles : customStyles)}
    >
      {type === 'homepage' && (
        <div>
          <ImgContainer>
            <PromoImg className={'homepageMobileImg'} src={image}/>
          </ImgContainer>
          <FlexContainer>
            <XImg src={greenX} onClick={closeModal}/>
            <TextContainer>
              <ModalTitle className={'homepage'}>{title}</ModalTitle>
              <ButtonField color="lime-green" onClick={btnLink1}>
                {btnMessage1}
              </ButtonField>
              <ButtonField color="primary" onClick={btnLink2}>
                {btnMessage2}
              </ButtonField>
            </TextContainer>
            <PromoImg className={'homepage'} src={image}/>
          </FlexContainer>
        </div>
      )}
      {type === 'dailyMission' && (
        <DailyMission>
          <ModalTitle className={'dailyMission'}>{title}</ModalTitle>
          <ModalText className={'dailyMission'}>{message1}</ModalText>
          <ImgContainer className={'dailyMission'}>
            <PromoImg className={'dailyMission'} src={image}/>
          </ImgContainer>
          <div>
            <ButtonField color="green" onClick={btnLink1}>
              {btnMessage1}
            </ButtonField>
          </div>
          <ButtonField color="gray" onClick={btnLink2}>
            {btnMessage2}
          </ButtonField>
        </DailyMission>
      )}
      {!type && (
        <div>
          <ModalTitle>{title}</ModalTitle>
          <ModalText>{message1}</ModalText>
          <ModalText>{message2}</ModalText>
          <ModalText>{message3}</ModalText>
          <ModalBtnContainer>
            <ButtonField color="primary" onClick={btnLink1}>
              {btnMessage1}
            </ButtonField>
            <ButtonField color="primary" onClick={btnLink2}>
              {btnMessage2}
            </ButtonField>
          </ModalBtnContainer>
          <ButtonField color="red" onClick={closeModal}>
            Close
          </ButtonField>
        </div>
      )}
    </Modal>
  );
};

export default ModalTwoBtn;
