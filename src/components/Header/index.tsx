import { CartContext } from '@/contexts/CartContext'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { useContext } from 'react'
import logo from '../../assets/logo.png'
import { HeaderContainer } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { CartModal } from '../CartModal'

export function Header() {
  const { items } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Image src={logo} alt="" />
      <Dialog.Trigger asChild>
        <button>
          <Handbag size={24} weight='bold'/>
        </button>
      </Dialog.Trigger>
      
      {items.length > 0 && (
        <div className="ball">
          <p>{items.length}</p>
        </div>
        )}
      <CartModal />
    </HeaderContainer>
  )
}