import React from 'react';
import { 
  BlueTriangle,
  CategoriesContainer,
  CategoriesSection,
  Line, 
  CategoriesContainerMobile,
  CategoriesSectionMobile,
} from './TvCategories.styles';
import blueTriangle from '../../assets/icons/blueTriangle.svg';

const TvCategories = () => {
  const categoryArrays = [
    ['New Videos', 'On Trend', 'Podcasts', 'Vlog', 'Musicians'],
    ['Travel', 'Fitness', 'Music', 'Beauty'],
    ['Gaming', 'Anime', 'Comedy'],
    ['Business', 'Finance', 'Inspirational'],
  ];

  return (
    <div>
      <BlueTriangle src={blueTriangle} alt="triangle" />
      <CategoriesContainer>
        <CategoriesSection>
          {categoryArrays[0].map((category, index) => (
            <span key={index}>{category}</span>
          ))}
        </CategoriesSection>
        <Line />
        {categoryArrays.slice(1).map((categories, index) => (
          <CategoriesSection key={index} className={`row${index + 2}`}>
            {categories.map((category, index) => (
              <span key={index}>{category}</span>
            ))}
          </CategoriesSection>
        ))}
      </CategoriesContainer>
      <CategoriesContainerMobile>
        <CategoriesSectionMobile>
          <span>New Videos</span>
          <span>Podcasts</span>
          <span>Musicians</span>
        </CategoriesSectionMobile>
        <CategoriesSectionMobile className="row2">
          <span>On Trend</span>
          <span>Vlog</span>
        </CategoriesSectionMobile>
        <Line/>
        <CategoriesSectionMobile className="row3">
          <span>Travel</span>
          <span>Fitness</span>
          <span>Music</span>
          <span>Beauty</span>
          <span>Gaming</span>
        </CategoriesSectionMobile>
        <CategoriesSectionMobile className="row4">
          <span>Business</span>
          <span>Finance</span>
          <span>Anime</span>
          <span>Comedy</span>
          <span>Inspirational</span>
        </CategoriesSectionMobile>
      </CategoriesContainerMobile>
    </div>
  );
};

export default TvCategories;
