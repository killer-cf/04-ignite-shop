import { Header } from '@/components/Header'
import { CartContextProvider } from '@/contexts/CartContext'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'
import * as Dialog from '@radix-ui/react-dialog'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Dialog.Root>
          <Header />        
          <Component {...pageProps} />
        </Dialog.Root>
      </CartContextProvider>
    </Container>)
}
