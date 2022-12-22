import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import logo from '../../assets/stores/freedom.png';
import { Container } from './loader.styles';

const Loader = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setProgress(progress + 10);
    }, 800);
  });

  return (
    <Container>
      <img src={logo} alt="Freedom F logo" />
      <LoadingBar
        color="#559eff"
        progress={progress}
        height={30}
        className={'bar'}
        containerClassName={'moveBehindModal'}
        background={0}
        shadow={false}
      />
    </Container>
  );
};

export default Loader;
