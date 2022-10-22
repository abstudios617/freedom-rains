import React from 'react';
import {
  LeaderboardItemStyles
} from './accountGamesTokens.styles';

const LeaderboardItem = ({ position, points, user }) => {
  return (
    <LeaderboardItemStyles>
      <div onClick={user.link}>
        <div>#{position}</div>
        <img src={user.image} alt="" />
        <div>
          {user.name}
        </div>
        <div>
          {points}
        </div>
      </div>
    </LeaderboardItemStyles>
  );
};

export default LeaderboardItem;
