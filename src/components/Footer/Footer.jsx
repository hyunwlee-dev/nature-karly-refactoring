import classes from './Footer.module.css';

import blog from '@/assets/icons/Icon/footer/Blog.svg';
import faceBook from '@/assets/icons/Icon/footer/faceBook.svg';
import instagram from '@/assets/icons/Icon/footer/instagram.svg';

import isms from '@/assets/icons/Icon/footer/logo_isms.svg';
import privacy from '@/assets/icons/Icon/footer/logo_privacy.svg';
import tosspayments from '@/assets/icons/Icon/footer/logo_tosspayments.svg';
import wooriBank from '@/assets/icons/Icon/footer/logo_wooriBank.svg';
import naverPost from '@/assets/icons/Icon/footer/naverPost.svg';
import youtube from '@/assets/icons/Icon/footer/youtube.svg';
import { Container, IconComponent, Button } from '@/components';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.footerContainer}>
        <div className={classes.footerInner}>
          <section className={classes.customerService}>
            <h2>고객행복센터</h2>
            <div className={classes.serviceNumber}>
              <b>1644-1107</b>
              <span className={classes.firstSpan}>
                월~토요일 오전 7시 - 오후 6시
              </span>
            </div>
            <ul className={classes.inquiry}>
              <li>
                <Button style={{ backgroundColor: 'transparent' }}>
                  카카오톡 문의
                </Button>
                <div>
                  <p>
                    월~토요일 <span aria-hidden="true">|</span> 오전 7시 - 오후
                    6시
                  </p>
                  <p>
                    일/공휴일 <span aria-hidden="true">|</span> 오전 7시 - 오후
                    1시
                  </p>
                </div>
              </li>
              <li>
                <Button style={{ backgroundColor: 'transparent' }}>
                  1:1 문의
                </Button>
                <div>
                  <p>365일</p>
                  <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
                </div>
              </li>
              <li>
                <Button style={{ backgroundColor: 'transparent' }}>
                  대량주문 문의
                </Button>
                <div>
                  <p>
                    월~금요일 <span aria-hidden="true">|</span> 오전 9시 - 오후
                    6시
                  </p>
                  <p>
                    점심시간 <span aria-hidden="true">|</span> 낮 12시 - 오후
                    1시
                  </p>
                </div>
              </li>
            </ul>
            <span>비회원 문의 : </span>
            <a href="#">help@karlycorp.com</a>
            <br />
            <span>비회원 대량주문 문의 : </span>
            <a href="#">help@karlycorp.com</a>
          </section>
          <section className={classes.about}>
            <ul className={classes.footerNavigation}>
              <li>칼리소개</li>
              <li>칼리소개영상</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </ul>
            <p>
              법인명(상호) : 주식회사 컬리{' '}
              <span aria-hidden="true" className={classes.ariaSpan}>
                |
              </span>{' '}
              사업자등록번호 : 261-81-23567{' '}
              <span aria-hidden="true" className={classes.ariaSpan}>
                |
              </span>
              <a href="#">사업자정보 확인</a>
            </p>
            <p>
              통신판매업 : 제 2018-서울강남-01646 호{' '}
              <span aria-hidden="true" className={classes.ariaSpan}>
                |
              </span>{' '}
              개인정보보호책임자 : 이원준
            </p>
            <address>
              <p>
                주소 : 서울특별시 강남구 테헤란로 133,18층(역삼동){' '}
                <span aria-hidden="true" className={classes.ariaSpan}>
                  |
                </span>{' '}
                대표이사 : 김슬아{' '}
              </p>
              <p>
                입점문의 : 입점문의하기{' '}
                <span aria-hidden="true" className={classes.ariaSpan}>
                  |
                </span>{' '}
                제휴문의 : <a href="#">business@kurlycorp.com</a>
              </p>
              <p>
                채용문의 : <a href="#">recruit@kurlycorp.com</a>
              </p>
              <p>팩스 : 070 - 7500 - 6098</p>
            </address>
            <ul className={classes.snsList}>
              <li>
                <IconComponent>
                  <a href="#">
                    <img alt="블로그" src={blog} />
                  </a>
                </IconComponent>
              </li>
              <li>
                <IconComponent>
                  <a href="#">
                    <img alt="페이스북" src={faceBook} />
                  </a>
                </IconComponent>
              </li>
              <li>
                <IconComponent>
                  <a href="#">
                    <img alt="인스타그램" src={instagram} />
                  </a>
                </IconComponent>
              </li>
              <li>
                <IconComponent>
                  <a href="#">
                    <img alt="네이버포스트" src={naverPost} />
                  </a>
                </IconComponent>
              </li>
              <li>
                <IconComponent>
                  <a href="#">
                    <img alt="유튜브" src={youtube} />
                  </a>
                </IconComponent>
              </li>
            </ul>
          </section>
        </div>
        <ul className={classes.aboutMiddleList}>
          <li>
            <IconComponent>
              <a href="#">
                <img alt="정보보호관리체계" src={isms} />
              </a>
            </IconComponent>
            <div>
              <p>[인증범위] 마켓컬리 쇼핑몰 서비스 개발 운영</p>
              <p>(심사받지 않은 물리적 인프라 제외)</p>
              <p>[유효기간] 2022.01.19 ~ 2025.01.18</p>
            </div>
          </li>
          <li>
            <IconComponent>
              <a href="#">
                <img alt="개인정보보호" src={privacy} />
              </a>
            </IconComponent>
            <div>
              <p>개인정보보호 우수 웹사이트</p>
              <p>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
            </div>
          </li>
          <li>
            <IconComponent style={{ width: '102px', height: '32px' }}>
              <a href="#">
                <img alt="토스페이먼츠" src={tosspayments} />
              </a>
            </IconComponent>
            <p>
              토스페이먼츠 구매안전(에스크로) 서비스
              <br />를 이용하실 수 있습니다.
            </p>
          </li>
          <li>
            <IconComponent style={{ width: '34px', height: '34px' }}>
              <a href="#">
                <img alt="우리은행" src={wooriBank} />
              </a>
            </IconComponent>
            <p>
              고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보
              <br />증 계약을 체결하여 안전거래를 보장하고 있습니다.
            </p>
          </li>
        </ul>
      </Container>
      <article className={classes.footerBottom}>
        <p>
          마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
          판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
        </p>
        <p>
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
          통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불
          등 의무와 책임을 부담하지 않습니다.
        </p>
        <small className="copyright"> © KURLY CORP. ALL RIGHTS RESERVED </small>
      </article>
    </footer>
  );
}
