import React, { useState } from 'react';
import { targetPage } from '../../utils/index';
import { addEvent } from '../../requests/analytics-request';
import { useForm } from 'react-hook-form';
import { Attribute, SearchBarContainer, SearchContainer, SearchIcon } from './searchbar.styles';
import searchIcon from '../../assets/icons/search.svg';

const SearchBar = ({ showSearch }) => {
  const [searchWord, setSearchWord] = useState(null);
  const { register } = useForm();

  const handleKeyword = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSearch = () => {
    const category = 'search';

    if (!searchWord || (searchWord && searchWord.length === 0)) {
      return;
    }

    targetPage(`search/${category}/${searchWord}`);
    addEvent({
      event: 'Search keyword',
      props: {
        action: 'Click',
        label: searchWord,
      },
    });
  };

  const handleKeyPressed = (event) => {
    if (event.code === 'Enter') handleSearch(); 
  };
  
  return (
    <SearchContainer className={!showSearch && 'hideSearch'}> 
      {/* What is this used for ^ */}
      {(
        <SearchBarContainer className="searchBarContainer">
          <Attribute
            type="text"
            name="search-bar"
            placeholder="Search Freedom Rains..."
            ref={register({
              required: true,
            })}
            onChange={handleKeyword}
            onKeyDown={handleKeyPressed}
          />
          <SearchIcon
            src={searchIcon}
            alt="Search Icon"
            onClick={handleSearch}>
          </SearchIcon>
        </SearchBarContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
