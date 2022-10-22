import React from 'react';
import { AccountLikesContainer } from './accountLikes.styles';
import LikeItem from './likeItem';

const AccountLikes = ({ likes }) => {
  console.log('HO: ', likes);
  return (
    <AccountLikesContainer>
      {
        likes.map((item) => {
          const { index, name, description, image, link } = item;
          return (
            <LikeItem
              key={index}
              name={name}
              desc={description}
              image={image}
              link={link}
            />
          );
        })
      }
    </AccountLikesContainer>
  );
};

export default AccountLikes;
