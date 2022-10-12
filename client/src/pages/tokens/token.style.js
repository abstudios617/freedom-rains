import styled from 'styled-components';

export const Subcontent = styled.div`
  line-height: 32px;
  margin-top: 10px;
`;

export const Footer = styled.div`
  display:block;
  text-align:center;
  margin-top: 30px;
  margin-bottom: 60px;
  line-height: 2;
  & > span{
    max-width: 20rem;
    line-height: 2;
  }
`;

export const Container = styled.div`
  padding: 20px;
`;

export const Subtitle = styled.div`
  font-weight: 800;
  font-style: normal;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;  
`;

export const Complete = styled.div`
  color: #49a429;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Task = styled.span`
  color: #000;
  font-size: 15px;
  margin-bottom: 10px;
  cursor: pointer;

  &.complete {
    color: #49a429;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const ImgContainer = styled.img`
  display:block;
  margin-left:auto;
  margin-right: auto;
  width: 238px;
  height: 238px;
`;

export const Missions = styled.img`
  display:block;
  margin-left:auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 190px;
  height: 20px;
`;

export const Disclaimer = styled.div`
  color: #000;
  font-size: 15px;
  margin-top: 10px;
`;

export const LeftBtn = styled.button`
  position:absolute;
  top: 30%;
  left: 37.5%;
  border: none;
  background: none;
`;

export const RightBtn = styled.button`
  position:absolute;
  top: 30%;
  right: 37.5%;
  border: none;
  background: none;

`;

export const Arrows = styled.img`
  width: 50px;
  height: 50px;
`;
