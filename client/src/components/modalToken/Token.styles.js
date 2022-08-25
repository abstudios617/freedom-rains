import styled from 'styled-components/macro';

export const ModalTitle = styled.div`
  position:relative;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 25px;
  bottom: 15px;
  padding: 5px 30px;
  margin: 10px;
  line-height: 1;
`;

export const ModalMessage = styled.div`
  position:relative;
  text-align: center;
  margin-bottom: 10px;
  margin-top: -20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 0px;
`;


export const ModalText = styled.div`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-align: left;
  font-size: 15px;
  line-height: 2.5;
  
  & >a{
    font-weight: 700;
  }
`;

export const ModalImage = styled.img`
  position: absolute;
  bottom: 10%;
  width: 110px;
  right: 42%;
  align-items:center;


`;

export const ModalBtnContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 0;
  gap:1px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 450px;
  }
`;

export const ModalLeftBtn = styled.button`
  position:absolute;
  top: 50%;
  left: 6%;
  border: none;
  background: none;
`;

export const ModalRightBtn = styled.button`
  position:absolute;
  top: 50%;
  right: 6%;
  border: none;
  background: none;

  @media only screen and (max-width: 600px){
    right: 30%;
    top: 30%;
  }
`;

export const ModalCancel = styled.button`
  position:absolute;
  top: 5%;
  right: 1%;
  border: none;
  background: none;
`;

export const Arrows = styled.img`
  width: 50px;
  height: 50px;
`;

export const CancelStyle = styled.img`
  width: 50px;
  height: 50px;
`;
