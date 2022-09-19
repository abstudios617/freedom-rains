import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {
  customStyles,
  searchStyles,
  gamesStyles,
  homepageStyles,
  contactStyles,
} from '../../constants/modal-styles';
import InputField from '../../components/input-field';
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
import {Alert} from '../../styles/global.style';
import DropDown from '../dropdown/index';
import { addEvent } from '../../requests/analytics-request';
import { contactUs } from '../../requests/api-request';
import { contactIndustry } from '../../constants/contact';
import { useForm } from 'react-hook-form';

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
    case 'contact':
      setModalStyle(contactStyles);
      break;
    default: 
      isSmall ? setModalStyle(searchStyles) : setModalStyle(customStyles);
    }
    

  }, []);

  const [setSentContact] = useState(false);
  const [industry, setIndustry] = useState(null);
  const [service] = useState(null);
  const { register, handleSubmit, getValues, errors } = useForm();

  const sendContactInfo = async () => {
    const values = getValues();

    addEvent({
      event: 'Connect',
      props: {
        action: 'Form',
        values: values,
      },
    });

    values.service=service;
    values.industry=industry;
    await contactUs(values);
    setSentContact(true);
  };

  const handleIndustryChange = (e) => {
    setIndustry(e.target.value);
  };

  const industryDropdown = contactIndustry.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

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
      {(type === 'contact') && (
        <div>
          <ModalTitle className={'contact'}>{title}</ModalTitle>
          <InputField
            name="first_name"
            placeHolder="First Name*"
            type="contact"
            register={register({ required: true })}
          />
          {errors.first_name ? (
            <Alert>Please enter your first name</Alert>
          ) : null}
          <InputField
            name="last_name"
            placeHolder="Last Name*"
            type="contact"
            register={register({ required: true })}
          />
          {errors.last_name ? (
            <Alert>Please enter your last name</Alert>
          ) : null}
          <InputField
            name="email"
            placeHolder="Email Address*"
            type="contact"
            register={register({
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email ? (
            <Alert>
              Please enter your email address
            </Alert>
          ) : null}
          <InputField
            name="phone"
            placeHolder="Phone Number"
            type="contact"
            register={register({
              required: false,
              pattern: /^[0-9]*$/,
              maxLength: 10,
            })}
          />
          {errors.phone ? (
            <Alert>
              Please enter your phone number
            </Alert>
          ) : null}
          <InputField
            name="company"
            placeHolder="Company Name*"
            type="contact"
            register={register({
              required: true,
            })}
          />
          <InputField
            name="website"
            placeHolder="Website URL"
            type="contact"
            register={register({ required: false })}
          />
          <ModalText className={'contact'}>{'What Industry are you in?'}</ModalText>
          <DropDown
            name="contact"
            onChange={handleIndustryChange}
            ref={register({
              required: true,
            })}
            label="Website URL"
            list={industryDropdown}
          >
          </DropDown>
          <ModalText className={'contact'}>{'What service do you need?'}</ModalText>
          <InputField
            name="service"
            type="contactService"
            register={register({ required: false })}
          />
          <ModalText className={'contact'}>{'Leave a Message'}</ModalText>
          <InputField
            name="message"
            type="contactMessage"
            register={register({ required: false })}
          />
          <ModalBtnContainer className={'contact'}>
            <ButtonField
              color="submitGreen"
              onClick={handleSubmit(sendContactInfo)}
            >
              Submit
            </ButtonField>
          </ModalBtnContainer>
        </div>
      )}
    </Modal>
  );
};

export default ModalOneBtn;
