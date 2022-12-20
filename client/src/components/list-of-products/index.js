import React from 'react';
import { formatPrice, targetPage } from '../../utils/index';
import { addEvent } from '../../requests/analytics-request';
import ButtonField from '../button-field';
import { 
  ImgContainer,
  ProdImg,
  ProductName,
  ListProd,
  ProductPrice,
  ShopBtn,
  FavBtn,
  HomepageProduct,
  ProductNameHomepage,
  Icon,
} from './listOfProducts.styles';
import { hpStoresConstant } from '../../constants/homepage';
import { BtnField } from '../button-field/buttonField.styles';
import cart from '../../assets/icons/cart.svg';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';

const ListOfProducts = ({
  currentItems,
  specificProd,
  removeFromFav,
  search=false, 
  isHomepage,
  isStoreList,
}) => {
  const goToProductClass = (item) => {
    const productId = isStoreList ? item : item.product.id;
    const productLabel = isStoreList ? item : item.product;

    targetPage(`shop/${productId}`);
    addEvent({
      event: 'Product selected',
      props: {
        action: 'Click',
        label: productLabel,
      },
    });
  };

  const productGrid = (item) => {
    const { id, name, images, metadata} = item.product;
    const { Platform, Link } = metadata;
    const { unit_amount } = item;
    const localClass = search ? 'productLocalSearch' : 'productLocal';
    const blackClass = search ? 'productBlackSearch' : 'productBlack';
    const platformLocal = search ? 'platformLocalSearch' : 'platformLocal';
    const platformBlack = search ? 'platformBlackSearch' : 'platformBlack';
    
    return (
      (!isHomepage ? (
        <div
          key={id}
          className={
            Platform === 'local' ? localClass : blackClass
          }
        >
          <div onClick={() => goToProductClass(item)}>
            <ImgContainer className={search && 'imgContainerSearch'}>
              <ProdImg src={images[0]} alt={name} className={search && 'prodImgSearch'} />
              <Icon><FavoriteBorderOutlined/></Icon>
            </ImgContainer>
            <ProductPrice>${formatPrice(unit_amount)}</ProductPrice>
            <ProductName>{name}</ProductName>
            <div
              className={
                Platform === 'local'
                  ? platformLocal
                  : platformBlack
              }
            >
              {Platform === 'local' ? 'Local' : 'Black Owned'}
            </div>
          </div>

          {specificProd && (
            <FavBtn className={search && ''}>
              <ButtonField color="primary" onClick={() => window.open(Link)}>
                Add to Cart
              </ButtonField>
              <ButtonField color="red" onClick={() => removeFromFav(id)}>
                Remove
              </ButtonField>
            </FavBtn>
          ) }
          
          {!specificProd && (
            <ShopBtn>
              <BtnField className="addToCart" onClick={() => window.open(Link)}>
                Add to Cart
                <img src={cart} alt="cart" className="cartIcon" />
              </BtnField>
            </ShopBtn>
          )}
        </div>
      ) : (
        <HomepageProduct 
          key={id}
          onClick={() => goToProductClass(item)}
        >
          <ImgContainer className={'homepage'}>
            <ProdImg src={images[0]} alt={name} className={isHomepage && 'homepage'} />
          </ImgContainer>
          <ProductNameHomepage>{name}</ProductNameHomepage>
          {!isStoreList && 
          <div>
            <ProductPrice className={'homepage'}>${formatPrice(unit_amount)}</ProductPrice>
            <div
              className={
                Platform === 'local'
                  ? 'platformLocalHomepage'
                  : 'platformBlackHomepage'
              }
            >
              {Platform === 'local' ? 'Local' : 'Black Owned'}
            </div>
          </div>
          }
        </HomepageProduct>
      )
      ));
  };

  const productGridStores = (item) => {
    let storeImg;
    let storeName;

    if (!item) {
      return;
    }

    const list = hpStoresConstant.filter((response) => {
      return response.name === item.toLowerCase();
    })[0];

    storeName = item;
    storeImg = list?.image || '';

    return (
      <HomepageProduct 
        onClick={() => goToProductClass(item)}
      >
        <ImgContainer className={'homepage'}>
          <ProdImg src={storeImg} alt={storeName} className={isHomepage && 'homepage'} />
        </ImgContainer>
        <ProductNameHomepage>{storeName}</ProductNameHomepage>
      </HomepageProduct>
    );
  };

  return (
    <ListProd className={search && 'listProdSearch'}>
      {!isHomepage && currentItems?.map((item) => {
        return productGrid(item);
      })}
      {isStoreList && productGridStores(currentItems)}
      {isHomepage && !isStoreList && productGrid(currentItems)}
      {specificProd && productGrid(specificProd)}
    </ListProd>
  );
};

export default ListOfProducts;
