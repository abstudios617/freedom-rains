import React, { useState, useEffect } from 'react';
import {
  getItem,
  setItem,
  targetPage,
  formatPrice,
} from '../../utils';
import { updateFavorites, getAllProducts } from '../../requests/api-request';
import ModalOneBtn from '../../components/modal-one-btn';
import { addEvent } from '../../requests/analytics-request';
import Loader from '../../components/loader';
import ListOfProducts from '../../components/list-of-products';
import { getUserToken } from '../../utils/account-utils';
import { 
  ProductRow,
  ProductImg,
  ImgContain,
  ProdContent, 
  ButtonRow,
  Title, 
  Store,
  Price,
  Description,
  ProdDetail,
  ProdHeader,
  Relate,
  Platform,
  ProductDetails,
  ProductDetailsList,
  Breadcrumb,
  Arrow,
  ImageColumn,
  ImageContainer,
  SecondaryImg,
  SecondaryImgContain,
} from './productClass.style';
import { BtnField } from '../../components/button-field/buttonField.styles';
import {Container} from '../../styles/global.style';
import Quantity from '../../components/quantity-field';
import loveIcon from '../../assets/icons/love.svg';
import cartIcon from '../../assets/icons/cart.svg';
import shareIcon from '../../assets/icons/share.svg';
import { useParams } from 'react-router-dom';
import leftArrow from '../../assets/icons/leftArrow.svg';
import rightArrow from '../../assets/icons/rightArrow.svg';
import { addItem } from '../../constants/cart'; 

