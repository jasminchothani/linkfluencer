// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        // 1170: '1170px',
        // 95: '95%',
        containerxl: '1320px', 
      },
      colors: {
        blue: {
          blue: 'var(--blue)',
        },
        green: {
          green: 'var(--green)',
        },
        white: {
          white: 'var(--white)',
        },
        lightgrey: {
          lightgrey: 'var(--lightgrey)',
        },
        offwhite: {
          offwhite: 'var(--offwhite)',
        },
        darksilver: {
          darksilver: 'var(--darksilver)',
        },
        cultured: {
          cultured: 'var(--cultured)',
        },
        greendark:{
          greendark: 'var(--greendark)',
        }
      },
      // backgroundColor: {
      //   before: 'var(--green)',
      // },
      padding: {
        py112: '112px 0',
      },
      fontSize: {
        llg: '96px',
        sixxl: '56px',
        threexl: '32px',
        fourxl: '40px',
        sixxltwo: '64px',
      },
      lineHeight: {
        lh: '108px',
        lh67: '67.2px',
        lh38: '38.4px',
        lh48: '48px',
        lh76: '76px',
      },
      boxShadow: {
       customblackblue: '0px 8px 20px 0px var(--blackblue)',
      },
      gap:{
        columngap136: '136px',
      },
      screens: {
        xxl: '1500px',
      },
    }
    ,
  },
  plugins: [],
}