import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {
  customStyles,
  searchStyles,
  gamesStyles,
  homepageStyles,
} from '../../constants/modal-styles';
import ButtonField from '../button-field';
import {
  ModalTitle,
  ModalText,
  ModalBtnContainer,
  Content,
  Icon,
  VideoContainer,
  HomepageBtnContainer,
} from './modalOneBtn.styles';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';

const ModalOneBtn = ({
  openModal,
  closeModal,
  isSmall,
  title,
  message1,
  message2,
  message3,
  hasBtn,
  btnMessage,
  btnLink,
  type,
  videoLink,
  isCoupon,
}) => {
  Modal.setAppElement('#root');

  const [modalStyle, setModalStyle] = useState(null);

  useEffect(() => {
    switch (type) {
    case 'homepage':
      setModalStyle(homepageStyles);
      break;
    case 'games':
      setModalStyle(gamesStyles);
      break;
    default: 
      isSmall ? setModalStyle(searchStyles) : setModalStyle(customStyles);
    }
    

  }, []);


  return (
    <Modal
      isOpen={openModal}
      style={modalStyle}
    >
      {!type && (
        <>
          <Content>
            <Icon>
              <CheckCircleOutlined fontSize="large" sx={{ color: 'white' }} />
            </Icon>
            <ModalTitle className={isCoupon && 'coupon'}>{title}</ModalTitle>
            <ModalText>{message1}</ModalText>
            <ModalText>{message2}</ModalText>
            <ModalText>{message3}</ModalText>
          </Content>
          {hasBtn && (
            <ModalBtnContainer className={isCoupon && 'coupon'}>
              <ButtonField color="primary" onClick={btnLink}>
                {btnMessage}
              </ButtonField>
              <ButtonField color="green3" onClick={closeModal}>
                Done
              </ButtonField>
            </ModalBtnContainer>
          )}
          {!hasBtn && (
            <ButtonField color="green3" onClick={closeModal}>
              Done
            </ButtonField>
          )}
        </>
      )}
      {type === 'homepage' && (
        <div>
          <VideoContainer>
            <iframe
              src={videoLink}
              title={'YouTube video player'}
              frameBorder={'0'}
              allow={
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              }
              allowFullScreen
            />
          </VideoContainer>
          <ModalTitle className={'homepageVideo'}>{title}</ModalTitle>
          <ModalText className={'homepageVideo'}>{message1}</ModalText>
          <HomepageBtnContainer>
            <ButtonField color="green" onClick={btnLink}>
              {btnMessage}
            </ButtonField>
          </HomepageBtnContainer>
        </div>
      )}
      {(type === 'games') && (
        <div>
          <ModalTitle className={'games'}>{title}</ModalTitle>
          <ModalText className={'gamesErr'}>{message2}</ModalText>
          <ModalBtnContainer className={'games'}>
            <ButtonField color="secondary" onClick={closeModal}>
              Close
            </ButtonField>
            <ButtonField color="primary" onClick={btnLink}>
              {btnMessage}
            </ButtonField>
          </ModalBtnContainer>
        </div>
      )}
    </Modal>
  );
};

export default ModalOneBtn;
