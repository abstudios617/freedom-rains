import React from 'react';
import TvNav from '../../../components/TvNav';
import { Container } from '../../../styles/global.style';
import {NewVideos, Title, Videos} from '../tv.style';
import { Stats} from '../../../components/video-filter/video.styles';
import { VideoFilter } from '../../../components/video-filter';

const Saved = () => {
  
  return (
    <Container>
      <TvNav />
      <NewVideos>
        <Title>Saved</Title>
        <Stats className="saved">12 videos</Stats>
        <Videos>
          {Array(12).fill(0).map((index) => (
            <VideoFilter cta="saved" key={index}/>
          ))}
        </Videos>
      </NewVideos>
    </Container>
  );
};

export default Saved;
