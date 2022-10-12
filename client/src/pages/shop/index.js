import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../requests/api-request';
import ReactPaginate from 'react-paginate';
import ProductFilter from '../../components/product-filter';
import { shuffleArray } from '../../utils/index';
import Loader from '../../components/loader';
import ListOfProducts from '../../components/list-of-products';
import { 
  SearchContainer,
  SearchItems,
} from './shop.style';
import {Container} from '../../styles/global.style';

const Shop = ({ isLoggedIn }) => {
  const [products, setProducts] = useState(false);
  const [currentItems, setCurrentItems] = useState(null);
  const [origItems, setOrigItems] = useState([]);
  const [changeableItems, setChangeableItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [forcedPageNum, setForcePageNum] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 16;

  const getProducts = () => {
    getAllProducts()
      .then((results) => {
        setProducts(true);
        setCurrentItems(shuffleArray(results));
        setOrigItems(results);
        setChangeableItems(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % origItems.length;
    setItemOffset(newOffset);
    setForcePageNum(undefined);
  };

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  }, [products]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(changeableItems.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(changeableItems.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, changeableItems]);

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      <SearchContainer>
        <ProductFilter
          origItems={origItems}
          changeableItems={changeableItems}
          setChangeableItems={setChangeableItems}
          setItemOffset={setItemOffset}
          setForcePageNum={setForcePageNum}
        />
        <SearchItems>
          <ListOfProducts currentItems={currentItems} isLoggedIn={isLoggedIn} search={true} />
          {products && (
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              previousClassName="prev"
              nextClassName="next"
              containerClassName="paginate"
              pageClassName="num"
              disabledClassName="disabled"
              activeClassName="active"
              forcePage={forcedPageNum}
            />
          )}
          {currentItems && currentItems.length === 0 && (
            <div>There are no products available...</div>
          )}
        </SearchItems>
      </SearchContainer>
    </Container>
  );
};

export default Shop;
