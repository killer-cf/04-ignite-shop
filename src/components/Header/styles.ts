import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',

  button: {
    backgroundColor: '$gray800',
    width: '3rem',
    height: '3rem',
    border: 0,
    borderRadius: 6,
    padding: '0.75rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '$gray400'
  },

  ".ball": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "1.6rem",
    right: "-0.65rem",
    position: "absolute",
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: "$green500",
    borderRadius: "100%",
    border: '3px solid $gray900',
    boxSizing: 'content-box',

    p: { 
      color: "$white", 
      fontSize: "0.875rem", 
      lineHeight: 0, 
      fontWeight: 700 
    }
  }
})
