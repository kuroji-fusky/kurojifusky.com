module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ["Noto Sans KR", 'system-ui', 'sans-serif'],
      body: ["Lato", 'system-ui', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1366px',
      '2xl': '1536px'
    },
    zIndex: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      'mosttop': '9999',
    },
    extend: {
      colors: {
        'royalblue': '#2076c5',
        // 'cyan': '#48ddf7',
        'lemon': '#fce392',
        'yellow': '#f8d817',
        'borahae': '#bb3eed',
        'borahae-alt': '#b266ed',
        'borahae-light': '#ffabff',
        'brown': '#6f3a0f',
      },
      borderRadius: {
        'sm': '.125rem',
        'md': '6px',
        'full': '50%',
      },
    },
  },
  plugins: [],
}
