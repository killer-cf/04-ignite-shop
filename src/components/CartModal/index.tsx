import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { CartItem } from '../CartItem'
import { BuyButton, CartItems, DialogClose, DialogContent, DialogTitle, DivFlex, ItemsInfo } from './styles'

export function CartModal() {
  return (
    <Dialog.Portal>
      <DialogContent>
        <DialogTitle>
          Sacola de compras
        </DialogTitle>
        <DialogClose asChild>
          <button>
            <X size={32} weight='regular' color='#8D8D99' />
          </button>
        </DialogClose>

        <CartItems>
          <CartItem />
          <CartItem />
          <CartItem />
        </CartItems>

        <ItemsInfo>
          <DivFlex>
            <p>Quantidade</p>
            <span>3 itens</span>
          </DivFlex>

          <DivFlex>
            <h3>Valor Total</h3>
            <h2>R$ 270,00</h2>
          </DivFlex>
        </ItemsInfo>

        <BuyButton>
          Finalizar compra
        </BuyButton>
      </DialogContent>
    </Dialog.Portal>
  )
}