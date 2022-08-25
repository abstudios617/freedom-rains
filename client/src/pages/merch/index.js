import React, { useState, useEffect } from 'react';
import ListOfProducts from '../../components/list-of-products';
import { getPrintfulProducts, getSpecificPrintfulProducts } from '../../requests/api-request';

const Merch = () => {
  let [products, setProducts] = useState([]);
  let arr = [];

  const getProducts = async () => {
    const productData = await getPrintfulProducts();

    productData.result.forEach(async item => {
      const specificProd = await getSpecificPrintfulProducts(item.id);
       
      if (specificProd) {
        const { result } = specificProd;
        const product = {
          id: item.id,
          name: item.name,
          price: result.sync_variants[0].retail_price,
          image: item.product.image,
          platform: 'freedom',
          link: '',             
        };
        arr.push(product);
      }
    });
    setProducts(arr);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ListOfProducts
      currentItems={products}
      isLoggedIn={false}
    />
  );
};

export default Merch;
