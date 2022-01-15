module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        
        'growth': {
          '0%': {
              opacity: '0',
              transform: 'scale(0)'
          },
          '100%': {
              opacity: '1',
              transform: 'scale(1)'
          }},
        
       'loading': {
          '50%': {
              transform: 'rotate(200deg)'
          },
          '75%': {
              transform: 'rotate(160deg)'
          },
          '100%': {
              transform: 'rotate(180deg)'
          }
        }
      },

      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'growth': 'growth 0.3s linear',
        'loading': 'loading 1s infinite',
      }, 
      boxShadow: {
        'custom': '0 0 20px 4px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/custom-forms'),
  ],
  darkMode: 'class',
}
