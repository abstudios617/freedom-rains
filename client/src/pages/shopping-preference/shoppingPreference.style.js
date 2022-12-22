import styled from 'styled-components';

export const Content = styled.div`
  font-size: 24px;
  font-family: 'Montserrat',sans-serif;
  font-weight: bold;
  line-height: 32px;
  margin: 20px 0;
  text-align: center;
`;

export const Update = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-weight: 700;
  margin: 100px 0;
  text-align: center;
  color: #000;
`;

export const UpdateToken = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-weight: 700;
  margin-top: 100px;
  text-align: center;
  color: #000;
  margin-bottom: -50px;
`;

export const ModalClass = styled.div`
  margin-top: 150px;
  padding: 20px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CategoryCircle = styled.div`
  width: 150px;
  margin: 0 2px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  
  &.categoryCircleSelected {
    opacity: 60%;
    transition: opacity 0.5s;
  }
`;

export const Submit = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
  margin-top: 20px;
`;

export const Name = styled.div`
  background: white;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  font-size:16px;
`;

export const IconContainer = styled.div`
  position: relative;
  top: -138px;
  right: -50px;
`;

export const PreferenceCheckmarkContainer = styled.div`
  z-index: 999;
  margin-top: -2em;
  position: relative;
  top: 45px;
  left: 105px;
  background-color: #49a429;
  background-color: rgba(73, 164, 41, 70%);
  border: 1px solid rgba(0, 0, 0, 70%);
  width: 30px;
  height: 30px;
  border-radius: 1em;
`;
