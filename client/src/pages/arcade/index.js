import React, { useRef, useState, useEffect } from 'react';
import ModalOneBtn from '../../components/modal-one-btn';
import ArcadeView from '../../components/arcade-view';
import { gamesConstant } from '../../constants/games';
import { imgServer } from '../../config';
import { updateLockedItems } from '../../requests/api-request';
import { getUserToken, updateUserTokens } from '../../utils/account-utils';
import {
  getItem,
  setItem,
  targetPage
} from '../../utils/index';
import { 
  GamesContainer,
  Cover,
  Logo,
  GamePoint,
  GameName,
  GameContainer,
  TopCarouselContainer,
  CarouselImg,
  HeaderText,
  FeaturedGameContainer,
  FeaturedTextContainer,
  FeaturedGameName,
  FeaturedGameImg,
  FeaturedGameRules,
  FreedomFriday,
  FeaturedGameScore,
  FeaturedStarImg,
} from './arcade.style';
import {Container} from '../../styles/global.style';
import Carousel from 'react-elastic-carousel';
import { arcadeCarouselConstant } from '../../constants/carousel';
import starImg from '../../assets/games/star.png';
import grayStarImg from '../../assets/games/star_gray.png';
import lockedImg from '../../assets/games/locked_game.png';

const Arcade = ({ setUpdateTokens }) => {
  const start = useRef(null);
  const [games, setGames] = useState(null);
  const [gameList, setGameList] = useState(null);
  const [unlockModalOpen, setUnlockModalOpen] = useState(false);
  const [gameNum, setGameNum] = useState(null);
  const [errMsg, setErrMsg] = useState(false);
  const [mostPopularList, setMostPopularList] = useState(null);
  const [recommendedList, setRecommendedList] = useState(null);
  const [newestList, setNewestList] = useState(null);
  const [oldestList, setOldestList] = useState(null);
  const unlockableItems = getItem('unlockedItems');
  const unlockedItems = unlockableItems
    ? JSON.parse(unlockableItems).games
    : [1, 2, 3, 4];
  const newestUnlockedItems = unlockableItems
    ? JSON.parse(unlockableItems).games
    : [6, 8, 12, 13];
  const oldestUnlockedItems = unlockableItems
    ? JSON.parse(unlockableItems).games
    : [2, 3, 7, 9];

  const carouselImages = arcadeCarouselConstant.map((item, index) => {
    return (
      <TopCarouselContainer key={'arcade_rec' + index}>
        <CarouselImg src={item.desktop} key={item.name} alt={item.name} onClick={() => window.open(item.url)}/>
        {(index === 0) && <HeaderText>Welcome to the Freedom Arcade!</HeaderText>}
      </TopCarouselContainer>
    );
  });

  const unlockable = (e) => {
    const target = e.target.attributes['data-video']
      ? e.target
      : e.target.parentElement;
    const gameNumber = target.attributes['data-number'].value;

    setGameNum(gameNumber);
    setUnlockModalOpen(true);
  };

  const getGameDisplay = (listType, type, sortType) => {
    const url = imgServer;

    const list = listType.map((item, index) => {
      const gameCount = index + 1;
      const available = !sortType ? (
        unlockedItems.indexOf(gameCount) !== -1
      ) : (
        sortType === 'newest' ? (
          newestUnlockedItems.indexOf(gameCount) !== -1
        ) : (
          oldestUnlockedItems.indexOf(gameCount) !== -1
        )
      );

      return (
        <div key={index}>
          {(!type) &&
            <GamePoint
              key={index}
              data-highlight={`game-${index}`}
              onClick={available ? () => targetPage(`arcade/${item.urlName}`) : unlockable}
              data-video={`${url}${item.link}`}
              className={!available && 'locked'}
              data-name={item.name}
              data-number={gameCount}
            >
              <Logo
                src={`${url}${item.image}`}
                className={!available && 'lockedImg'}
                alt={item.name}
              />
              {!available && 
                <Logo
                  src={lockedImg}
                  className={'lockedImgLogo'}
                />
              }
              <GameName>
                {item.name}
              </GameName>
            </GamePoint>
          }
          {(type === 'featured') &&
            <FeaturedGameContainer
              key={index}
              className={!available && 'locked'}
            >
              <FeaturedGameImg 
                src={`${imgServer}${item.image}`}
                data-highlight={`game-${index}`}
                onClick={available ? () => targetPage(`arcade/${item.urlName}`) : unlockable}
                data-video={`${url}${item.link}`}
                data-name={item.name}
                data-number={gameCount}
              />
              <FeaturedTextContainer>
                <FeaturedGameName className={(index === 0) && 'mostPopular'}>{item.name}</FeaturedGameName>
                <FeaturedGameRules>Rules: {item.rules}</FeaturedGameRules>
                <FreedomFriday>Freedom Friday</FreedomFriday>
                <div>
                  <FeaturedStarImg className={'isDesktop'} src={starImg}/>
                  <FeaturedStarImg className={'isMobile'} src={grayStarImg}/>
                  <FeaturedGameScore>Best Score: 852 pts</FeaturedGameScore>
                </div>
              </FeaturedTextContainer>
            </FeaturedGameContainer>
          }
        </div>
      ); 
    });

    return (list);
  };

  const getGames = () => {
    const specificGames = gamesConstant.sort((a, b) => {
      return +a.priority < +b.priority ? -1 : +a.priority > +b.priority ? 1 : 0;
    });
    setGames(specificGames);
    setGameList(getGameDisplay(specificGames?.slice(0,2), 'featured'));
    setMostPopularList(getGameDisplay(specificGames));

    const recommendedGames = gamesConstant.sort((a, b) => {
      return +a.recommendedOrder < +b.recommendedOrder ? -1 : +a.recommendedOrder > +b.recommendedOrder ? 1 : 0;
    });
    setRecommendedList(getGameDisplay(recommendedGames));

    const newestGames = gamesConstant.sort((a, b) => {
      return +a.order > +b.order ? -1 : +a.order < +b.order ? 1 : 0;
    });
    setNewestList(getGameDisplay(newestGames, null, 'newest'));

    const oldestGames = gamesConstant.sort((a, b) => {
      return +a.order < +b.order ? -1 : +a.order > +b.order ? 1 : 0;
    });
    setOldestList(getGameDisplay(oldestGames, null, 'oldest'));
  };

  const unlockGame = async () => {
    let currentTokens = getItem('tokens');
    currentTokens = currentTokens ? JSON.parse(currentTokens) : 0;
    setErrMsg(null);

    if (+currentTokens < 250) {
      setErrMsg('You don\'t have enough tokens to unlock this game');
      return false;
    }
    const tasks = getItem('tasks');
    const tokenAmount = await updateUserTokens(-250, tasks);
    setUpdateTokens(tokenAmount);

    let unlockedItems = getItem('unlockedItems');
    unlockedItems = unlockedItems ? JSON.parse(unlockedItems) : [];

    unlockedItems.games.push(parseInt(gameNum));
    setItem('unlockedItems', JSON.stringify(unlockedItems));

    await updateLockedItems(
      { unlocked: JSON.stringify(unlockedItems) },
      await getUserToken()
    );
    getGames();
    closeModal();
  };

  const closeModal = () => {
    setUnlockModalOpen(false);
  };

  useEffect(() => {
    if (!games) {
      getGames();
    }
  }, [games]);

  return (
    <div>
      <TopCarouselContainer>
        <Carousel 
          showArrows={false}
          className={'arcade'}
        >
          {carouselImages}
        </Carousel>
      </TopCarouselContainer>
      <Container>
        <GamesContainer ref={start}>
          <GameContainer>
            <Cover>
              {games && 
                <ArcadeView
                  gameList={gameList}
                  mostPopularList={mostPopularList}
                  recommendedList={recommendedList}
                  newestList={newestList}
                  oldestList={oldestList}
                />
              }
            </Cover>
          </GameContainer>
        </GamesContainer>
        {unlockableItems ? 
          (<ModalOneBtn
            openModal={unlockModalOpen}
            closeModal={closeModal}
            message1={'Use 250 tokens to unlock game?'}
            message2={errMsg}
            btnMessage={'Yes'}
            btnLink={unlockGame}
            type={'games'}
          />) 
          : 
          (<ModalOneBtn
            openModal={unlockModalOpen}
            closeModal={closeModal}
            title={'Please sign in to unlock this game'}
            btnMessage={'Sign In'}
            btnLink={() => targetPage('login')}
            type={'games'}
          />)
        }
      </Container>
    </div>
  );
};

export default Arcade;
