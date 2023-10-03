/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['html.html'],
  theme: {
    fontFamily:{
      inter:['Inter', 'sans-serif']
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
          '4xl':'10rem',
          '2,8xl': '2.8rem',
          '5xl':'12rem',
          '11px':'0.69rem',
          '8xl':'11rem',
        },
      },

      spacing:{
        'tp': '150px',
        'tp2': '40px',
        'tp3': '80px',
        'tp4': '100px',
        'lt': '200px',
        'lt2': '50px',
        'lt3': '5px',
        
      },
      fontFamily: {
        'bodyFont': ['Mulish', 'sans-serif']
      },
      colors: {
        'another-text': '#462e6a',
        
        custom:{
          '60-86-123': 'rgb(60, 86, 123)',
          '147-193-249': 'rgb(147, 193, 249)',
          '70-46-106': 'rgb(70, 46, 106)',
          '204-210-233':'rgb(204, 210, 233)',
          '#28CB8B':'rgb(40, 203, 139)',
          '#43A046':'rgb(67, 160, 70)',
          '#F5F7FA':'rgb(245, 247, 250)',
          '#263238':'rgb(38, 50, 56)',
          'ft':'rgb(229, 232, 235)',
        },
      },
    },
  },
  plugins: [],
  purge:{
    enabled: false,
  }
}
  
