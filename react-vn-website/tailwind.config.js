/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideDown: 'slideDown 0.5s ease-out'
      },
      fontFamily: {
        title: ["Montserrat", "serif"],
      },
      colors: {
        cyan: {
          '50':  '#f7fafb',
          '100': '#e5f1fb',
          '200': '#c7ddf8',
          '300': '#9bbaec',
          '400': '#7093dd',
          '500': '#576ecf',
          '600': '#4752ba',
          '700': '#373d95',
          '800': '#06377f',
          '900': '#151941',
        },

        cerise: {
          '50':  '#fdfcfa',
          '100': '#fbf0ec',
          '200': '#f8cfd8',
          '300': '#eea2b1',
          '400': '#eb7288',
          '500': '#de4e65',
          '600': '#ff0000',
          '700': '#a02734',
          '800': '#731b22',
          '900': '#461113',
        },

        gray: {
          '50':  '#f8f9f8',
          '100': '#eaf5f7',
          '200': '#dbdae1',
          '300': '#b8b7c1',
          '400': '#90909d',
          '500': '#74707c',
          '600': '#5f5560',
          '700': '#494049',
          '800': '#332c34',
          '900': '#201c21',
        },
        
        navy: {
          '50':  '#f3f8f9',
          '100': '#daf0fa',
          '200': '#b0e0f5',
          '300': '#7ec1e6',
          '400': '#5ca0d9',
          '500': '#367dbf',
          '600': '#2e62a8',
          '700': '#264a86',
          '800': '#1c3260',
          '900': '#111f3f',
        },

        water: {
          '50': '#f3f7fb',
          '100': '#e5ecf4',
          '200': '#ceddec',
          '300': '#b0cae0',
          '400': '#8aadd0',
          '500': '#6e93c3',
          '600': '#5b7cb5',
          '700': '#506ba5',
          '800': '#455988',
          '900': '#3b4b6d',
          '950': '#283043',
        },
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      });
    }
  ],
}