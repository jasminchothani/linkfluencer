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
      maxWidth: {
        // 1170: '1170px',
        // 95: '95%',
        containerxl: '1320px',
        containerxxl: '1720px',
        container1810: '1840px',
        container1920: '1920px'
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
        greendark: {
          greendark: 'var(--greendark)',
        },
        cultured: {
          cultured: 'var(--cultured)',
        },
        bluehover: {
          bluehover: 'var(--bluehover)',
        },
        bluepurple: {
          bluepurple: 'var(--bluepurple)',
        },
        ufogreen: {
          ufogreen: 'var(--ufogreen)',
        },
        paleviolet: {
          paleviolet: 'var(--paleviolet)',
        },
        greentwo: {
          greentwo: 'var(--greentwo)',
        },
        mediumspringgreen: {
          mediumspringgreen: 'var(--mediumspringgreen)',
        },
        valentinered: {
          valentinered: 'var(--valentinered)',
        },
        darkgreen: {
          darkgreen: 'var(--darkgreen)',
        },
        palegray: {
          palegray: 'var(--palegray)',
        },
        darkblue: {
          darkblue: 'var(--darkblue)',
        },
        whitesmoke: {
          whitesmoke: 'var(--whitesmoke)',
        },
        greenlight: {
          greenlight: 'var(--greenlight)',
        },
        midnightblue: {
          midnightblue: 'var(--midnightblue)',
        }
      },
      // backgroundColor: {
      //   before: 'var(--green)',
      // },
      padding: {
        py112: '112px 0',
        py16px100: '16px 100px'
      },
      fontSize: {
        llg: '96px',
        sixxl: '56px',
        threexl: '32px',
        fourxl: '40px',
        sixxltwo: '64px',
      },
      lineHeight: {
        lh120: '120px',
        lh108: '108px',
        lh96: '96px',
        lh76: '76px',
        lh67: '67.2px',
        lh48: '48px',
        lh38: '38.4px',
        lh21: '21.6px',
      },
      boxShadow: {
        customblackblue: '0px 8px 20px 0px var(--blackblue)',
        customblackdark: '0px 20px 24px -4px var(--blackdark)',
        customblue: '4px 0px 0px -1px var(--blue) inset',
      },
      gap: {
        columngap136: '136px',
      },
      screens: {
        mmd: '836px',
        llg: '1084px',
        xxl: '1500px',
        xxll: '1920px',
        ssm: '594px',
      },
      borderRadius: {
        rouundedllg: '10px',
      },
      backgroundPosition: {
        customposition: '90% 50%',
        custompositionedit: '96% 50%'
      },
    }
    ,
  },
  plugins: [require('tailwind-scrollbar')],
}