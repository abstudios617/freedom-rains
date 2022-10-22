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
        <>
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
            <div>
              {selectLeaderboard && leaders.map((item) => {
                const { index, position, points, user } = item;
                return (
                  <LeaderboardItem 
                    key={index}
                    position={position}
                    points={points}
                    name={user.name}
                    image={user.image}
                    link={user.link}
                  />
                );
              })}
            </div>
            <div>
              {!selectLeaderboard && missions.map((item) => {
                const { index, title, image, link } = item;
                return (
                  <MissionItem 
                    key={index}
                    title={title}
                    image={image}
                    link={link}
                  />
                );
              })}
            </div>
          </FlexColumn>
        </>
      </GamesSubContainer>
    </AccountGamesTokensContainer>
  );
};

export default AccountGamesTokens;
