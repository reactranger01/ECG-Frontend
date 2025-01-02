module.exports = {
  content: [
    './app/**/*.html',
    './app/components/**/*.js',
    './app/containers/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        10: '10px',
      },
      fontFamily: {
        josefin: ['Josefin', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        36: '36px',
        46: '46px',
        76: '76px',
      },
      colors: {
        primary: {
          100: '#FFCC0080',
          200: '#79A430',
          300: '#FFD70033',
          400: '#1BCE93',
          500: '#FFFFFF',
          600: '#ffffff14',
          700: '#F9B223',
          800: '#ECECEC',
          900: '#B1B1B5',
          1000: '#70798B',
          1100: '#2B3541',
          1200: '#1f5158',
        },
      },
      borderRadius: {
        20: '20px',
        10: '10px',
      },
    },
    screens: {
      sm1: '450px',
      sm: '	680px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1375px',
      '3xl': '1536px',
      xl2: '1100px',
      xl5: '1170px',
      xl3: '1400px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '3rem',
      },
    },
  },
};
