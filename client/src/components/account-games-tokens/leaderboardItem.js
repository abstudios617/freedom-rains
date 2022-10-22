import React from 'react';
import {
  LeaderboardItemStyles
} from './accountGamesTokens.styles';

const LeaderboardItem = ({
  key, position, points, name, image, link
}) => {
  return (
    <LeaderboardItemStyles>
      <div onClick={() => console.log(link)} key={key}>
        <div>#{position}</div>
        <img src={image} alt="" />
        <div>
          {name}
        </div>
        <div>
          {points}
        </div>
      </div>
    </LeaderboardItemStyles>
  );
};

export default LeaderboardItem;
