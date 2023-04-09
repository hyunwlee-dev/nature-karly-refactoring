import { useState } from 'react';

import ProductInformation from './ProductInformation/ProductInformation';
import ProductPrice from './ProductPrice/ProductPrice';
import { A11yHidden, Button } from '..';

import TangTang from '../../assets/tangtang/detail_view.jpg';

import classes from './ProductDetailTable.module.css';

const ProductDetailTable = function ({ name, description, price }) {
  const [count, setCount] = useState(1);

  const onDecrease = function () {
    setCount((prevCount) => prevCount - 1);
  };

  const onIncrease = function () {
    setCount((prevCount) => prevCount + 1);
  };
  const productPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const amountQuantity = price * count;
  const totalPrice = amountQuantity
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className={classes.Inner}>
      <section className={classes.ProductDetailTable}>
        <h2 className={classes.ProductDetailTableTitle}>{name}</h2>
        <img alt="탱탱쫄면" className={classes.ProductImage} src={TangTang} />
        <p className={classes.DeliveryType}>샛별배송</p>
        <article className={classes.ProductInformationTable}>
          <p className={classes.Description}>{description}</p>
          <p className={classes.Price}>
            {productPrice}
            <span>원</span>
          </p>
          <p className={classes.PointGuide}>
            로그인 후, 적립 혜택이 제공됩니다.
          </p>
          <ProductInformation
            content={'샛별배송'}
            style={{ marginTop: '20px' }}
            title={'배송'}
            subcontent={
              '23시 주문 시 내일 아침 7시 전 도착\n(대구 부산 울사 샛별배송 운영시간 별도 확인'
            }
          />
          <ProductInformation content={'칼리'} title={'판매자'} />
          <ProductInformation
            content={'상온 (종이포장)'}
            subcontent={'택배배송은 에코 포장이 스티로폼으로 대체됩니다.'}
            title={'포장타입'}
          />
          <ProductInformation content={'1봉'} title={'판매단위'} />
          <ProductInformation content={'123g*4봉'} title={'중량/용량'} />
          <ProductInformation
            content={'상세페이지 별도표기'}
            title={'원산지'}
          />
          <ProductInformation
            title={'알레르기정보'}
            allergycontent={
              '-대두, 밀, 쇠고기 함유\n-계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토, 아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복, 홍합 포함)를 사용한 제품과 같은 제조시설에서 제조'
            }
          />
          <ProductPrice
            count={count}
            name={name}
            price={productPrice}
            title={'상품선택'}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
          <div className={classes.TotalPrice}>
            <p className={classes.TotalPriceText}>총 상품금액:</p>
            <p className={classes.Price}>
              {totalPrice}
              <span>원</span>
            </p>
          </div>
          <p className={[classes.PointGuide, classes.Badge].join(' ')}>
            로그인 후, 적립 혜택 제공
          </p>
          <div className={classes.ProductDetailTableButton}>
            <Button className={classes.HeartButton}>
              <A11yHidden>찜하기</A11yHidden>
            </Button>
            <Button className={classes.AlarmButton}>
              <A11yHidden>알림설정</A11yHidden>
            </Button>
            <Button
              style={{
                width: '424px',
                borderRadius: '4px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              장바구니 담기
            </Button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProductDetailTable;
