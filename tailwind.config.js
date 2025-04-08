// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 이거 꼭 있어야 Tailwind 클래스 감지돼
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
