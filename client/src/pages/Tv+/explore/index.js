import React from 'react';
import TvNav from '../../../components/TvNav';
import { Container } from '../../../styles/global.style';
import {Header, NewVideos, Title, Videos } from '../tv.style';
import {VideoFilter} from '../../../components/video-filter';
import Ad from '../../../components/ad';
import { Categories, Category, Img, Tag, Tags, Text } from './explore.style';

const TvExplore = () => {
  return (
    <Container>
      <TvNav />
      <Ad
        btnColor="black"
        adText="Invest. Earn Equity. Build The Future."
        btnText="Invest In Us"
        url="https://netcapital.com/companies/above-beyond"
      />
      <Categories>
        {Array(8).fill(0).map((index) => (
          <Category key={index}>
            <Img src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/11/05/b32a8a5c-450c-47a6-8b5a-f0131bb916fd/gamespot"/>
            <Text>Gaming</Text>
          </Category>
        ))}
      </Categories>
      <Tags>
        <Tag>New Videos</Tag>
        <Tag>On Trend</Tag>
        <Tag>Podcast</Tag>
        <Tag>Vlog</Tag>
        <Tag>Musicians</Tag>
      </Tags>
      <NewVideos>
        <Header>
          <Title>Travel</Title>
        </Header>
        <Videos>
          {Array(6).fill(0).map((index) => (
            <VideoFilter key={index} />
          ))}
        </Videos>
        <Header>
          <Title>Music</Title>
        </Header>
        <Videos>
          {Array(6).fill(0).map((index) => (
            <VideoFilter key={index} />
          ))}
        </Videos>
        <Header>
          <Title>Comedy</Title>
        </Header>
        <Videos>
          {Array(6).fill(0).map((index) => (
            <VideoFilter key={index} />
          ))}
        </Videos>
      </NewVideos>
    </Container>
  );
};

export default TvExplore;
