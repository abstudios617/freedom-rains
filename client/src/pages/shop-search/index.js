import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../requests/api-request';
import ReactPaginate from 'react-paginate';
import { shuffleArray } from '../../utils/index';
import Loader from '../../components/loader';
import ListOfProducts from '../../components/list-of-products';
import { 
  SearchContainer,
  Keyword,
  SearchItems,
} from './shopSearch.styles';
import {Container} from '../../styles/global.style';
import { useParams } from 'react-router-dom';

const ShopSearch = ({ isLoggedIn }) => {
  const [products, setProducts] = useState(false);
  const [currentItems, setCurrentItems] = useState(null);
  const [origItems, setOrigItems] = useState([]);
  const [changeableItems, setChangeableItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [forcedPageNum, setForcePageNum] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 12;
  const { type, val } = useParams();

  const getProducts = () => {
    getAllProducts()
      .then((results) => {
        setProducts(true);

        if (type === 'category' || type === 'store') {
          const filtered = [];

          results.forEach((item) => {
            if (item[type] === val) {
              filtered.push(item);
            }
          });

          setCurrentItems(filtered);
          setOrigItems(filtered);
          setChangeableItems(filtered);
        } else if (type === 'search') {
          const keyword = [];

          results.forEach((item) => {
            const searchVal = new RegExp(val.toLowerCase());

            if (
              searchVal.test(item.description && item.description.toLowerCase())
            ) {
              keyword.push(item);
              return;
            }

            if (searchVal.test(item.name.toLowerCase())) {
              keyword.push(item);
              return;
            }

            if (searchVal.test(item.store.toLowerCase())) {
              keyword.push(item);
              return;
            }

            if (searchVal.test(item.category.toLowerCase())) {
              keyword.push(item);
              return;
            }
          });

          setCurrentItems(keyword);
          setOrigItems(keyword);
          setChangeableItems(keyword);
        } else {
          setCurrentItems(shuffleArray(results));
          setOrigItems(results);
          setChangeableItems(results);
        }
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
    <>
      <Container>
        <SearchContainer>
          <SearchItems>
            {type === 'search' && (
              <Keyword>
              Keyword: <span>{val}</span>
              </Keyword>
            )}
            <ListOfProducts currentItems={currentItems} isLoggedIn={isLoggedIn} search={false} />
            {products && (
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
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
    </>
  );
};

export default ShopSearch;
