import React, { useState } from 'react';
import {
  AccountGamesTokensContainer,
  GamesSubContainer,
  GamesLevel,
  ProgressBar,
  FlexRow,
  FlexColumn,
  FriendButtonContainer,
  EarnTokensButtonContainer,
  LeaderboardToggle,
  MissionsToggle,
  MissionsTitle
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
            {
              (selectLeaderboard) ? (
                <FriendButtonContainer>
                  <input
                    type="button"
                    value="Add a Friend"
                    onClick={() => window.alert('TEST: friend added!')}
                  />
                </FriendButtonContainer>
              ) : (
                <>
                  <EarnTokensButtonContainer>
                    <input
                      type="button"
                      value="Play Games to Earn Tokens"
                      onClick={() => window.alert('TEST: tokens earned!')} 
                    />
                  </EarnTokensButtonContainer>
                  <MissionsTitle>
                    Progress
                  </MissionsTitle>
                  <ProgressBar>
                    Your Progress
                  </ProgressBar>
                </>
              )
            }
            <MissionsTitle>
              Mission List
            </MissionsTitle>
            <div>
              {selectLeaderboard && leaders.map((item) => {
                const { index, position, points, user } = item;
                const { name, image, link } = user;
                return (
                  <LeaderboardItem 
                    key={index}
                    position={position}
                    points={points}
                    name={name}
                    image={image}
                    link={link}
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
            <span style={{ marginTop: '2.5em', width: '400px', color: 'gray' }}>
              The Freedom Community is powered by Community Tokens! <br/><br/>
              Complete tasks, missions, and share Freedom with you friends to earn tokens to unlock new games,
              EXCLUSIVE creator content, and cool new features in the app!
            </span>
          </FlexColumn>
        </>
      </GamesSubContainer>
    </AccountGamesTokensContainer>
  );
};

export default AccountGamesTokens;
