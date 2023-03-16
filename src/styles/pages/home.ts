import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
  position: 'relative',


  '.arrow': {
    width: 70,
    height: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    '-webkit-transform': 'translateY(-50%)',
    fill: '#fff',
    cursor: 'pointer',

    '&:hover polyline': {
      transition: 'all 0.2s ease-in-out',
      strokeWidth: 16,
    }
  },

  '.arrow--left': {
    left: 0,
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0) 100%)',
  },
  
  '.arrow--right': {
    left: 'auto',
    right: 0,
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
  },
  
  '.arrow--disabled': {
    display: 'none',
  }
})

export const ProductContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minWidth: 540,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      strong: {
        fontSize: '$lg',
        color: '$gray100',
        marginBottom: '0.25rem',
        lineHeight: '1.6'
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
        lineHeight: '1.4'
      },
    },

    button: {
      background: '$green500',
      padding: '0.75rem',
      borderRadius: 6,
      width: '3.5rem',
      heigth: '3.5rem',
      cursor: 'pointer',
      border: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      svg: {
        color: '$gray100'
      },

      '&:hover': {
        background: '$green300',
        transition: 'background 0.2s'
      }
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})