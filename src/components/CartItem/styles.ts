import { styled } from "@/styles";

export const CartItemContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  height: '5.875rem',
})

export const ImageContainer = styled('div', {
  width: '6.375rem',
  height: '5.8125rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const ItemInfo = styled('div', {
  p: {
    fontSize: '$md',
    color: '$gray400',
    lineHeight: 1.6,
    marginBottom: '0.25rem',
  },

  h2: {
    color: '$white',
    fontSize: '$md',
    lineHeight: 1.6,
    marginBottom: '0.5rem',
  },

  button: {
    border: 0,
    background: 'transparent',
    cursor: 'pointer',

    fontWeight: 'bold',
    color: '$green500',
    lineHeight: 1.6,

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  
    '&:not(:disabled):hover': {
      color: '$green300',
    }
  }
})