import React, {useRef, useState, useEffect} from 'react';
import Ad from '../../components/ad';
import { adsConstant } from '../../constants/ads';
import { imgServer } from '../../config';
import VerticalCarouselArrows from '../../components/vertical-carousel-arrows';
import homeBtn from '../../assets/games/mobile_home_btn.png';
import fullscreenBtn from '../../assets/games/fullscreen_btn.png';
import { gameFullscreen, gameNormalScreen } from '../../constants/modal-styles';
import { useParams } from 'react-router-dom';
import { gamesConstant } from '../../constants/games';
import { targetPage } from '../../utils/index';
import { Container } from '../../styles/global.style';
import { 
  GamesContainer, 
  GameContainer, 
  Cover 
} from '../arcade/arcade.style';
import { 
  BtnGame,
  GameDisplay,
  GameAd,
  GameImg,
  RedirectContainer,
  HomeRedirect,
  GameRedirect,
  GameTitle,
  RulesTitle,
  Rules,
  GameText,
  DesktopRules,
  MobileRules,
  MobileGameBtn,
} from './game.styles';

const Game = () => {
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [game, setGame] = useState(false);
  const [games, setGames] = useState(null);
  const [gameImg, setGameImg] = useState(null);
  const [gameRules, setGameRules] = useState(null);
  const start = useRef(null);
  const [gameSource, setGameSource] = useState(false);
  const url = imgServer;
  const { gameName } = useParams();

  const getGames = () => {
    const specificGames = gamesConstant.sort((a, b) => {
      return +a.priority < +b.priority ? -1 : +a.priority > +b.priority ? 1 : 0;
    });
    setGames(specificGames);
  };

  useEffect(() => {
    if (!games) {
      getGames();
    }
  }, [games]);

  useEffect(() => {
    if (!game && games) {
      games?.map(({ image, rules, name, link, urlName }) => {
        if (urlName === gameName) {
          setGameImg(image);
          setGameRules(rules !== null ? rules : 'Rules coming soon!');
          setGame(name);
          setGameSource(`${url}${link}`);
        }
      });
    }
  }, [game, games]);

  return (
    <Container>
      <GamesContainer ref={start}>
        <GameContainer>
          <Cover>
            <GameDisplay>
              <div>
                <GameText>
                  <RedirectContainer>
                    <HomeRedirect onClick={() => targetPage('arcade')}>Home/</HomeRedirect>
                    <GameRedirect>{game}</GameRedirect>
                  </RedirectContainer>
                  <GameImg src={`${url}${gameImg}`}/>
                  <DesktopRules>
                    <GameTitle>{game}</GameTitle>
                    <RulesTitle>Rules:</RulesTitle>
                    <Rules>{gameRules}</Rules>
                  </DesktopRules>
                  <MobileRules>
                    <GameTitle>{game}</GameTitle>
                    <Rules>Rules: {gameRules}</Rules>
                  </MobileRules>
                </GameText>
                <GameAd>
                  <Ad
                    ad={adsConstant}
                    priority="1"
                    height="250"
                    platform="arcade"
                    page="Arcade"
                  />
                </GameAd>
              </div>
              <BtnGame>
                {/* screen for game */}
                <iframe
                  src={gameSource}
                  allowFullScreen={true}
                  title="Freedom Game"
                  style={fullscreenMode ? gameFullscreen : gameNormalScreen}
                />
                <MobileGameBtn 
                  className={fullscreenMode ? 'homeFS' : 'home'} 
                  src={homeBtn} 
                  onClick={() => targetPage('arcade')}
                />
                <MobileGameBtn 
                  className={fullscreenMode ? 'fullscreenFS' : 'fullscreen'} 
                  src={fullscreenBtn} 
                  onClick={fullscreenMode ? () => setFullscreenMode(false) : () => setFullscreenMode(true)}
                />
              </BtnGame>
              <VerticalCarouselArrows/> 
            </GameDisplay>
          </Cover>
        </GameContainer>
      </GamesContainer>
    </Container>
  );
};

export default Game;
