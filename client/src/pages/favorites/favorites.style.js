import styled from 'styled-components';

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

export const ImgBox = styled.div`
  width: 150px;
  height: 150px;
  margin: 15px auto;
  display: grid;
  align-items: center;
  cursor: pointer;
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 70px 0;

  & > div {
    width: 200px;
  }

  button {
    padding: 10px;
    margin-bottom: 10px;
    width: 150px;
  }

  @media only screen and (max-width: 480px) {
    & > div {
      width: 100%
    }
  }


`;

export const NotAvailable = styled.div`
  color: #fff;
  background: #49a429;
  padding: 3% 5%;
  margin: 0 5%;
  width: 300px !important;
  border: none !important;
  font-weight: 700;
  justify-content: center;
  display: flex !important;
  height: 100px !important;
  align-items: center;
`;
