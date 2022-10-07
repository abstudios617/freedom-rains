import React from 'react';
import { 
  AccountGamesTokensContainer, 
  GamesSubContainer,
  GamesLevel,
  GamesLeaderboardItem,
  GamesMissionItem,
  Toggle,
  FlexRow,
  FlexColumn,
  FriendButtonContainer
} from './accountGamesTokens.styles';

const AccountGamesTokens = ({
  name, image, leaders, missions
}) => {
  return (
    <AccountGamesTokensContainer>
      <GamesSubContainer>
        <FlexColumn className="userDisplay">
          <img className="profileImage" src={image} alt="" />
          <span>{name}</span>
        </FlexColumn>
        <GamesLevel>
          Your Level (TEST)
        </GamesLevel>
      </GamesSubContainer>
      <GamesSubContainer>
        <div>
          {leaders.map((item) => {
            (
              <GamesLeaderboardItem>
                {item}
              </GamesLeaderboardItem>
            );
          })}
        </div>
        <div>
          <FlexColumn>
            <FlexRow>
              <Toggle className="leaderboard">
                Leaderboard
              </Toggle>
              <Toggle className="missions">
                Your Missions
              </Toggle>
            </FlexRow>
            <FriendButtonContainer>
              <input 
                type="button"
                value="Add a Friend"
              />
            </FriendButtonContainer>
          </FlexColumn>
          {missions.map((item) => {
            (
              <GamesMissionItem>
                {item}
              </GamesMissionItem>
            );
          })}
        </div>
      </GamesSubContainer>
    </AccountGamesTokensContainer>
  );
};

export default AccountGamesTokens;
