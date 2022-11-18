import React from 'react';
import TvNav from '../../../components/TvNav';
import {
  CategoryHeader,
  Channel,
  ChannelContainer, 
  Header,
} from './subscriptions.styles';
import { Container } from '../../../styles/global.style';
import Carousel from 'react-elastic-carousel';

const Subscriptions = () => {

  const channelArray = ['channel 1', 'channel 2', 'channel 3', 'channel 4', 'channel 5', 'channel 6', 'channel 7', 'channel 8', 'channel 9', 'channel 10']; 
  const categories = ['Travel', 'Fitness', 'Music', 'Beauty', 'Gaming', 'Anime', 'Comedy', 'Business', 'Finance', 'Inspirational',];
    
  return (
    <Container>
      <TvNav />
      <Header>Subscriptions</Header>
      {
        categories.map((category, i) => (
          <ChannelContainer key={i}>
            <CategoryHeader>{category}</CategoryHeader>
            <Carousel itemsToShow={3}>
              {channelArray.map((channelName, j) => (
                <Channel key={j}>
                  <img src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc" alt="channel" />
                  <span>{channelName}</span>
                </Channel>
              ))}
            </Carousel>
          </ChannelContainer>
        ))
      }
    </Container>
  );
};

export default Subscriptions;
