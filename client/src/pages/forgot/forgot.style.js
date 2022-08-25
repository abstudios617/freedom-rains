import styled from 'styled-components';

export const Submit = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column-reverse;
  margin-top: 20px;
`;

export const ForgotText = styled.div`
  font-size: 20px;
  line-height: 25px;
  margin-top: 30px;
`;

export const Subtitle = styled.div`
  font-family: 'Montserrat', sans-serif;                                         
  font-style: Bold;
  font-size: 20px;
  line-height: 28px;
`;

export const Resend = styled.div`
  width: 203px;
  height: 27px;
  font-family: 'Montserrat', sans-serif;                
  font-weight: normal;
  font-size: 21px;
  line-height: 27px;
  color: #3c4044;
  text-decoration: underline;
  text-underline-offset: 4px;
  &:hover{
    cursor: pointer;
  }
`;
