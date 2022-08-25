import React from 'react';
import Carousel from 'react-elastic-carousel';
import { ResponsiveCarouselView } from './responsiveCarouselArrows.styles';

const ResponsiveCarouselArrows = ({breakpoints, items}) => {
  return (
    <div>
      <ResponsiveCarouselView className={'websiteCarousel'}>
        <Carousel
          breakPoints={breakpoints}
          pagination={false}
        >
          {items}
        </Carousel>
      </ResponsiveCarouselView>
      <ResponsiveCarouselView className={'mobileCarousel'}>
        <Carousel
          breakPoints={breakpoints}
          pagination={false}
          showArrows={false}
        >
          {items}
        </Carousel>
      </ResponsiveCarouselView>
    </div>
  );
};
  
export default ResponsiveCarouselArrows;
