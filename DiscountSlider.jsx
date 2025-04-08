// DiscountSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const discountData = [
    {
        title: "적벽",
        theater: "국립정동극장",
        date: "2025.3.13 ~ 4.20",
        discount: "30%",
        price: "49,000원",
        tag: "타임딜",
        dday: "D-2",
        img: "/images/jeokbyeok.png",
    },
    {
        title: "사내연애 보고서",
        theater: "대학로 제나아트홀",
        date: "2024.7.1 ~ 2025.4.30",
        discount: "80%",
        price: "11,900원",
        tag: "타임딜",
        dday: "D-2",
        img: "/images/love_report.png",
    },
    {
        title: "베를리너",
        theater: "대학로극장 쿼드",
        date: "2025.4.10 ~ 4.20",
        discount: "40%",
        price: "30,000원",
        tag: "타임딜",
        dday: "D-1",
        img: "/images/berliner.png",
    },
    {
        title: "돈 주앙",
        theater: "예술의전당 오페라극장",
        date: "2025.4.4 ~ 4.13",
        discount: "50%",
        price: "40,000원",
        tag: "파이널콜",
        dday: "D-6",
        img: "/images/donjuan.png",
    },
    {
        title: "킬링맥벌스",
        theater: "소극장 공유",
        date: "2025.4.1 ~ 4.13",
        discount: "50%",
        price: "15,000원",
        tag: "파이널콜",
        dday: "D-6",
        img: "/images/killingmacverse.png",
    },
];

const DiscountSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">🎟️ 지금 할인중!</h2>
            <Slider {...settings}>
                {discountData.map((item, idx) => (
                    <div key={idx} className="px-2">
                        <div className="bg-white shadow rounded-xl overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-full h-[300px] object-cover" />
                            <div className="p-2">
                                <div className="text-red-500 text-sm font-bold">{item.tag} {item.dday}</div>
                                <div className="font-semibold">{item.title}</div>
                                <div className="text-sm text-gray-600">{item.theater}</div>
                                <div className="text-sm text-gray-500">{item.date}</div>
                                <div className="text-pink-500 text-sm">{item.discount} <span className="text-black font-bold">{item.price}</span></div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DiscountSlider;
