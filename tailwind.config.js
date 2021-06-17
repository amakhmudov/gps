module.exports = {
  purge: {
    enabled: false,
    content: ['dist/**/*.html', 'dist/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      spacing: {
        18: '4.5rem',
        112: '28rem'
      },
      maxWidth: {
        aside: '520px',
        media: '128px'
      },
      fontSize: {
        '2xs': '.6875rem', //11px
        '3xs': '.625rem', //10px
        base: '.9375rem', //15px
      },
      colors: {
        body:{
          DEFAULT: '#1b222b',
          light: '#69717e',
          accent: '#ff7f00'
        },

      },
    },
  },
  variants: {
    extend: {
      letterSpacing: ['hover', 'focus'],
    },
  },
  plugins: [],
};
