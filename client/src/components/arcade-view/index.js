import React, { useState, useEffect } from 'react';
import { 
  Videos,
  TitleText,
  Title,
  Sort,
  SortImg,
  GameListView,
  BtnContainer,
} from './arcadeView.styles';
import ButtonField from '../button-field';
import sortImg from '../../assets/games/sort.png';
import DropDown from '../dropdown';

const ArcadeView = ({mostPopularList, recommendedList, newestList, oldestList, gameList}) => {
  const [viewAll, setViewAll] = useState(false);
  const [currentGameList, setCurrentGameList] = useState(null);
  const gameCategories = ['Recommended', 'Newest to oldest', 'Oldest to newest'];

  const gameSortDropdown = gameCategories.map((item) => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  });

  const changeGameSorting = (e) => {
    const optionName = e.target.value;

    const gameList = {
      'Most Popular': mostPopularList,
      'Recommended': recommendedList,
      'Newest to oldest': newestList,
      'Oldest to newest': oldestList
    };
    setCurrentGameList(gameList[optionName]);
  };

  useEffect(() => {
    if (!currentGameList) {
      setCurrentGameList(mostPopularList);
    }
  }, [currentGameList]);

  return (
    <div>
      <Title>Most Popular</Title>
      {gameList}
      <TitleText className={'allGames'}>
        <Title className={'allGames'}>All Games</Title>
        <Sort>
          <SortImg src={sortImg}/>
          Sort by
        </Sort>
        <DropDown
          name={'games'}
          label={'Most Popular'}
          list={gameSortDropdown}
          onChange={changeGameSorting}
        />
      </TitleText>
      {!viewAll ? (
        <GameListView>
          <Videos
            className={'isDesktop'}
            data-class="gameList"
          >
            {currentGameList?.slice(0,12)}
          </Videos>
          <Videos
            className={'isMobile'}
            data-class="gameList"
          >
            {currentGameList?.slice(0,10)}
          </Videos>
          <BtnContainer>
            <ButtonField color="newPrimary" onClick={() => setViewAll(true)}>
              View All
            </ButtonField>
          </BtnContainer>
        </GameListView>
      ) : (
        <GameListView>
          <Videos
            data-class="gameList"
          >
            {currentGameList}
          </Videos>
          <BtnContainer>
            <ButtonField color="gray" onClick={() => setViewAll(false)}>
              Hide
            </ButtonField>
          </BtnContainer>
        </GameListView>
      )}
    </div>
  );
};

export default ArcadeView;
