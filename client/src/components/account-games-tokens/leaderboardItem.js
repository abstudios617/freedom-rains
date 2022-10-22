import React from 'react';
import {
  LeaderboardItemStyles
} from './accountGamesTokens.styles';

const LeaderboardItem = ({
  key, position, points, name, image, link
}) => {
  return (
    <LeaderboardItemStyles position={position}>
      <div className="lbItemMain" 
        onClick={() => console.log(link)} 
        key={key}
      >
        <span>
          <div className="lbItemIndex">#{position}</div>
          <img src={image} alt="" />
        </span>
        <span className="lbItemUserDetails">
          <div className="lbItemName">
            {name}
          </div>
          <div className="lbItemPoints">
            {points}
          </div>
        </span>
      </div>
    </LeaderboardItemStyles>
  );
};

export default LeaderboardItem;
