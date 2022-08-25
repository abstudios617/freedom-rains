import styled from 'styled-components';

export const Content = styled.div`
  font-size: 22px;
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
  margin: 10px 5px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  

  &.categoryCircleSelected {
    opacity: 50%;
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
