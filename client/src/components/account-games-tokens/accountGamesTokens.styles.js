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
    width: 150px;
    height: 150px;
  }

  span {
    font-weight: bold;
  }
`;

export const GamesLevel = styled.div`
  margin: 1em;
  border-radius: 0.5em;
  padding: 1em;
  max-width: 330px;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 50%);
`;

export const ProgressBar = styled.div`
  margin: 1em;
  border-radius: 0.5em;
  padding: 1em;
  max-width: 300px;
  box-shadow: 0 2px 3px rgba(51, 51, 51, 50%);
  margin-bottom: 5%;
`;

export const LeaderboardItemStyles = styled.div`
  display: flex;
  flex-direction: column;

  .lbItemMain {
    border-radius: 1em;
    padding: 0.75em 2.25em;
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

    &:hover {
      box-shadow: 1px 1px 5px 0 #333;
      cursor: pointer;
      transition-duration: 0.5s;
    }
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
`;

export const MissionItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  
  .missionItemMain {
    border-radius: 1em;
    padding: 0.75em 2.25em;
    margin: 0.5em;
    background-color: lightgray;
    width: 18em;

    display: flex;
    flex-direction: row;

    &:hover {
      box-shadow: 1px 1px 5px 0 #333;
      cursor: pointer;
      transition-duration: 0.5s;
    }
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

export const MissionsTitle = styled.div`
  font-size: large;
  font-weight: bold;
  padding: 1.5em;
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
    border: 2px solid rgb(0, 150, 255);
    background-color: white;
    color: rgb(0, 150, 255);
    font-weight: bold;
    padding: 0.75em;
    border-radius: 1em;
    user-select: none;
    margin: 2em 1em;
    margin-bottom: 5%;

    &:hover {
      cursor: pointer; 
      background-color: rgb(0, 150, 255);
      color: white;
      transition-duration: 0.25s;
    }
  }
`; 

export const EarnTokensButtonContainer = styled.div`
  input {
    border: 2px solid #49a429;
    background-color: white;
    color: #49a429;
    font-weight: bold;
    padding: 0.75em;
    border-radius: 1em;
    user-select: none;
    margin: 1em;
    margin-top: 2em;

    &:hover {
      cursor: pointer; 
      background-color: #49a429;
      color: white;
      transition-duration: 0.25s;
    }
  }
`;
