tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'arapey': 'Arapey',
        'dmSans':'DM Sans',
        'quicksand' : 'Quicksand',
        'satisfy' : 'Satisfy',
        'cardo' : 'Cardo'
      },
      fontSize:{
        'ant': '0.5rem',
        'tiny': '0.6rem',
        'menu': '0.55rem',
        '5xl':['2.9rem', {
          lineHeight:'0.95'
        }]
      },
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'redBg':'#5B0005',
          'darkRedBg':'#1B0002',
          'redRSVP':'#510105',
          'yellowFont':'#FFC041',
          'orangeLine':'#BF7E00',
          'darkOrange':'#D18A00',
          'gold':'#D9A941',
          'menuIcon' : '#FFC041',
      },
      boxShadow: {
        'lightShadow':  '3px 3px 10px #3c0003,-3px -3px 10px #480003'
      },
      width: {
        '100': '28rem',
        '128': '32rem',
      },
      height: {
        '100': '28rem',
        '128': '32rem',
      },
      rotate: {
        '360': '360deg',
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        'reverse-spin-slow': 'reverseSpin 7s linear infinite',
        'bounce-slow': 'bounce 4s ease-in-out infinite',
        'up-down':'upDown 2s ease-in-out infinite' ,
        'up' : "up 3s  ease-in-out 1" ,
        'down' : "down 3s ease-in-out 1",
        'up-fast' : "up 2s  ease-in-out 1" ,
        'down-fast' : "down 2s ease-in-out 1"  

      },
      keyframes: {
        reverseSpin: {
          '0%': {transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        up:{
          '0%': {
            transform: 'translateY(100px)' },
          '100%': {
            transform: 'translateY(0)'},
        },
        down:{
          '0%': {
            transform: 'translateY(-100px)' },
          '100%': {
            transform: 'translateY(0)'},
        },
        upDown:
        {
         '0%':{top:'29%'},
        
         '100%':{top:'69%'}
        
        },
        bounceButton:{
          '0%':{transform: 'scale(0.9, 0.9)'
          },
           '100%':{transform: 'scale(1, 1)'}
      },
    }

    }
  }
}