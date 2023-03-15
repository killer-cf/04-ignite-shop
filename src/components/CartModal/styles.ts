import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog'

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',

  top: 0,
  right: 0,
  width: '30rem',
  background: '$gray800',
  height: '100%',
  padding: '3rem',

  ".ScrollAreaRoot": {
    width: "100%",
    overflow: "hidden",
    "--scrollbar-size": "10px"
  },
  
  ".ScrollAreaViewport": {
    width: "100%",
    height: "100%",
    borderRadius: "inherit"
  },
  ".ScrollAreaScrollbar": {
    display: "flex",
    userSelect: "none",
    touchAction: "none",
    padding: "2px",
    background: "$gray800",
    transition: "background 2s ease-out",
  },

  ".ScrollAreaScrollbar:hover": { background: "$gray900" },

  ".ScrollAreaScrollbar[data-orientation='vertical']": {
    width: "var(--scrollbar-size)"
  },

  ".ScrollAreaThumb": {
    flex: 1,
    background: "$green500",
    borderRadius: "var(--scrollbar-size)",
    position: "relative",

    '&:hover': {
      background: "$green300",
      transition: "background 0.2s ease-out",
    }
  },

  ".ScrollAreaThumb::before": {
    content: "''",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: "44px",
    minHeight: "44px"
  },
  ".ScrollAreaCorner": { background: "$green500" }
}) 

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
})

export const DialogTitle = styled(Dialog.Title, {
  fontSize: '$xl',
  color: '$gray100',
  lineHeight: 1.6,
  margin: '1.5rem 0 2rem 0' 
})

export const CartItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: 1,

  
})

export const ItemsInfo = styled('div', {
  margin: '3.4375rem 0'
})

export const DivFlex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  p: {
    color: '$gray100',
    lineHeight: 1.6,
  },

  span: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
  },

  h3: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: 1.6,
  },

  h2: {
    color: '$gray100',
    fontSize: '$xl',
    lineHeight: 1.4,
  }
})

export const BuyButton = styled('button', {
  background: '$green500',
  height: '4.3125rem',
  padding: '1.25rem 2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  border: 0,
  borderRadius: 8,

  color: '$white',
  fontWeight: 'bold',
  fontSize: '$md',
  lineHeight: 1.6,

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  }
})
