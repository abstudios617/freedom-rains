import React from 'react';
import { LikeItemStyles } from './accountLikes.styles';

const LikeItem = ({
  key, name, desc, image, link
}) => {
  return (
    <LikeItemStyles>
      <div onClick={() => console.log(link)} key={key}>
        <img src={image} alt="" />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            {name}
          </div>
          &nbsp;
          <div>
            {'X'}
          </div>
        </div>
        <div>
          {desc}
        </div>
      </div>
    </LikeItemStyles>
  );
};

export default LikeItem;
