import styled from 'styled-components';

export const AccountGamesTokensContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GamesSubContainer = styled.div`
  width: 50%;
  min-height: 100px;
  height: fit-content;

  .userDisplay {
    margin-left: 1em;
  }

  .profileImage {
    background-color: gray;
    border-radius: 0.25em;
    margin: 0.25em;
    border: 1px solid black;
    width: 50px;
    height: 50px;
  }

  span {
    font-weight: bold;
  }
`;

export const GamesLevel = styled.div`
  margin: 1em;
  border-radius: 0.5em;
  padding: 1em;
  max-width: 360px;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 50%);
`;

export const GamesLeaderboardItem = styled.div`

`;

export const GamesMissionItem = styled.div`

`;

export const Toggle = styled.div`
  padding: 1em;
  color: black;
  width: fit-content;
  font-weight: bold;
  user-select: none;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 30%);

  &:hover {
    cursor: pointer;
  }

  &.leaderboard {
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
    background-color: gold;
  }

  &.missions {
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    background-color: white;

    &:hover {
      background-color: cream;
      transition-duration: 0.5s;
    }
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FriendButtonContainer = styled.div`
  input {
    border: 2px solid lightskyblue;
    background-color: white;
    color: lightskyblue;
    font-weight: bold;
    padding: 0.5em;
    border-radius: 1em;
    user-select: none;
    margin: 1em;
    margin-left: 37%;

    &:hover {
      cursor: pointer; 
      background-color: lightskyblue;
      color: white;
    }
  }
`; 