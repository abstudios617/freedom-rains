import React from 'react';
import {Avatar, Channel, Header, Img, Info, Stats, Subscribe, Title, Top, Video, ChannelInfo} from './video.styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const VideoFilter = ({cta}) => {
  return (
    <Video className={cta}>
      <Img className={cta} src =""/>
      <Header>
        <Avatar className={cta} src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"/>
        <Info className={cta} >
          <Top>
            <Title>Jamaica Plain in Boston is Rad!</Title>
            <MoreVertIcon fontSize="small"/>
          </Top>
          <ChannelInfo className={cta}>
            <Channel>Alaina Pinto</Channel>
            <Stats className={cta === 'saved' ? 'savedPage' : 'marked'}>1000 views</Stats>
            <Stats className={cta === 'saved' ? 'savedPage' : 'marked'}>3 hours ago</Stats>
          </ChannelInfo>
        </Info>
      </Header>
    </Video>
  );
};

export const FeaturedVideo = () => {
  return (
    <Video className="trending">
      <Img className="trending" src =""/>
      <Header className="trending">
        <Avatar src="https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"/>
        <Info>
          <Top>
            <Title>Alaina Pinto</Title>
            <Subscribe>Subscribe</Subscribe>
            <span>
              <PlayArrowOutlinedIcon fontSize="small"/>
              <KeyboardArrowDownIcon fontSize="small"/>
            </span>
          </Top>
          <div>
            <Stats>1000 subscribers</Stats>
          </div>
        </Info>
      </Header>
    </Video>
  );
};
