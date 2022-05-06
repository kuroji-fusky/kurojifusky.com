module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Noto Sans KR", 'system-ui', 'sans-serif'],
      body: ["Lato", 'system-ui', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      max_md: { max: '767px' },
      lg: '1024px',
      xl: '1366px',
      '2xl': '1536px'
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   'white': "#fff",
    // },
    zIndex: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      'mosttop': '9999',
    },
    borderRadius: {
      'sm': '.125rem',
      'md': '6px',
      'full': '50%',
    },
    extend: {},
  },
  plugins: [],
}
