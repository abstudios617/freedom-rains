import React, { useState } from 'react';
import { addEvent } from '../../requests/analytics-request';
import ModalOneBtn from '../../components/modal-one-btn';
import { 
  Coupon,
  Body,
  Code, 
  Hide,
  Header,
  Description,
  TopRight,
  Sponsored
} from './couponFilter.styles'; 
import { 
  ImgContainer,
  ProdImg,
  ProdName,
  Icon,
} from '../list-of-products/listOfProducts.styles';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';

const CouponFilter = ({ data, store }) => {
  const [openModalOne, setOpenModalOne] = useState(false);
  var today = new Date();
  var dd = String(today.getDate());
  var mm = String(today.getMonth() + 1); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '-' + dd + '-' + yyyy;
  const closeModal = () => {
    setOpenModalOne(false);
  };

  const copyCoupon = (e) => {
    const copyText = e.target.firstElementChild; 

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand('copy');

    addEvent({
      event: 'Coupon Section',
      props: {
        action: 'Click',
        label: 'searched coupon has been copied',
      },
    });
    setOpenModalOne(true);
  };

  return (
    <Coupon>
      <Icon><FavoriteBorderOutlined/></Icon>
      <Header>
        {data?.endDate==today&&<Description>
          Ends Today
          <TopRight/>
        </Description>}
      </Header>
      <ImgContainer> 
        { store?.small_img && (
          <ProdImg className="featured" src={store.small_img} alt={store.name} />
        )}
        { !store?.small_img && (
          <ProdName>{ store?.name }</ProdName>
        )}
      </ImgContainer>
      <Body>
        {data?.sponsored&&<Sponsored>Sponsored</Sponsored>}
        <div>
          <span className="title">{data?.title}</span>
          <span className="price">{data?.newPrice}</span>
        </div>
        <div>
          <span className="subtitle">{data?.description}</span>
          <span className="oldprice">{data?.oldPrice}</span>
        </div>
      </Body>
      <Code onClick={copyCoupon}>
        Copy
        <Hide
          type="text"
          defaultValue={data?.code}
          readOnly="readOnly"
        />
      </Code>
      <ModalOneBtn
        openModal={openModalOne}
        closeModal={closeModal}
        isSmall={false}
        message1={`${data?.code} has been copied.`}
        message2={`Use this code for ${data?.title} at ${store?.name}`}
        hasBtn={false}
      />
    </Coupon>
  );
};

export default CouponFilter;
