import { addNewItemAction, removeItemAction } from "@/reducers/Cart/actions";
import { CartReducer } from "@/reducers/Cart/reducer";
import { createContext, ReactNode, useReducer } from "react";

export interface Item {
  id: string
  name: string
  imageUrl: string
  price: string
  priceId: string
  quantity: number
}

interface CartContextProps {
  items: Item[],
  addNewItemToCart: (newItem: Item) => void
  removeItemFromCart: (itemId: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, {
    items: []
  })

  const { items } = cartState

  function addNewItemToCart(newItem: Item) {
    dispatch(addNewItemAction(newItem))
  }

  function removeItemFromCart(itemId: string) {
    dispatch(removeItemAction(itemId))
  }

  return (
    <CartContext.Provider value={{ items, addNewItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  )
}