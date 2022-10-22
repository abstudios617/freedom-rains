import React from 'react';
import {
  MissionItemStyles
} from './accountGamesTokens.styles';

const MissionItem = ({ title, image, link }) => {
  return (
    <MissionItemStyles>
      <div onClick={link}>
        <img src={image} alt="" />
        <div>
          {title}
        </div>
      </div>
    </MissionItemStyles>
  );
};

export default MissionItem;
