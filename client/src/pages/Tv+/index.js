import React from 'react';
import TvNav from '../../components/TvNav';
import { Container } from '../../styles/global.style';
import {AddImg, AddMsg, BottomAdd, Header, More, NewVideos, Title, Trending, Videos } from './tv.style';
import {VideoFilter, FeaturedVideo} from '../../components/video-filter';
import Ad from '../../components/ad';
import ButtonField from '../../components/button-field';

const TvPlus = () => {
  // var viewport_width = window.innerWidth;
  return (
    <Container>
      <TvNav />
      <Ad
        btnColor="black"
        adText="Invest. Earn Equity. Build The Future."
        btnText="Invest In Us"
        url="https://netcapital.com/companies/above-beyond"
      />
      <Trending>
        <Header>
          <Title>Trending Channels</Title>
          <More>View All</More>
        </Header>
        <Videos className="trending">
          {Array(4).fill(0).map((index) => (
            <FeaturedVideo key={index}/>
          ))}
        </Videos>
      </Trending>
      <NewVideos>
        <Header>
          <Title>New Videos</Title>
        </Header>
        <Videos>
          {Array(12).fill(0).map((index) => (
            <VideoFilter key={index} />
          ))}
        </Videos>
        <Ad
          btnColor="black"
          adText="Invest. Earn Equity. Build The Future."
          btnText="Invest In Us"
          url="https://netcapital.com/companies/above-beyond"
        />
        <Videos>
          {Array(9).fill(0).map((index) => (
            <VideoFilter key={index} />
          ))}
        </Videos>
      </NewVideos>
      <BottomAdd>
        <AddImg/>
        <AddMsg>
          <h1>Download Freedom TV+</h1>
          <h2>On Amazonfire TV & Roku</h2>
          <ButtonField color="green">learn more</ButtonField>
        </AddMsg>
      </BottomAdd>
    </Container>
  );
};

export default TvPlus;
