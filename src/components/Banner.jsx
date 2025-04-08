import React from "react";
import Slider from "react-slick";
import "./Banner.css"; // 배너 스타일
import "slick-carousel/slick/slick.css"; // slick 기본 스타일
import "slick-carousel/slick/slick-theme.css"; // slick 테마 스타일
import img1 from "../assets/images/img1.gif"

// 슬라이더 설정
const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// 배너 컴포넌트
function Banner() {
  return (
    <div className="banner-container">
      <Slider {...settings}>
        <div className="banner-item">
          <img
            src={img1}
            alt="에스파 콘서트"
          />
          <div className="banner-text">
            <h3>공연도 혜택도 지금이 찬스!</h3>
            <p>오늘의 타임딜 공연은?</p>
          </div>
        </div>
        <div className="banner-item">
          <img
            src="https://via.placeholder.com/500x300?text=TXT+Concert"
            alt="TXT 콘서트"
          />
          <div className="banner-text">
            <h3>너의 결혼식 미니콘서트</h3>
            <p>4월 7일 저녁 7시 방송</p>
          </div>
        </div>
        <div className="banner-item">
          <img
            src="https://via.placeholder.com/500x300?text=Vincent+Van+Gogh+Exhibition"
            alt="빈센트 반 고흐 전시회"
          />
          <div className="banner-text">
            <h3>빈센트 반 고흐 전시회</h3>
            <p>특별 전시, 놓치지 마세요!</p>
          </div>
        </div>
        <div className="banner-item">
          <img
            src="https://via.placeholder.com/500x300?text=COEX+Art+Fair"
            alt="코엑스 아트페어"
          />
          <div className="banner-text">
            <h3>2025 아트페어</h3>
            <p>코엑스에서 즐기는 미술의 향연!</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
