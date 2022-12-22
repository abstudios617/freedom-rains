import React from 'react';
import {
  MissionItemStyles
} from './accountGamesTokens.styles';

const MissionItem = ({ 
  key, title, image, link 
}) => {
  return (
    <MissionItemStyles>
      <div className="missionItemMain" onClick={() => console.log(link)} key={key}>
        <img src={image} alt="" />
        <div className="missionItemText">
          {title}
        </div>
      </div>
    </MissionItemStyles>
  );
};

export default MissionItem;