const ProductClass = ({ isLoggedIn }) => {
  const [prodItem, setProdItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [favsIsOpen, setFavsIsOpen] = useState(false);
  const [favExists, setFavExists] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [storeProds, setStoreProds] = useState(null);
  const { shopId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);

  const closeModal = () => {
    setModalIsOpen(false);
    setFavsIsOpen(false);
    setFavExists(false);
  };

  const addToFavs = async (prodId) => {
    if (!isLoggedIn) {
      setModalIsOpen(true);
      return;
    }
    const favs = JSON.parse(getItem('favorites'));

    if (favs && favs.indexOf(prodId) === -1) {
      favs.push(prodId);
      setFavsIsOpen(true);
      setItem('favorites', JSON.stringify(favs));
      await updateFavorites(
        {
          favorites: JSON.stringify(favs),
        },
        await getUserToken()
      );

      addEvent({
        event: 'Added to Favs',
        props: {
          action: 'Click',
          label: prodId,
        },
      });
    } else if (!favs) {
      setItem('favorites', JSON.stringify([prodId]));
      await updateFavorites(
        {
          favorites: JSON.stringify([prodId]),
        },
        await getUserToken()
      );

      addEvent({
        event: 'Added to Favs',
        props: {
          action: 'Click',
          label: prodId,
        },
      });
    } else {
      setFavExists(true);
    }
  };

  // const goToProduct = (link, prodId) => {
  //   addEvent({
  //     event: 'Product purchased',
  //     props: {
  //       action: 'Click',
  //       label: prodId,
  //     },
  //   });
  //   window.open(link);
  // };

  const getSpecificProd = () => {
    const prodId = shopId;

    getAllProducts().then((result) => {
      let hasProduct = false;
      let prodStore = '';
      const relatedItems = [];
      result.forEach((item) => {
        if (item.product.id === prodId) {
          setProdItem(item);
          hasProduct = true;
          prodStore = item.product.metadata.Store;
        }
      });

      if (!hasProduct) {
        targetPage('');
      }

      result.forEach((prod) => {
        if (prod.product.metadata.Store === prodStore && prod.product.id !== prodId) {
          relatedItems.push(prod);
        }
      });

      setStoreProds(relatedItems);

      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (!prodItem) {
      getSpecificProd();
    }
  }, [prodItem]);

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  const moveImageLeft = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const moveImageRight = () => {
    if (currentImage < prodItem.product.images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const addItemInCart = () => {
    const itemObject = {
      id: prodItem.id,
      quantity: itemQuantity
    };

    addItem(itemObject); 

    targetPage('cart'); 
  };
  
  return (
    <Container>
      <Breadcrumb>Shop<div>&gt; </div><div>{prodItem.product.name}</div></Breadcrumb>
      {prodItem && (
        <>
          <ProductRow>
            <ImgContain>
              {prodItem.product.images.length > 1 ? (
                <ImageColumn>
                  <ImageContainer>
                    <Arrow src={leftArrow} alt="left arrow" onClick={moveImageLeft} />
                    <ProductImg
                      className="moreThanOne"
                      src={prodItem.product.images[currentImage]}
                      alt={prodItem.product.name}
                    />
                    <Arrow src={rightArrow} alt="right arrow" onClick={moveImageRight} />
                  </ImageContainer>
                  <SecondaryImgContain>
                    <SecondaryImg><img src={prodItem.product.images[currentImage + 1]} /></SecondaryImg>
                    <SecondaryImg><img src={prodItem.product.images[currentImage + 2]} /></SecondaryImg>
                    <SecondaryImg><img src={prodItem.product.images[currentImage + 3]} /></SecondaryImg>
                    <SecondaryImg><img src={prodItem.product.images[currentImage + 4]} /></SecondaryImg>
                  </SecondaryImgContain>
                </ImageColumn>
              ) : (
                <ProductImg
                  src={prodItem.product.images[0]}
                  alt={prodItem.product.name}
                />
              )}
            </ImgContain>
            <ProdContent>
              {prodItem.metadata.platform === 'local' ? (
                <Platform>Local</Platform>
              ) : (
                <Platform className="black">Black</Platform>
              )}
              <Store>{prodItem.product.metadata.Store}</Store>
              <Title>{prodItem.product.name}</Title>            
              <Price>${formatPrice(prodItem.unit_amount)}</Price>
              {prodItem.product.description && (
                <>
                  <Description>{prodItem.product.description}</Description>
                </>
              )}
              {prodItem.product.metadata.Color && (
                <>
                  <ProdHeader>Color:</ProdHeader>
                  <ProdDetail>{prodItem.product.metadata.Color}</ProdDetail>
                </>
              )}
              {prodItem.product.metadata.Size && (
                <>
                  <ProdHeader>Size:</ProdHeader>
                  <ProdDetail>{prodItem.product.metadata.Size}</ProdDetail>
                </>
              )}
              <Quantity quantity={itemQuantity} setQuantity={setItemQuantity}></Quantity> 
              <ButtonRow>
                <BtnField className="addToCart"
                  onClick={() => addItemInCart()}
                >
                  Add to Cart 
                  <img
                    src={cartIcon}
                    alt="cart" 
                  />
                </BtnField>
                <BtnField className="addToLikes" onClick={() => addToFavs(prodItem.product.id)}>
                  Add to Likes
                  <img 
                    src={loveIcon}
                    alt="Add To Likes"
                  />
                </BtnField>
              </ButtonRow>
              <ButtonRow>
                <BtnField className="share" >
                  Share
                  <img 
                    src={shareIcon}
                  />
                </BtnField>
              </ButtonRow>
              <ProductDetailsList>Product Detail</ProductDetailsList>
              <ProductDetails>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ProductDetails>
              <ProductDetailsList>Shipping Information</ProductDetailsList>
              <ProductDetails>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ProductDetails>
            </ProdContent>
          </ProductRow>
        </>
      )}
      <div>
        <Relate>You May Also Like</Relate>
        <ListOfProducts
          currentItems={storeProds && storeProds.slice(0, 4)}
          isLoggedIn={isLoggedIn}
        />
      </div>

      <ModalOneBtn
        openModal={modalIsOpen}
        closeModal={closeModal}
        message1={'You need to Sign In in order to add items to your Likes'}
        hasBtn={true}
        btnMessage={'Sign In'}
        btnLink={() => targetPage('login')}
      />
      <ModalOneBtn
        openModal={prodItem && favsIsOpen}
        closeModal={closeModal}
        message1={prodItem.product.name + ' has been added to your Likes.'}
        hasBtn={true}
        btnMessage={'Go to Likes'}
        btnLink={() => targetPage('likes')}
      />
      <ModalOneBtn
        openModal={prodItem && favExists}
        closeModal={closeModal}
        message1={prodItem.product.name + ' already exists in your Likes.'}
        hasBtn={true}
        btnMessage={'Go to Likes'}
        btnLink={() => targetPage('likes')}
      />
    </Container>
  );
};

export default ProductClass;
