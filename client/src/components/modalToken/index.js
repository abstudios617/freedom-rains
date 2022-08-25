import React from 'react';
import Modal from 'react-modal';
import { tokenStyles } from '../../constants/modal-styles';
import { createGlobalStyle } from 'styled-components';
import {
  ModalTitle,
  ModalImage,
  ModalBtnContainer,
  ModalMessage,
  Arrows,
  CancelStyle,
  ModalLeftBtn,
  ModalRightBtn,
  ModalCancel
} from './Token.styles';
import 'react-responsive-modal/styles.css';
import Arrow_Right from '../../assets/tokens/arrow_right.png';
import Arrow_Left from '../../assets/tokens/arrow_left.png';
import FirstStep from '../../assets/tokens/firststep.png';
import SecStep from '../../assets/tokens/secstep.png';
import LastStep from '../../assets/tokens/laststep.png';
import Cancel from '../../assets/tokens/cancel.png';

const GlobalStyle = createGlobalStyle`
  table{
    width: 75%;
  }
  td{
    text-align: left;
    line-height: 2;
  }

`;

const ModalTokens = ({
  openToken,
  openTokenTwo,
  openTokenThree,
  title,
  message1,
  btnLink2,
  btnLink3,
  handleClose,
  handleTokenTwoB,
  handleTokenThreeB
}) => {
  Modal.setAppElement('#root');
  return (
    //Token 1
    <div>
      <GlobalStyle />
      <Modal isOpen={openToken} style={tokenStyles}>
        <ModalBtnContainer>
          <ModalTitle>{title}</ModalTitle><br/>
          <ModalMessage>{message1}</ModalMessage>
          <table>
            <tr>
              <td>1️⃣ Fill out Account Info</td>
              <th>+200</th>
            </tr>
            <tr>
              <td>🛍 Fill out Shopping Preferences</td>
              <th>+200</th>
            </tr>
            <tr>
              <td>🗒 Compelte Sign Up</td>
              <th>+200</th>
            </tr>
          </table>
          <ModalCancel onClick ={handleClose}>
            <CancelStyle src={Cancel}></CancelStyle>
          </ModalCancel>
          <ModalRightBtn onClick={btnLink2}>
            <Arrows src={Arrow_Right}></Arrows>
          </ModalRightBtn>
        </ModalBtnContainer>
        <ModalImage src={FirstStep}></ModalImage>
      </Modal>
      
      {/*Token 2 here*/}

      <Modal isOpen={openTokenTwo} style={tokenStyles}>
        <ModalBtnContainer>
          <ModalTitle>{title}</ModalTitle><br/>
          <ModalMessage>{message1}</ModalMessage>
          <ModalCancel onClick ={handleClose}>
            <CancelStyle src={Cancel}></CancelStyle>
          </ModalCancel>
          <ModalLeftBtn onClick={handleTokenTwoB}>
            <Arrows src={Arrow_Left}></Arrows>
          </ModalLeftBtn>
          <table>
            <tr>
              <td>🎮 Play Arcade Games!</td>
              <th>+200</th>
            </tr>
            <tr>
              <td>🏷 Favorite Local Deals</td>
              <th>+50</th>
            </tr>
            <tr>
              <td>🎁 Favorite Local Productsp</td>
              <th>+50</th>
            </tr>
          </table>
          <ModalRightBtn onClick={btnLink3}>
            <Arrows src={Arrow_Right}></Arrows>
          </ModalRightBtn>
        </ModalBtnContainer>
        <ModalImage src={SecStep}></ModalImage>
      </Modal>
      
      {/*Token 3 here*/}
      <Modal isOpen={openTokenThree} style={tokenStyles}>
        <ModalBtnContainer>
          <ModalTitle>{title}</ModalTitle><br/>
          <ModalMessage>{message1}</ModalMessage>
          <ModalCancel onClick ={handleClose}>
            <CancelStyle src={Cancel}></CancelStyle>
          </ModalCancel>
          <ModalLeftBtn onClick={handleTokenThreeB}>
            <Arrows src={Arrow_Left}></Arrows>
          </ModalLeftBtn>
          <table>
            <tr>
              <td>🎮 Unlock Exclusive Games</td>
              <th>use 250</th>
            </tr>
            <tr>
              <td>📹 Unlock Exclusive Creator Contents</td>
              <th>use 250</th>
            </tr>
            <tr>
              <td>🎤 Unlock Exclusive Music & Podcasts</td>
              <th>use 250</th>
            </tr>
            <tr>
              <td>🎁 Unlock Exclusive Deals</td>
              <th>use 250</th>
            </tr>
          </table>
        </ModalBtnContainer>
        <ModalImage src={LastStep}></ModalImage>
      </Modal>
    </div>
  );
};

export default ModalTokens;
