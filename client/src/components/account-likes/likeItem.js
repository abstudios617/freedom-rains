import React from 'react';
import { LikeItemStyles } from './accountLikes.styles';

const LikeItem = ({
  key, name, desc, image, link
}) => {
  return (
    <LikeItemStyles>
      <div className="likeMain" onClick={() => console.log(link)} key={key}>
        <img className="likePicture" src={image} alt="" />
        <div className="likeTop" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="likeTopText">
            {name}
          </div>
          &nbsp;
          <div className="likeTopDelete" onClick={() => window.alert('TEST: like item deleted')}>
            {'X'}
          </div>
        </div>
        <div className="likeBottom">
          {desc}
        </div>
      </div>
    </LikeItemStyles>
  );
};

export default LikeItem;
