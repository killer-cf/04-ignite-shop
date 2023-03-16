import { CartContext } from '@/contexts/CartContext';
import * as Dialog from '@radix-ui/react-dialog'
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { X } from 'phosphor-react'
import { useContext } from 'react';
import { CartItem } from '../CartItem'
import { BuyButton, CartItems, DialogClose, DialogContent, DialogTitle, DivFlex, ItemsInfo } from './styles'

export function CartModal() {
  const { items } = useContext(CartContext)

  const totalValue = items.reduce((total, item) => total += parseInt(item.price.replace(/[^0-9]/g,'')), 0)
  const total = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalValue / 100)

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
        
        <ScrollArea.Root className="ScrollAreaRoot">
          <ScrollArea.Viewport  className="ScrollAreaViewport">
            <CartItems>
              {items.map(item => (
                <CartItem key={item.id} itemData={item} />
              ))}
            </CartItems>
          </ScrollArea.Viewport>

          <ScrollArea.Scrollbar className="ScrollAreaScrollbar">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
          </ScrollArea.Scrollbar>

          <ScrollArea.Corner className="ScrollAreaCorner" />
        </ScrollArea.Root>
        
        <ItemsInfo>
          <DivFlex>
            <p>Quantidade</p>
            <span>{items.length} itens</span>
          </DivFlex>

          <DivFlex>
            <h3>Valor Total</h3>
            <h2>{total}</h2>
          </DivFlex>
        </ItemsInfo>

        <BuyButton disabled={items.length < 1}>
          Finalizar compra
        </BuyButton>
      </DialogContent>
    </Dialog.Portal>
  )
}