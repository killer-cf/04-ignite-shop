import axios from "axios"
import { CartContext } from '@/contexts/CartContext';
import * as Dialog from '@radix-ui/react-dialog'
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { X } from 'phosphor-react'
import { useContext, useState } from 'react';
import { CartItem } from '../CartItem'
import { BuyButton, CartItems, DialogClose, DialogContent, DialogTitle, DivFlex, ItemsInfo } from './styles'

interface LineItemsData {
  price: string
  quantity: number
}

export function CartModal() {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)
  const { items } = useContext(CartContext)

  const totalValue = items.reduce((total, item) => total += parseInt(item.price.replace(/[^0-9]/g,'')), 0)
  const total = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalValue / 100)

  async function handleBuyProduct() {
    if (items.length < 1) return

    try {
      setIsCreatingCheckout(true)

      const lineItems: LineItemsData = items.reduce((acc: any, item) => {
        return acc = [...acc, { price: item.priceId, quantity: item.quantity}]
      }, [])

      const response = await axios.post('/api/checkout', { lineItems })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch (err) {
      setIsCreatingCheckout(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

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

        <BuyButton onClick={handleBuyProduct} disabled={items.length < 1 || isCreatingCheckout}>
          Finalizar compra
        </BuyButton>
      </DialogContent>
    </Dialog.Portal>
  )
}