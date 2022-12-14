import styled from 'styled-components';

export const BtnField = styled.button`
  border-color: #1988FF;
  border: 1px solid;
  width: 75px;
  height: 35px;
  background: #1988FF;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }

  &.large {
    padding: 12px 32px;
  }

  &.small {
    padding: 8px;
    font-size: 12px;
  }

  &.icons {
    border-radius: 20px;
    padding: 20px 0;
    width: 80px;
  }

  &.primary {
    background: #1988ff;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.newPrimary {
    background: #1988ff;
    color: #fff;
    border-radius: 25px;
    width: fit-content;
    height: 50px;
    padding: 0 1.5em;
    margin-top: 1em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: large;
    position: relative;

    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.secondary {
    background-color: rgb(250, 250, 250, 0.7);
    color: #000;

    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.red {
    background: #b7211a;
    color: #fff;

    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.grey{
    background: #B8B8B8;
    color: white;
    border-radius: 25px;
    width: fit-content;
    height: 50px;
    padding: 0 1.5em;
    margin-top: 1em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: large;
    position: relative;

    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.preference{
    background: #49a429;
    color: #fff;
    border-radius: 25px;
    width: fit-content;
    height: 50px;
    padding: 0 1.5em;
    margin-top: 1em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: large;

    &:hover {
      box-shadow: 0 3px 2px #777;
    }
  }

  &.green {
    background: #49a429;
    color: #fff;

    &:hover {
      box-shadow: 0 3px 2px #777;
    }
  }

  &.newGreen {
    background: #49a429;
    color: #fff;
    border-radius: 25px;
    width: fit-content;
    height: 50px;
    padding: 0 1.5em;
    margin-top: 1em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: large;

    &:hover {
      box-shadow: 0 3px 2px #777;
    }
  }

  &.lime-green {
    background: #8ec90e;
    color: #fff;

    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.black {
    background-color: #000;
    color: #fff;

    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.gray {
    background: #BEC4CD;
    color: #fff;

    &:hover {
      box-shadow: 0 3px 2px #777;
    }
  }

  &.allWhite {
    background-color: #fff;
    color: #559eff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

    &:hover {
      box-shadow: 0 3px 2px #333333;
    }
  }

  &.pink {
    background: #fe00cb;
    color: #fff;

    &:hover {
      transition: padding 0.5s, font-size 0.5s, width 0.5s;
    }
  }

  &.more {
    background: transparent;
    border: 1px solid #559eff;
    color: #559eff;

    &:hover {
      box-shadow: 0 3px 2px #333333;
    }
  }

  &.fav {
    background: #559eff;
    border: 1px solid #fff;
      
    &:hover {
      box-shadow: 0 3px 2px #333333;
    }
  }

  &.started {
    background: #008E3C10;
    color: #008E3C;
    border-radius: 25px;
    width: fit-content;
    height: 50px;
    padding: 0 1.5em;
    margin-top: 1em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: large;
      
    &:hover {
      box-shadow: 0 3px 2px #333333;
    }
  }

  &.darkStarted {
    background: #008E3C;
    color: #fff;
    border-radius: 25px;
    width: fit-content;
    height: 50px;
    padding: 0 1.5em;
    margin-top: 1em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: large;
      
    &:hover {
      box-shadow: 0 3px 2px #333333;
    }
  }

  &.yellow {
    background: #ECDA35;
    color: #000;
      
    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.newYellow {
    background: #ECDA35;
    color: #000;
    border-radius: 25px;
    width: fit-content;
    height: 50px;
    padding: 0 1.5em;
    margin-top: 1em;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: large;

    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.outline {
    width: 40%;
    border: 1px solid black;
    background-color: white;
    
    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.sign-in {
    background: #49a429;
    color: #fff;
    border-radius: 24px;
    font-weight: bold;
    position: relative;
    width: 120px;
    height: 60px;
    font-family: 'Montserrat', sans-serif;
    font-size: large;

    &:hover {
      box-shadow: 0 3px 2px #777;
    }
  }

  &.google{
    font-family: 'Montserrat', sans-serif;                                          
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    line-height: 100%;
    vertical-align: top;
    background-color: #fff;
    border-radius: 30px;
    border: 3px solid #49a429;
    padding: 15px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;

    &:hover {
      box-shadow: 0 3px 2px #777;
    }

    @media only screen and (max-width: 480px) {
      width: 70%;
    }
  }

  &.createAcc{
    background-color: #fff;
    color: #49a429;
    border-radius: 30px;
    border: 3px solid #49a429;
    font-family: 'Montserrat', sans-serif;                                         
    font-weight: bold;
    font-style: bold;
    font-size: 20px;
    padding: 10px 15px;
    height: fit-content;
    width: fit-content;

    &:hover {
      background-color: #49a429;
      color: #fff;
    }
  }

  &.sent{
    background-color: #49A429;
    color: white;
    border-radius: 27px;
    font-family: 'Montserrat', sans-serif;                                           
    font-weight: bold;
    font-size: large;
    line-height: 27px;
    vertical-align: Top;
    height: 60px;
    width: 120px;
    position: relative;

    &:hover {
      box-shadow: 0 3px 2px #777;
    }
  }

  &.create{
    background-color: #49A429;
    color: white;
    border-radius: 27px;
    font-family: 'Montserrat', sans-serif;                                           
    font-weight: bold;
    font-size: large;
    line-height: 27px;
    vertical-align: top;
    height: 60px;
    width: fit-content;
    padding: 0 1em;
    position: relative;
    margin: 3px;
    flex-wrap: wrap;
    white-space: pre;

    &:hover {
      box-shadow: 0 3px 2px #777;
    }
  }

  &.mission{
    background: #49a429;
    color: #fff;
    border-radius: 27px;
    width: fit-content;
    height: 50px;
    padding: 0 1.5em;
    font-size: large;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  
    &:hover {
      box-shadow: 0 3px 2px #777777;
    }
  }

  &.addToCart {
    width: 100px;
    height: auto;
    font-weight: 900;
    font-size: 12px;
    margin: 0px -10px;
    color: white;
  }

  &.share {
    font-weight: 900;
    font-size: 12px;
    height: auto;
    color: white; 
  }

  &.addToLikes {
    margin: 0px 20px;
    font-weight: 900;
    font-size: 12px;
    width: auto;
    color: white; 
    height: auto;
  }

  @media only screen and (max-width: 480px) {
    padding: 10px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    font-family: sans-serif;
    border: none;

    &.primary-inverted {
      background: #fff;
      color: #1988ff;
      border: 1px solid #1988ff;

      &:hover {
        box-shadow: 0 3px 2px #777777;
      }
    }

    &.green2 {
      position: absolute;
      background: #49a429;
      color: #fff;
      border-radius: 25px;
      right: 0px;
      &:hover {
        box-shadow: 0 3px 2px #777777;
      }
    }

    &.green3 {
      width: 100%;
      background: #44B61C;
      color: #fff;
      text-transform: uppercase;
      border-radius: 5px;
      margin-top: 25px;

      &:hover {
        box-shadow: 0 3px 2px #777777;
      }
    }

    &.addToCart {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 10px 20px;
      gap: 10px;
      width: 179px;
      height: 42px;
      background: #559EFF;
      border-radius: 28px;
      flex: none;
      order: 1;
      flex-grow: 0;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      border: none;

      &:hover {
        background: #1988FF;
      }
    }

    &.addToLikes {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 10px 18px;
      width: 179px;
      height: 42px;
      background: #FF524C;
      border-radius: 28px;
      flex: none;
      order: 1;
      flex-grow: 0;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      border: none;
      gap: 10px;
      margin-left: 28px;

      img {
        align-self: center;
      }

      &:hover {
        background: #D92F29;
      }
    }

    &.share {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 10px 158px;
      gap: 10px;
      width: 404px;
      height: 44px;
      background: #828A94;
      border-radius: 28px;
      flex: none;
      order: 3;
      flex-grow: 0;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      margin-top: -10px;
    }
  }
`;
