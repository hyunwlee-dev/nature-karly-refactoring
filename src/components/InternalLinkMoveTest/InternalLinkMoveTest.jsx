import {} from 'prop-types';

import {
  InternalLinkMoves,
  ProductReviewSection,
  ProductInquirySection,
} from '..';

import classes from './InternalLinkMoveTest.module.css';
import saladInfoImage from '@/assets/salad/detail_info.jpg';
import saladViewImage from '@/assets/salad/detail_view.jpg';

export function InternalLinkMoveTest() {
  const internalLinkList = [
    {
      id: 'item1',
      name: '상품설명',
      to: '#/productdetail#productDescription',
    },
    {
      id: 'item2',
      name: '상세정보',
      to: '#/productdetail#productDetailImage',
    },
    {
      id: 'item3',
      name: '후기',
      to: '#/productdetail#productReview',
      isNumberOption: true,
    },
    { id: 'item4', name: '문의', to: '#/productdetail#productInquiry' },
  ];

  return (
    <>
      <section className={classes.align}>
        <div className={classes.zIndex}>
          <InternalLinkMoves list={internalLinkList} title="상세 메뉴 리스트" />
        </div>
        <img
          alt="상품설명이미지"
          id="productDescription"
          src={saladViewImage}
        />
        <img
          alt="상품상세정보이미지"
          id="productDetailImage"
          src={saladInfoImage}
        />
        <section className={classes.productReview} id="productReview">
          <ProductReviewSection />
        </section>
        <section className={classes.productInquiry} id="productInquiry">
          <ProductInquirySection />
        </section>
      </section>
    </>
  );
}
