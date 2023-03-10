import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$green500',
  padding: '4px 8px',
  borderRadius: 4
})

export default function Home() {
  return (
    <>
      <Button>Enviar</Button>
    </>
  )
}
