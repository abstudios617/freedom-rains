import React from 'react';
import TvNav from '../../../components/TvNav';
import { Container } from '../../../styles/global.style';
import {Header, NewVideos, Title, Videos, More} from '../tv.style';
import { Ava, Banner, BannerImg, Bio, ChannelNav, Info, ChannelName} from '../channel/channel.style';
import { Stats, Subscribe } from '../../../components/video-filter/video.styles';
import ListIcon from '@mui/icons-material/List';
import { PlayAll, Playlist, PlaylistHeader, PlaylistImg, PlaylistTitle, PlaylistHeaderMobile } from './playlists.style';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const Playlists = () => {
  
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
      <ChannelNav>
        <p>Home</p>
        <p className="selected">Videos</p>
        <p>Playlists</p>
        <p>Subscriptions</p>
      </ChannelNav>
      <NewVideos>
        <Header className="playlists" >
          <Title>Playlists</Title>
          <More><ListIcon/></More>
        </Header>
        <Videos className="playlists">
          {Array(12).fill(0).map((index) => (
            <Playlist key={index}>
              <PlaylistImg/>
              <PlaylistHeader className="desktop">
                <PlaylistTitle>Adventures</PlaylistTitle>
                <PlayAll><PlayArrowOutlinedIcon fontSize="small"/>Play All</PlayAll>
              </PlaylistHeader>
              <PlaylistHeaderMobile>
                <PlaylistTitle>Adventures</PlaylistTitle>
                <span className="mobileChannelName">Alaina Pinto</span>
                <span className="statsMobile">10 videos</span>
              </PlaylistHeaderMobile>
              <Stats className="playlists" >10 videos</Stats>
            </Playlist>
          ))}
        </Videos>
      </NewVideos>
    </Container>
  );
};

export default Playlists;
