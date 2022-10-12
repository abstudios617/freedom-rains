import React, {useState, useEffect} from 'react';
import downArrow from '../../assets/games/arrow_down.png';
import upArrow from '../../assets/games/arrow_up.png';
import lockedImg from '../../assets/games/locked_game.png';
import { imgServer } from '../../config';
import { gamesConstant } from '../../constants/games';
import ModalOneBtn from '../../components/modal-one-btn';
import { 
  VerticalCarousel,
  ArrowImg,
} from './verticalCarouselArrows.styles';
import {
  getItem,
  targetPage,
} from '../../utils/index';
import { 
  Logo,
  GamePoint,
  VerticalGameImg,
} from '../../pages/arcade/arcade.style';

const VerticalCarouselArrows = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const [disableUpClick, setDisableUpClick] = useState(true);
  const [disableDownClick, setDisableDownClick] = useState(false);
  const [unlockModalOpen, setUnlockModalOpen] = useState(false);
  const unlockableItems = getItem('unlockedItems');
  const [games, setGames] = useState(null);

  const unlockedItems = unlockableItems
    ? JSON.parse(unlockableItems).gamesConstant
    : [1, 2, 3, 4];

  const gameCarouselList = games?.map((item, index) => {
    const gameCount = index + 1;
    const available = unlockedItems.indexOf(gameCount) !== -1;
    const url = imgServer;

    return (
      <GamePoint
        key={index}
        data-highlight={`game-${index}`}
        onClick={available ? () => targetPage(`arcade/${item.urlName}`) : () => setUnlockModalOpen(true)}
        data-video={`${url}${item.link}`}
        className={!available && 'locked'}
        data-name={item.name}
        data-number={gameCount}
      >
        <VerticalGameImg 
          key={index} 
          src={`${url}${item.image}`}
          className={!available && 'lockedImg'}
        />
        {!available && 
          <Logo
            src={lockedImg}
            className={'carouselLockedImgLogo'}
          />
        }
      </GamePoint>
    ); 
  });

  const getGames = () => {
    const specificGames = gamesConstant.sort((a, b) => {
      return +a.priority < +b.priority ? -1 : +a.priority > +b.priority ? 1 : 0;
    });

    setGames(specificGames);
  };

  const goUp = () => {
    if (startIndex === 0){
      setDisableUpClick(true);
    } else {
      setDisableDownClick(false);
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };

  const goDown = () => {
    if (endIndex === gameCarouselList.length){
      setDisableDownClick(true);
    } else {
      setDisableUpClick(false);
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
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
    <VerticalCarousel>
      <ArrowImg className={disableDownClick && 'noCursor'} src={downArrow} onClick={() => goDown()}/>
      {gameCarouselList?.slice(startIndex, endIndex)}
      <ArrowImg className={disableUpClick && 'noCursor'} src={upArrow} onClick={() => goUp()}/>
      {unlockableItems ? 
        (<ModalOneBtn
          openModal={unlockModalOpen}
          closeModal={closeModal}
          message1={'Use 250 tokens to unlock game?'}
          btnMessage={'Yes'}
          btnLink={() => targetPage('arcade')}
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
    </VerticalCarousel>
  );
};
  
export default VerticalCarouselArrows;
