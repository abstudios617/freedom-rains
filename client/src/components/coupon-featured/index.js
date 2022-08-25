import React, { useState } from 'react';
import { addEvent } from '../../requests/analytics-request';
import ModalOneBtn from '../modal-one-btn';
import { 
  Coupon,
  Body, 
  Hide,
  Sponsored,
} from './couponFilter.styles'; 
import { 
  ImgContainer,
  ProdImg,
  ProdName,
} from '../list-of-products/listOfProducts.styles';

const Featured = ({ data }) => {
  const [openModalOne, setOpenModalOne] = useState(false);

  const closeModal = () => {
    setOpenModalOne(false);
  };

  const copyCoupon = (e) => {
    const copyText = e.target.lastElementChild;
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
    <div>
      <Coupon onClick={copyCoupon}>
        <ImgContainer className="featured"> 
          { data?.source && (
            <ProdImg className="featured" src={data.source} />
          )}
          { !data?.source && (
            <ProdName>{ data.title }</ProdName>
          )}
        </ImgContainer>
        <Hide
          type="text"
          defaultValue={data?.code}
          readOnly="readOnly"
        />
        <Body>
          <div>
            <span className={data?.whitebg?'price':'wPrice'}>{data?.discount}</span>
          </div>
          {data?.sponsored && <Sponsored>Sponsored!</Sponsored>}
        </Body>
      </Coupon>
      <ModalOneBtn
        openModal={openModalOne}
        closeModal={closeModal}
        isSmall={false}
        message1={`${data?.code} has been copied.`}
        message2={`Use this code for ${data?.title}`}
        hasBtn={false}
        isCoupon={true}
      />
    </div>
  );
};

export default Featured;
