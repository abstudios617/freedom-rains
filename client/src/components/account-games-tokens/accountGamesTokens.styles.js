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

export const LeaderboardItemStyles = styled.div`
  display: flex;
  flex-direction: column;

  .lbItemMain {
    border-radius: 1em;
    border: 2px solid gray;
    padding: 0.5em;
    margin: 0.25em;
    display: flex;
    flex-direction: row;
    width: 16em;

    background-color: ${
      (props) => (
        props.position === 1 ? '#49a429' :
          props.position === 2 ? 'skyblue' :
            props.position === 3 ? 'pink' :
              'lightgray' 
      )
    };
  }

  .lbItemMain span {
    width: 50%;
  }

  .lbItemUserDetails {
    text-align: right;
  }

  .lbItemIndex {
    margin-bottom: 0.25em;
  }

  img {
    width: 3em;
    height: 3em;
    border: 1px solid black;
    background-color: gray;
  }

  .lbItemName {
    font-weight: bold;
    font-size: large;
  }

  .lbItemPoints {
    font-size: small;
  }
`;

export const MissionItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  
  .missionItemMain {
    border: 2px solid gray;
    border-radius: 1em;
    padding: 0.5em;
    margin: 0.5em;
    background-color: lightgray;
    width: 18em;

    display: flex;
    flex-direction: row;
  }

  img {
    width: 2em;
    height: 2em;
    background-color: #49a429;
    border: none;
    user-select: none;
    padding: 0.25em;
    margin: 0.125em;
  }

  .missionItemText {
    font-weight: bold;
    padding: 0.25em;
    justify-content: center;
  }
`;

export const LeaderboardToggle = styled.div`
  padding: 1em;
  color: black;
  width: fit-content;
  font-weight: bold;
  user-select: none;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 30%);
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;

  &:hover {
    cursor: ${(props) => props.active ? 'default' : 'pointer'};
    transition-duration: 0.5s;
  }

  &.leaderboard {
    background-color: gold;
  }
`;

export const MissionsToggle = styled.div`
  padding: 1em;
  color: black;
  width: fit-content;
  font-weight: bold;
  user-select: none;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 30%);
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;

  &:hover {
    cursor: ${(props) => props.active ? 'pointer' : 'default'};
    transition-duration: 0.5s;
  }

  &.missions {
    background-color: gold;
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
