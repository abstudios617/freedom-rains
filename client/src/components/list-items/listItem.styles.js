import styled from 'styled-components';

export const ItemImg = styled.img`
  height: 95px;
  width: 95px;
  border-radius: 20px;
  object-fit: cover;

  @media only screen and (max-width: 480px) {
    height: 105px;
    width: 105px;
  }
`;

export const ItemName = styled.div`
  overflow: hidden;
  margin: 7px 0 5px;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
  font-size: 11px;
`;

export const ItemPic = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 115px;
  }
`;

export const Item = styled.div`
  margin: 0 5px;
  height: 130px;
  width: 130px;
  border-radius: 10px;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 480px) {
    width: 130px;
  }
`;

export const Container = styled.div`
  padding: 10px;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: 3px 3px 12px rgba(100, 100, 100, 0.25);

  @media only screen and (max-width: 480px) {
    width: 350px;
    padding: 4% 0 6%;
    text-align: center;
    border-radius: 30px;
    margin: 20px auto 10px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 5px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  padding: 12px 10px 10px 10px;
  text-align: left;

  @media only screen and (max-width: 480px) {
    padding: 10px 10px 5px 20px;
  }
`;

export const ViewMore = styled.div`
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`;
