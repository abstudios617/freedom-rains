import React, { useState } from 'react';
import {
  AccountGamesTokensContainer,
  GamesSubContainer,
  GamesLevel,
  FlexRow,
  FlexColumn,
  FriendButtonContainer,
  LeaderboardToggle,
  MissionsToggle
} from './accountGamesTokens.styles';
import LeaderboardItem from './leaderboardItem';
import MissionItem from './missionItem';

const AccountGamesTokens = ({
  name, image, leaders, missions
}) => {
  const [selectLeaderboard, setSelectLeaderboard] = useState(true);

  return (
    <AccountGamesTokensContainer>
      <GamesSubContainer>
        <FlexColumn className="userDisplay">
          <img className="profileImage" src={image} alt="" />
          <span>{name}</span>
        </FlexColumn>
        <GamesLevel>
          Your Level
        </GamesLevel>
      </GamesSubContainer>
      <GamesSubContainer>
        <div>
          {leaders.map((item) => {
            (
              <LeaderboardItem item={item} />
            );
          })}
        </div>
        <div>
          <FlexColumn>
            <FlexRow>
              <LeaderboardToggle
                onClick={
                  () => setSelectLeaderboard(true)
                }
                className={`${selectLeaderboard && 'leaderboard'
                  }`}
                active={selectLeaderboard}
              >
                Leaderboard
              </LeaderboardToggle>
              <MissionsToggle
                onClick={
                  () => setSelectLeaderboard(false)
                }
                className={`${!selectLeaderboard && 'missions'
                  }`}
                active={selectLeaderboard}
              >
                Your Missions
              </MissionsToggle>
            </FlexRow>
            <FriendButtonContainer>
              <input
                type="button"
                value="Add a Friend"
                onClick={() => window.alert('TEST: friend added')}
              />
            </FriendButtonContainer>
          </FlexColumn>
          {missions.map((item) => {
            (
              <MissionItem item={item} />
            );
          })}
        </div>
      </GamesSubContainer>
    </AccountGamesTokensContainer>
  );
};

export default AccountGamesTokens;
