import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";  // 배너 컴포넌트 임포트

function App() {
  return (
    <div className="App">
      <Header />
      <Banner /> {/* 배너 추가 */}
      <Footer />
    </div>
  );
}

export default App;
