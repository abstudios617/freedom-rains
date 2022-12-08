import React, { useState, useEffect } from 'react';
import { getItem, setItem } from '../../utils/index';
import Login from '../../components/login';
import { getAllProducts, updateFavorites } from '../../requests/api-request';
import ListOfProducts from '../../components/list-of-products';
import { Gallery, NotAvailable } from './favorites.style';
import {Container, Title, SubTitle} from '../../styles/global.style';

const Favorites = ({ isLoggedIn, setIsLoggedIn }) => {
  const [favStore, setFavStore] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [allProducts, setAllProducts] = useState(null);

  const removeFromFav = async (store) => {
    let favs = JSON.parse(getItem('favorites'));

    const removeStore = favs.indexOf(store);
    favs.splice(removeStore, 1);

    setItem('favorites', JSON.stringify(favs));
    await updateFavorites(
      {
        favorites: JSON.stringify(favs),
      }
    );
    getFavStores();
  };

  const getFavStores = () => {
    const favs = JSON.parse(getItem('favorites'));
    let arr = [];

    if (favs) {
      favs.forEach((item) => {
        const stores = allProducts.filter((result) => {
          return item === result.id;
        })[0];

        arr.push(stores);
      });
    }

    if (arr.length > 0) {
      arr = arr.sort(function (a, b) {
        return +a.priority > +b.priority ? 1 : -1;
      });
    }

    setFavStore(arr);
  };

  const getProducts = () => {
    getAllProducts()
      .then((result) => {
        setAllProducts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createFavs = () => {
    const stores = favStore.map((item) => {
      if (!item) return null;

      return (
        <ListOfProducts
          specificProd={item}
          removeFromFav={removeFromFav}
          isLoggedIn={isLoggedIn}
          key={item.id}
        />
      );
    });

    setFavorites(stores);
  };

  useEffect(() => {
    if (!favStore && allProducts) {
      getFavStores();
    } else if (favStore) {
      createFavs();
    }
  }, [favStore, allProducts]);

  useEffect(() => {
    if (!allProducts) {
      getProducts();
    }
  }, [allProducts]);

  if (!isLoggedIn) {
    return (
      <Container>
        <Title>
          <span>Favorites</span>
          <SubTitle>
            Please login to use this page. Once logged in, you will be
            redirected back to your Favorites
          </SubTitle>
        </Title>
        <Login setIsLoggedIn={setIsLoggedIn} redirect="favs" />
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        <span>Your Favorites</span>
      </Title>
      <Gallery>
        {favorites.length > 0 ? (
          favorites
        ) : (
          <NotAvailable>
            Shop around and save your favorite products!
          </NotAvailable>
        )}
      </Gallery>
    </Container>
  );
};

export default Favorites;
