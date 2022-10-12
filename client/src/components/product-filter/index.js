import React, { useState, useEffect } from 'react';
import { addEvent } from '../../requests/analytics-request';
import ButtonField from '../button-field';
import { 
  Filter,
  FilterContainer,
  FilterTitle,
  FilterItem,
  FilterSelected,
  FilterRemove,
  FilterLower,
  ViewFilter,
  ViewItems,
  ToggleFilter,
  FilterItemContainer 
} from './productFilter.styles';
import vector from '../../assets/icons/vector.svg';

const ProductFilter = ({
  origItems,
  changeableItems,
  setChangeableItems,
  setItemOffset,
  setForcePageNum,
}) => {
  const [filterPlatform, setFilterPlatform] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);
  const [filterStore, setFilterStore] = useState(null);
  const [filterPrice, setFilterPrice] = useState(null);
  const [origProducts, setOrigProducts] = useState(origItems);
  const [products, setProducts] = useState(changeableItems);
  const [allCategories, setAllCategories] = useState(null);
  const [allStores, setAllStores] = useState(null);
  const [allPlatforms, setAllPlatforms] = useState(null);
  const [allPrices, setAllPrices] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [categoryViewable, setCategoryViewable] = useState(5);
  const [storeViewable, setStoreViewable] = useState(5);

  const updateList = () => {
    return origProducts.filter((prod) => {
      // Check for 4 matches
      if (filterPlatform && filterStore && filterCategory && filterPrice) {
        return (
          prod.platform === filterPlatform &&
          prod.store === filterStore &&
          prod.category === filterCategory &&
          +prod.price < filterPrice.high &&
          +prod.price > filterPrice.low
        );
      }

      // Check for 3 matches
      if (filterPlatform && filterStore && filterCategory) {
        return (
          prod.platform === filterPlatform &&
          prod.store === filterStore &&
          prod.category === filterCategory
        );
      }
      if (filterPlatform && filterStore && filterPrice) {
        return (
          prod.platform === filterPlatform &&
          prod.store === filterStore &&
          +prod.price < filterPrice.high &&
          +prod.price > filterPrice.low
        );
      }
      if (filterPlatform && filterPrice && filterCategory) {
        return (
          prod.platform === filterPlatform &&
          +prod.price < filterPrice.high &&
          +prod.price > filterPrice.low &&
          prod.category === filterCategory
        );
      }
      if (filterStore && filterPrice && filterCategory) {
        return (
          prod.store === filterStore &&
          +prod.price < filterPrice.high &&
          +prod.price > filterPrice.low &&
          prod.category === filterCategory
        );
      }

      // Check for 2 matches
      if (filterPlatform && filterStore) {
        return prod.platform === filterPlatform && prod.store === filterStore;
      }
      if (filterPlatform && filterCategory) {
        return (
          prod.platform === filterPlatform && prod.category === filterCategory
        );
      }
      if (filterPlatform && filterPrice) {
        return (
          prod.platform === filterPlatform &&
          +prod.price < filterPrice.high &&
          +prod.price > filterPrice.low
        );
      }
      if (filterStore && filterCategory) {
        return prod.category === filterCategory && prod.store === filterStore;
      }
      if (filterStore && filterPrice) {
        return (
          prod.store === filterStore &&
          +prod.price < filterPrice.high &&
          +prod.price > filterPrice.low
        );
      }
      if (filterCategory && filterPrice) {
        return (
          prod.category === filterCategory &&
          +prod.price < filterPrice.high &&
          +prod.price > filterPrice.low
        );
      }

      // Check for 1 match
      if (filterPlatform) {
        return prod.platform === filterPlatform;
      }
      if (filterStore) {
        return prod.store === filterStore;
      }
      if (filterCategory) {
        return prod.category === filterCategory;
      }
      if (filterPrice) {
        return +prod.price < filterPrice.high && +prod.price > filterPrice.low;
      }

      // No filters
      return prod;
    });
  };

  const shuffleProduct = () => {
    let newProductList = updateList();

    setChangeableItems(newProductList);
    setItemOffset(0);
    setForcePageNum(0);
  };

  const getProductCategories = () => {
    if (!products || products.length === 0) {
      return;
    }
    const arr = [];

    products.forEach((item) => {
      if (arr.indexOf(item.category) === -1) {
        arr.push(item.category);
      }
    });

    setAllCategories(arr.sort());
  };

  const getProductStores = () => {
    if (!products || products.length === 0) {
      return;
    }
    const arr = [];

    products.forEach((item) => {
      if (arr.indexOf(item.store) === -1) {
        arr.push(item.store);
      }
    });

    setAllStores(arr.sort());
  };

  const getProductPlatforms = () => {
    if (!products || products.length === 0) {
      return;
    }
    const arr = [];

    products.forEach((item) => {
      if (arr.indexOf(item.platform) === -1 && item.platform !== 'exclusive') {
        arr.push(item.platform);
      }
    });

    setAllPlatforms(arr.sort());
  };

  const getProductPrice = () => {
    if (!products || products.length === 0) {
      return;
    }
    const arr = [];

    products.forEach((item) => {
      if (+item.price < 10 && arr.indexOf(10) === -1) {
        arr.push(10);
      }
      if (+item.price > 10 && +item.price < 20 && arr.indexOf(20) === -1) {
        arr.push(20);
      }
      if (+item.price > 20 && +item.price < 30 && arr.indexOf(30) === -1) {
        arr.push(30);
      }
      if (+item.price > 30 && +item.price < 40 && arr.indexOf(40) === -1) {
        arr.push(40);
      }
      if (+item.price > 40 && +item.price < 50 && arr.indexOf(50) === -1) {
        arr.push(50);
      }
      if (+item.price > 50 && arr.indexOf(999) === -1) {
        arr.push(999);
      }
    });

    setAllPrices(arr.sort());
  };

  const getFilteredPlatform = (platform) => {
    setFilterPlatform(platform);
    addEvent({
      event: 'Platform filter selection',
      props: {
        action: 'Click',
        label: platform ? platform : 'cleared',
      },
    });
  };

  const getFilteredCategory = (category) => {
    setFilterCategory(category);
    addEvent({
      event: 'Category filter selection',
      props: {
        action: 'Click',
        label: category ? category : 'cleared',
      },
    });
  };

  const getFilteredStore = (store) => {
    setFilterStore(store);
    addEvent({
      event: 'Store filter selection',
      props: {
        action: 'Click',
        label: store ? store : 'cleared',
      },
    });
  };

  const getFilteredPrice = (price) => {
    setFilterPrice(price);
    addEvent({
      event: 'Price filter selection',
      props: {
        action: 'Click',
        label: price ? price : 'cleared',
      },
    });
  };

  const viewableItems = (type, typeLength = 5) => {
    if (type === 'category') {
      setCategoryViewable(typeLength);
    }

    if (type === 'store') {
      setStoreViewable(typeLength);
    }
  };

  useEffect(() => {
    setOrigProducts(origItems);
  }, [origItems]);

  useEffect(() => {
    setProducts(changeableItems);
    setAllCategories(null);
    setAllStores(null);
    setAllPlatforms(null);
  }, [changeableItems]);

  useEffect(() => {
    shuffleProduct();
  }, [filterPlatform, filterPrice, filterStore, filterCategory]);

  useEffect(() => {
    if (!allCategories) {
      getProductCategories();
    }
  }, [allCategories, products]);

  useEffect(() => {
    if (!allStores) {
      getProductStores();
    }
  }, [allStores, products]);

  useEffect(() => {
    if (!allPlatforms) {
      getProductPlatforms();
    }
  }, [allPlatforms, products]);

  useEffect(() => {
    if (!allPrices) {
      getProductPrice();
    }
  }, [allPrices, products]);

  return (
    <Filter>
      <ViewFilter>
        <ButtonField color="allWhite" onClick={() => setShowFilter(!showFilter)}>
          Filters
        </ButtonField>
      </ViewFilter>
      <ToggleFilter className={showFilter && 'filterSpacing'}>
        <FilterContainer>
          <FilterTitle>
            Platform
            <img src={vector} alt="vector" />
          </FilterTitle>
          {filterPlatform ? (
            <FilterSelected>
              {filterPlatform}
              <FilterRemove
                onClick={() => getFilteredPlatform(null)}
              >
                (remove)
              </FilterRemove>
            </FilterSelected>
          ) : (
            <FilterItemContainer>
              {allPlatforms &&
                allPlatforms.map((platform, index) => {
                  return (
                    <FilterItem
                      key={index}
                      onClick={() => getFilteredPlatform(platform)}
                    >
                      {platform}
                    </FilterItem>
                  );
                })}
            </FilterItemContainer>
          )}
        </FilterContainer>
        <FilterContainer>
          <FilterTitle>
            Categories
            <img src={vector} alt="vector" />
          </FilterTitle>
          {filterCategory ? (
            <FilterSelected>
              {filterCategory}
              <FilterRemove
                onClick={() => getFilteredCategory(null)}
              >
                (remove)
              </FilterRemove>
            </FilterSelected>
          ) : (
            <FilterItemContainer>
              {allCategories &&
                categoryViewable === 5 &&
                allCategories
                  .slice(0, categoryViewable)
                  .map((category, index) => {
                    return (
                      <FilterItem
                        key={index}
                        onClick={() => getFilteredCategory(category)}
                      >
                        {category}
                      </FilterItem>
                    );
                  })}
              {allCategories &&
                categoryViewable > 5 &&
                allCategories.map((category, index) => {
                  return (
                    <FilterItem
                      key={index}
                      onClick={() => getFilteredCategory(category)}
                    >
                      {category}
                    </FilterItem>
                  );
                })}
              {allCategories &&
                allCategories.length > 5 &&
                categoryViewable === 5 && (
                <ViewItems
                  onClick={() =>
                    viewableItems('category', allCategories.length)
                  }
                >
                    See More
                </ViewItems>
              )}
              {categoryViewable > 5 && (
                <ViewItems
                  onClick={() => viewableItems('category')}
                >
                  See Less
                </ViewItems>
              )}
            </FilterItemContainer>
          )}
        </FilterContainer>
        <FilterContainer>
          <FilterTitle>
            Store
            <img src={vector} alt="vector" />
          </FilterTitle>
          {filterStore ? (
            <FilterSelected>
              {filterStore}
              <FilterRemove
                onClick={() => getFilteredStore(null)}
              >
                (remove)
              </FilterRemove>
            </FilterSelected>
          ) : (
            <FilterItemContainer>
              {allStores &&
                storeViewable === 5 &&
                allStores.slice(0, storeViewable).map((store, index) => {
                  return (
                    <FilterItem
                      key={index}
                      onClick={() => getFilteredStore(store)}
                    >
                      {store}
                    </FilterItem>
                  );
                })}
              {allStores &&
                storeViewable > 5 &&
                allStores.map((store, index) => {
                  return (
                    <FilterItem
                      key={index}
                      onClick={() => getFilteredStore(store)}
                    >
                      {store}
                    </FilterItem>
                  );
                })}
              {allStores && allStores.length > 5 && storeViewable === 5 && (
                <ViewItems
                  onClick={() => viewableItems('store', allStores.length)}
                >
                  See More
                </ViewItems>
              )}
              {storeViewable > 5 && (
                <ViewItems
                  onClick={() => viewableItems('store')}
                >
                  See Less
                </ViewItems>
              )}
            </FilterItemContainer>
          )}
        </FilterContainer>
        <FilterContainer>
          <FilterTitle>
            Price Range
            <img src={vector} alt="vector" />
          </FilterTitle>
          {filterPrice ? (
            <FilterSelected>
              <FilterLower>{`$${filterPrice.low} ${
                filterPrice.high === 999
                  ? 'and above'
                  : `- $${filterPrice.high}`
              }`}</FilterLower>
              <FilterRemove
                onClick={() => getFilteredPrice(null)}
              >
                (remove)
              </FilterRemove>
            </FilterSelected>
          ) : (
            <FilterItemContainer>
              {allPrices &&
                allPrices.map((price, index) => {
                  return (
                    <FilterItem
                      key={index}
                      onClick={() =>
                        getFilteredPrice({
                          low: +price === 999 ? 50 : +price - 10,
                          high: +price,
                        })
                      }
                    >
                      <FilterLower>{`$${
                        +price === 999 ? '50' : +price - 10
                      } ${+price === 999 ? 'and above' : `- $${price}`}`}</FilterLower>
                    </FilterItem>
                  );
                })}
            </FilterItemContainer>
          )}
        </FilterContainer>
      </ToggleFilter>
    </Filter>
  );
};

export default ProductFilter;
