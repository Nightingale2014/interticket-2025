import React from 'react';
import './Header.css'; // 헤더 CSS 파일
import searchIcon from '../assets/images/search-icon.png';  // 이미지 경로


function Header() {
  return (
    <header className="header">
      {/* 상단 메뉴 */}
      <div className="top-menu">
        {/* 로고와 텍스트 */}
        <div className="logo">
          <span>Interpark</span>
        </div>

        {/* 검색창 */}
        <div className="search-container">
          <input type="text" placeholder="이제 NOL 인터파크로 떠나요!" />
          <button>
            {/* 검색 아이콘 이미지 */}
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
          </button>
        </div>

        {/* 로그인, 회원가입 링크 */}
        <div className="auth-links">
          <a href="/login">로그인</a>
          <a href="/signup">회원가입</a>
        </div>
      </div>

      {/* 하단 메뉴 */}
      <div className="bottom-menu">
        <a href="/home">홈</a>
        <a href="/tour">투어</a>
        <a href="/ticket">티켓</a>
        <a href="/coupons">해외여행쿠폰</a>
        <a href="/domestic-coupons">국내여행쿠폰</a>
        <a href="/travel-benefits">여행혜택존</a>
        <a href="/travel-preparation">여행준비</a>
      </div>
    </header>
  );
}

export default Header;
