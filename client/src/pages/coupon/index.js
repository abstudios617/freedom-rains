import React, { useState, useEffect } from 'react';
import { couponScraper } from '../../requests/api-request';
import CouponFilter from '../../components/coupon-filter';
import Ad from '../../components/ad';
import Loader from '../../components/loader';
import ButtonField from '../../components/button-field';
import Navbar from '../../components/nav-coupon';
import { adsConstant } from '../../constants/ads';
import { storesConstant } from '../../constants/stores';
import {
  DealContain,
  Center,
  CouponContainer,
  Section,
  Title,
  ShopWithFreedom,
  SWFImg,
  SWFtext,
  Top,
} from './coupon.style';
import { ListProd } from '../../components/list-of-products/listOfProducts.styles';
import { Container, RoundImg, Brands } from '../../styles/global.style';
import Featured from '../../components/coupon-featured';
import { featured } from '../../constants/mock';

const Coupon = () => {
  const [coupons, setCoupons] = useState([]);
  const [noCoupons, setNoCoupons] = useState(false);
  const [hasStores, setHasStores] = useState(false);
  const [allStores, setAllStores] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const Category = ({title, from, to}) => {
    const [viewAll, setViewAll] = useState(false);
    return (
      <CouponContainer>
        <Section>
          <Title>{title}</Title>
          <span onClick={()=>setViewAll(!viewAll)}>{viewAll?'View Less':'View All'}</span>
        </Section>
        <ListProd className="listProdSearch">
          {isLoading && <Loader />}
          {!isLoading &&
            coupons.slice(from, viewAll?(to+4):to).map((coupon, index) => {
              return (
                <CouponFilter
                  key={index}
                  data={coupon}
                  hasCode={coupon.hasCode}
                  store={coupon.storeFront}
                />
              );
            })}
        </ListProd>
      </CouponContainer>
    );
  };

  const formatDomain = (site) => {
    let domain = site.replace(/https|http|:|www./gi, '');
    domain = domain.split('/')[2];

    return domain;
  };

  const getStores = () => {
    const specificStores = storesConstant.sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase()
        ? -1
        : a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : 0;
    });

    setHasStores(true);
    setAllStores(specificStores);
  };

  const searchSite = async () => {
    setIsLoading(true);
    setNoCoupons(false);

    const couponList = allStores.map(async (store) => {
      const searchWord = formatDomain(store.url);

      const results = await couponScraper(searchWord);
      
      if (!results || results.notRecommended || results.couponCount === 0) {
        return;
      }

      if (results.codes !== 'undefined') {
        results.codes.filter(code => {
          code.storeFront = store;
        });
      }

      return results.codes;
    });

    Promise.all(couponList)
      .then(coupon => {
        const fullList = [];
        const list = coupon.filter(code => {
          return code !== undefined;
        });

        list.forEach(item => {
          item.forEach(response => {
            fullList.push(response);
          });
        });

        setCoupons(fullList);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!hasStores) {
      getStores();
    }
    // eslint-disable-next-line
  }), [hasStores];

  useEffect(() => {
    if (allStores && firstLoad) {
      searchSite();
      setFirstLoad(false);
    }
  }, [allStores, firstLoad]);

  return (
    <DealContain>
      <Container>
        <Top>
          <Navbar />
          <Ad
            btnColor="black"
            adText="Invest. Earn Equity. Build The Future."
            btnText="Invest In Us"
            url="https://netcapital.com/companies/above-beyond"
            page="Coupons"
          />
        </Top>
        {!isLoading && coupons.length > 0 ? (
          <div>
            <CouponContainer>
              <ListProd className="listProdSearch">
                {isLoading && <Loader />}
                {!isLoading &&
                  featured.map((coupon, index) => {
                    return (
                      <Featured
                        key={index}
                        data={coupon}
                        hasCode={coupon.hasCode}
                      />
                    );
                  })}
              </ListProd>
            </CouponContainer>
            <Category 
              title="Father's Day" 
              from={5} 
              to={9}/>
            <Category 
              title="Hot Deals" 
              from={9} 
              to={13}/>
            <Brands>
              <div>
                <RoundImg src="favicon.ico" alt="logo" />
                <p>Freedom</p>
              </div>
              <div>
                <RoundImg src="favicon.ico" alt="logo" />
                <p>Freedom</p>
              </div>
              <div>
                <RoundImg src="favicon.ico" alt="logo" />
                <p>Freedom</p>
              </div>
              <div>
                <RoundImg src="favicon.ico" alt="logo" />
                <p>Freedom</p>
              </div>
              <div>
                <RoundImg src="favicon.ico" alt="logo" />
                <p>Freedom</p>
              </div>
              <div>
                <RoundImg src="favicon.ico" alt="logo" />
                <p>Freedom</p>
              </div>
            </Brands>
            <Category 
              title="Top Rated" 
              from={13} 
              to={17}/>
          </div>
        ) : (
          <div>
            {!noCoupons && (
              <Loader />
            )}
            <Center>
              <Ad
                ad={adsConstant}
                priority="1"
                height="250"
                platform="coupons"
                page="Coupons"
              />
            </Center>
          </div>
        )}
        <ShopWithFreedom>
          <SWFImg />
          <SWFtext>
            <h1>Shop with Freedom</h1>
            <h2>Shop local and find coupons</h2>
            <ButtonField color="green2">learn more</ButtonField>
          </SWFtext>
        </ShopWithFreedom>
      </Container>
    </DealContain>
  );
};

export default Coupon;
