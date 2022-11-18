import styled from 'styled-components';

export const Categories = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  margin-top: 50px;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.div`
  margin: 0 10px;
  width: 180px;
  height: 130px;
  min-width: 180px;
  position: relative;
  :hover {
    cursor: pointer;
    >* {
      opacity: 1;
      color: white;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transition: opacity .5s ease-out;
`;

export const Text = styled.div`
  font-weight: 900;
  font-size: 20px;
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: color .5s ease-out;
`;

export const Tags = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-wrap: nowrap;
    overflow: scroll;
    padding-left: 100px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Tag = styled.div`
  margin: 5px;
  padding: 5px 15px;
  border: solid 1px #559EFF;
  color: #559EFF;
  border-radius: 50px;
  font-weight: 900;
  :hover {
    cursor: pointer;
    background-color: #559EFF;
    color: white;
    box-shadow: 0 3px 2px #777777;
  }
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    white-space: nowrap;
  }
`;
