import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../requests/api-request';
import ListOfProducts from '../../components/list-of-products';
import ListItems from '../../components/list-items';
import { gamesConstant } from '../../constants/games';
import { shuffleArray } from '../../utils/index';
import Loader from '../../components/loader';
import Ad from '../../components/ad';
import Carousel from 'react-elastic-carousel';
import { carouselConstant } from '../../constants/carousel';
import FeaturedList from '../../components/featured-list';
import { 
  Sections, 
  CarouselImg,
  TopPromo,
  SectionTitle,
  PromoContainer,
  CarouselImgContainer,
  TopCarouselContainer,
  SectionText,
  SectionView,
} from './homepage.styles';
import { Container } from '../../styles/global.style';
import ModalOneBtn from '../../components/modal-one-btn';
import ModalTwoBtn from '../../components/modal-two-btn';
import HomepageCategories from '../../components/homepage-categories';
import extensionImg from '../../assets/ads/freedom-extension-ad.jpg'; 
import podcastImg from '../../assets/homepage/podcast.PNG';
import { targetPage } from '../../utils/index';
import ad1 from '../../assets/ads/ad1.png';
import gamesImg from '../../assets/homepage/shopping-categories/toys-and-games.png';
import ResponsiveCarouselArrows from '../../components/responsive-carousel-arrows';

