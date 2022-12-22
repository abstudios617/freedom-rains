import styled from 'styled-components';

export const ResponsiveCarouselView = styled.div`
&.mobileCarousel {
  display: none;
}

@media only screen and (max-width: 480px) {
  &.websiteCarousel {
    display: none;
  }

  &.mobileCarousel {
    display: flex;
  }
}
`;
