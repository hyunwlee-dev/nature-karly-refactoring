import {
  useRef,
  useEffect,
  // useLayoutEffect,
} from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import classes from './Product.module.css';

import { modalStates, showModalState } from '@/@store/modalStates';
import { A11yHidden, IconComponent } from '@/components';
import {
  useReadData,
  // useWriteBatchData ,
} from '@/firebase/firestore';

// import shopData from '@/app/shop-data';

export function Product({ isSwiper }) {
  // const { writeBatchData } = useWriteBatchData('products', 'title');

  // useLayoutEffect(() => {
  //   writeBatchData(shopData);
  // }, []);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const dataProps = { width: '45px', height: '45px' };

  const { readData, data } = useReadData('products');
  const [modalState, setModalState] = useRecoilState(modalStates);
  const setShowModal = useSetRecoilState(showModalState);

  useEffect(() => {
    readData();
  }, [readData]);

  if (isSwiper) {
    return (
      <div className="productSwiper">
        <button
          ref={prevRef}
          aria-label="이전"
          className="swiper-button-prev"
          type="button"
        ></button>
        <button
          ref={nextRef}
          aria-label="다음"
          className="swiper-button-next"
          type="button"
        ></button>
        <Swiper
          modules={[Navigation]}
          slidesPerGroup={4}
          slidesPerView={4}
          spaceBetween={18}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }}
        >
          {data &&
            data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className={classes.productImg}>
                    <Link to="/productdetail">
                      <img alt={item.image.alt} src={item.image.thumbnail} />
                    </Link>
                    <IconComponent
                      aria-label="장바구니 담기"
                      className={classes.cart}
                      data-image="cart"
                      dataProps={dataProps}
                      role="button"
                      tabIndex="0"
                      onClick={() => {
                        setModalState({ ...modalState, addCartModal: true });
                        setShowModal(true);
                      }}
                    />
                  </div>
                  <ul className={classes.productInfo}>
                    <li className={classes.name}>
                      <Link to="/productdetail">{item.name}</Link>
                    </li>
                    {item.salePrice ? (
                      <li className={classes.saleRatio}>
                        <p className={classes.saleRatioRate}>
                          <A11yHidden>할인율</A11yHidden>{' '}
                          {`${item.saleRatio * 100}%`}
                        </p>
                        <p className={classes.salePrice}>
                          <A11yHidden>할인가</A11yHidden>{' '}
                          {`${item.salePrice.toLocaleString('ko-KR')}원`}
                        </p>
                        <p className={classes.price}>
                          <A11yHidden>정상가</A11yHidden>{' '}
                          {`${item.price.toLocaleString('ko-KR')}원`}
                        </p>
                      </li>
                    ) : (
                      <li className={classes.saleRatio}>
                        <p className={classes.salePrice}>
                          {`${item.price.toLocaleString('ko-KR')}원`}
                        </p>
                      </li>
                    )}
                  </ul>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    );
  }

  return (
    <ul className={classes.productList}>
      {data &&
        data.map((item) => {
          return (
            <li key={item.id}>
              <div className={classes.productImg}>
                <Link to="/productdetail">
                  <img alt={item.image.alt} src={item.image.thumbnail} />
                </Link>
                <IconComponent
                  aria-label="장바구니 담기"
                  className={classes.cart}
                  data-image="cart"
                  dataProps={dataProps}
                  role="button"
                  tabIndex="0"
                  onClick={() => {
                    setModalState({ ...modalState, addCartModal: true });
                    setShowModal(true);
                  }}
                />
              </div>
              <ul className={classes.productInfo}>
                <li className={classes.delivery}>샛별배송</li>
                <li className={classes.name}>
                  <Link to="/productdetail">{item.name}</Link>
                </li>
                {item.salePrice ? (
                  <li className={classes.saleRatio}>
                    <p className={classes.saleRatioRate}>
                      <A11yHidden>할인율</A11yHidden>{' '}
                      {`${item.saleRatio * 100}%`}
                    </p>
                    <p className={classes.salePrice}>
                      <A11yHidden>할인가</A11yHidden>{' '}
                      {`${item.salePrice.toLocaleString('ko-KR')}원`}
                    </p>
                    <p className={classes.price}>
                      <A11yHidden>정상가</A11yHidden>{' '}
                      {`${item.price.toLocaleString('ko-KR')}원`}
                    </p>
                  </li>
                ) : (
                  <li className={classes.saleRatio}>
                    <p className={classes.salePrice}>
                      {`${item.price.toLocaleString('ko-KR')}원`}
                    </p>
                  </li>
                )}
                <li className={classes.description}>{item.description}</li>
                <li className={classes.icon}>
                  {item.badge.karly ? (
                    <span className={classes.karly}>Karly Only</span>
                  ) : (
                    ''
                  )}
                  {item.badge.limit ? (
                    <span className={classes.limit}>한정수량</span>
                  ) : (
                    ''
                  )}
                </li>
              </ul>
            </li>
          );
        })}
    </ul>
  );
}

/* data -------------------------------------------------------------------- */

Product.defaultdata = {
  isSwiper: false,
  isSale: false,
};

Product.propTypes = {
  isSwiper: PropTypes.bool,
  isSale: PropTypes.bool,
};
