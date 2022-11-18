import React from 'react';
import TvNav from '../../../components/TvNav';
import { Container } from '../../../styles/global.style';
import {Header, NewVideos, Title, Videos, More, BottomAdd, AddImg, AddMsg } from '../tv.style';
import {VideoFilter} from '../../../components/video-filter';
import { Ava, Banner, BannerImg, Bio, ChannelNav, Info, ChannelName, Featured, Left, PlayIcon, Right, VideoTitle, VideoDesc, ShowMore, PlayAll } from './channel.style';
import ButtonField from '../../../components/button-field';
import { Stats, Subscribe } from '../../../components/video-filter/video.styles';
import { PlayCircleOutline } from '@mui/icons-material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Channel = () => {
  
  return (
    <Container>
      <TvNav />
      <Banner>
        <BannerImg src="https://www.wallpapersun.com/wp-content/uploads/2021/02/Akatsuki-Wallpaper-6.jpg"/>
      </Banner>
      <Bio>
        <Ava src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"/>
        <Info>
          <ChannelName>Alaina Pinto</ChannelName>
          <Subscribe>Subscribe</Subscribe>
          <div>
            <Stats>1000 Subscribers</Stats>
          </div>
        </Info>
      </Bio>
      <Featured>
        <Left>
          <PlayIcon>
            <PlayCircleOutline fontSize="large"/>
          </PlayIcon>
        </Left>
        <Right>
          <VideoTitle>Jamaica Plain in Boston is Rad!</VideoTitle>
          <Stats className="feat">1000 views</Stats>
          <VideoDesc>
            Jamaica Plain is totally rad - there&apos;s so much to see. Here&apos;s where we stopped:<br/>
            1. Arnold Arboretum<br/>
            2. Allandale Farm<br/>
            3. Centre Street<br/>
            4. Splash pad<br/>
            5. Brewery
          </VideoDesc>
          <VideoDesc>
            Special shouts of love to Allandale Farm, Deep Thoughts and J.P. Licks
          </VideoDesc>
          <VideoDesc>
            Music by: Gary Lee & The Catdaddys, &quot;Little Girl&quot;
          </VideoDesc>
          <ShowMore>Show More</ShowMore>
        </Right>
      </Featured>
      <ChannelNav>
        <p className="selected">Home</p>
        <p>Videos</p>
        <p>Playlists</p>
        <p>Subscriptions</p>
      </ChannelNav>
      <NewVideos>
        <Header className="playlist">
          <Title>Playlist</Title>
          <More className="playlist">View All</More>
          <PlayAll><PlayArrowIcon color="primary"/><span>Play All</span></PlayAll>
        </Header>
        <Videos>
          {Array(3).fill(0).map((index) => (
            <VideoFilter cta="playlist" key={index} />
          ))}
        </Videos>
        <Header className="playlist">
          <Title>Playlist</Title>
          <More className="playlist">View All</More>
          <PlayAll><PlayArrowIcon color="primary"/><span>Play All</span></PlayAll>
        </Header>
        <Videos>
          {Array(3).fill(0).map((index) => (
            <VideoFilter cta="playlist" key={index} />
          ))}
        </Videos>
        <Header className="playlist">
          <Title>Playlist</Title>
          <More className="playlist">View All</More>
          <PlayAll><PlayArrowIcon color="primary"/><span>Play All</span></PlayAll>
        </Header>
        <Videos>
          {Array(3).fill(0).map((index) => (
            <VideoFilter cta="playlist" key={index} />
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

export default Channel;
