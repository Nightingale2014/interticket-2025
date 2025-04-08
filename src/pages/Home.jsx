import React from "react";
import redwall from "../assets/images/redwall.jpg";
import officeLove from "../assets/images/officeLove.jpg";
import berliner from "../assets/images/berliner.jpg";
import donjuan from "../assets/images/donjuan.jpg";
import killing from "../assets/images/killing.jpg";

const discountedEvents = [
    {
        title: "적벽",
        date: "2025.3.13 ~ 4.20",
        location: "국립정동극장",
        discount: "30%",
        price: "49,000원",
        image: redwall,
        tag: "타임딜",
        dday: "D-2",
    },
    {
        title: "사내연애 보고서",
        date: "2024.7.1 ~ 2025.4.30",
        location: "대학로 제나아트홀",
        discount: "80%",
        price: "11,900원",
        image: officeLove,
        tag: "타임딜",
        dday: "D-2",
    },
    {
        title: "베를리너",
        date: "2025.4.10 ~ 4.20",
        location: "대학로극장 쿼드",
        discount: "40%",
        price: "30,000원",
        image: berliner,
        tag: "타임딜",
        dday: "D-1",
    },
    {
        title: "돈 주앙",
        date: "2025.4.4 ~ 4.13",
        location: "예술의전당 오페라극장",
        discount: "50%",
        price: "40,000원",
        image: donjuan,
        tag: "파이널콜",
        dday: "D-6",
    },
    {
        title: "킬링맥벌스",
        date: "2025.4.1 ~ 4.13",
        location: "소극장 공유",
        discount: "50%",
        price: "15,000원",
        image: killing,
        tag: "파이널콜",
        dday: "D-6",
    },
];

function Home() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-8 text-center">🎟️ 지금 할인중!</h2>

            {/* 카드 리스트 */}
            <div className="flex justify-center gap-6 flex-wrap">
                {discountedEvents.map((event, index) => (
                    <div
                        key={index}
                        className="w-48 bg-white rounded-xl shadow hover:shadow-lg transition p-2"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-64 object-cover rounded-lg mb-2"
                        />
                        <div className="text-xs font-bold text-white bg-red-500 px-1 inline-block rounded">
                            {event.tag}
                        </div>
                        <span className="text-red-500 text-xs ml-1">{event.dday}</span>
                        <h3 className="text-sm font-semibold mt-1">{event.title}</h3>
                        <p className="text-xs text-gray-600">{event.location}</p>
                        <p className="text-xs text-gray-500">{event.date}</p>
                        <p className="text-xs text-purple-600 mt-1">전석 할인</p>
                        <div className="flex justify-between items-center mt-1">
                            <span className="text-red-600 font-bold text-sm">{event.discount}</span>
                            <span className="text-black font-semibold text-sm">{event.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* 버튼 */}
            <div className="flex justify-center mt-8">
                <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-semibold hover:shadow transition">
                    할인티켓 전체보기 <span className="ml-2">▶</span>
                </button>
            </div>
        </div>
    );
}

export default Home;
