import React from 'react';
import { LikeItemStyles } from './accountLikes.styles';
import trashIcon from '../../assets/icons/trash-solid.svg';

const LikeItem = ({
  key, name, desc, image, link
}) => {
  return (
    <LikeItemStyles>
      <div className="likeMain" onClick={() => console.log(link)} key={key}>
        <img className="likeMainImage" src={image} alt="" />
        <div className="likeTop" style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="likeTopText">
            {name}
          </div>
          &nbsp;
          <div onClick={() => window.alert('TEST: like item deleted')}>
            <img className="likeTopDelete" src={trashIcon} alt="" />
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