const Homepage = ({ isLoggedIn }) => {
  const [products, setProducts] = useState(false);
  const [currentItems, setCurrentItems] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [allStores, setAllStores] = useState(null);
  const [allGames, setAllGames] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTwoIsOpen, setModalTwoIsOpen] = useState(false);
  const [modalThreeIsOpen, setModalThreeIsOpen] = useState(false);
  const [carouselCurrentItems, setCarouselCurrentItems] = useState(null);
  const [carouselStoresList, setCarouselStoresList] = useState(null);

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 480, itemsToShow: 6 },
  ];

  const getProducts = (platform = null) => {
    getAllProducts()
      .then((results) => {
        setProducts(true);

        if (platform) {
          const arr = [];

          results.forEach((item) => {
            if (item.product.metadata.Platform === platform) {
              arr.push(item);
            }
          });

          setCurrentItems(shuffleArray(arr));
        } else {
          setCurrentItems(shuffleArray(results));
        }

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProductCategories = () => {
    if (!currentItems || currentItems.length === 0) {
      return;
    }
    const arr = [];

    currentItems.forEach((item) => {
      if (arr.indexOf(item.product.metadata.Category) === -1) {
        arr.push(item.product.metadata.Category);
      }
    });

    setAllCategories(arr);
  };

  const getProductStores = () => {
    if (!currentItems || currentItems.length === 0) {
      return;
    }
    const arr = [];

    currentItems.forEach((item) => {
      if (arr.indexOf(item.product.metadata.Store) === -1) {
        arr.push(item.product.metadata.Store);
      }
    });

    setAllStores(arr);
  };

  const getGames = () => {
    const games = gamesConstant.sort((a, b) => {
      return +a.priority < +b.priority ? -1 : +a.priority > +b.priority ? 1 : 0;
    });
    setAllGames(games);
  };

  const carouselImages = carouselConstant.map((item) => {
    return (
      <CarouselImgContainer key={item.name}>
        <CarouselImg src={item.desktop} alt={item.name} onClick={() => window.open(item.url)}/>
      </CarouselImgContainer>
    );
  });

  const carouselProducts = carouselCurrentItems?.map((item) => {
    return (
      <ListOfProducts
        key={item.id}
        currentItems={item}
        isLoggedIn={isLoggedIn}
        isHomepage={true}
      />
    );
  });

  const carouselStores = carouselStoresList?.map((item, index) => {
    return (
      <ListOfProducts
        key={'carousel_store_' + index} 
        currentItems={item}
        isLoggedIn={isLoggedIn}
        isHomepage={true}
        isStoreList={true}
      />
    );
  });

  const closeModal = () => {
    setModalIsOpen(false);
    setModalTwoIsOpen(false);
    setModalThreeIsOpen(false);
  };

  const closeModalOne = () => {
    setModalIsOpen(false);
    setModalThreeIsOpen(true);
    sessionStorage.setItem('newVisitor', 'false');
  };

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  }, [products]);

  useEffect(() => {
    if (!carouselCurrentItems) {
      if (currentItems?.length > 11){
        setCarouselCurrentItems(currentItems?.slice(0,12));
      } else {
        setCarouselCurrentItems(currentItems);
      }
    }
  }, [carouselCurrentItems, currentItems]);

  useEffect(() => {
    if (!carouselStoresList) {
      if (allStores?.length > 11){
        setCarouselStoresList(allStores?.slice(0,12));
      } else {
        setCarouselStoresList(allStores);
      }
    }
  }, [carouselStoresList, allStores]);

  useEffect(() => {
    if (!allCategories) {
      getProductCategories();
    }
  }, [allCategories, currentItems]);

  useEffect(() => {
    if (!allStores) {
      getProductStores();
    }
  }, [allStores, currentItems]);

  useEffect(() => {
    if (!allGames) {
      getGames();
    }
  }, [allGames]);

  useEffect(() => {
    if (!(sessionStorage .getItem('newVisitor') === 'false')){
      setModalIsOpen(true);
    }  
  }, []);

  return (
    <div>
      <ModalTwoBtn
        openModal={modalIsOpen}
        closeModal={closeModalOne}
        title={'Shop with Freedom'}
        btnMessage1={'Sign Up!'}
        btnLink1={() => targetPage('create')}
        btnMessage2={'Add Shop with Freedom Extension'}
        btnLink2={() => window.open('https://chrome.google.com/webstore/detail/freedom-super-saver/cibkpkemnhicmcmkchpledgebbapjdbp')}
        type={'homepage'}
        image={ad1}
      />
      <ModalTwoBtn
        openModal={modalThreeIsOpen}
        closeModal={closeModal}
        title={'Daily Mission'}
        message1={'Get 4 points in 2 Dots Challenge'}
        btnMessage1={'Play Now!'}
        btnLink1={() => targetPage('arcade')}
        btnMessage2={'Complete Mission Later'}
        btnLink2={closeModal}
        type={'dailyMission'}
        image={gamesImg}
      />
      { isLoading ? (
        <Container>
          <Loader />
        </Container>
      ) : (
        <div>
          <TopCarouselContainer>
            <Carousel 
              enableAutoPlay
              autoPlaySpeed={5000}
              showArrows={false}
            >
              {carouselImages}
            </Carousel>
          </TopCarouselContainer>
          <Container>
            <ModalOneBtn
              openModal={modalTwoIsOpen}
              closeModal={closeModal}
              title={'Welcome to Freedom!'}
              message1={'Support Local, Buy Black and Shop Sustainable.'}
              hasBtn={true}
              btnMessage={'Continue to Homepage'}
              btnLink={closeModal}
              videoLink={'https://www.youtube.com/embed/7y3iA5EYdy0'}
              type={'homepage'}
            />
            <Sections>
              <TopPromo src={ad1} onClick={() => targetPage('create')} alt="homepage image"/>
              <TopPromo src={podcastImg} onClick={() => setModalTwoIsOpen(true)} alt="homepage video"/>
              <PromoContainer>
                <ListItems
                  currentItems={allGames?.slice(0, 2)}
                  listType="games"
                  listTitle="Games"
                />
                <ListItems
                  currentItems={currentItems?.slice(2, 4)}
                  listType="products"
                  listTitle="Deals"
                />
              </PromoContainer>
            </Sections>
            <HomepageCategories/>
            <SectionText>
              <SectionTitle>Featured Products</SectionTitle>
              <SectionView onClick={() => targetPage('deals')}>View All</SectionView>
            </SectionText>
            <ResponsiveCarouselArrows
              breakpoints={breakPoints}
              items={carouselProducts}
            />
            <Ad
              btnColor="green"
              btnText="Enable Shop with Freedom Extension on Chrome!"
              adText="Shop With Freedom Extension"
              descriptionText="Shop with Freedom - Support Local, Buy Black and Shop Sustainable."
              url="https://chrome.google.com/webstore/detail/freedom-super-saver/cibkpkemnhicmcmkchpledgebbapjdbp"
              image={extensionImg}
            />
            <SectionText>
              <SectionTitle>Featured Stores</SectionTitle>
              <SectionView onClick={() => targetPage('deals')}>View All</SectionView>
            </SectionText>  
            <ResponsiveCarouselArrows
              breakpoints={breakPoints}
              items={carouselStores}
            />
            <FeaturedList
              currentItems={currentItems?.slice(16, 19)}
              isLoggedIn={isLoggedIn}
            />
          </Container>
        </div>
      )}
    </div>
  );
};

export default Homepage;
