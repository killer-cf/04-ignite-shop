import { CartContext, Item } from "@/contexts/CartContext";
import Image from "next/image";
import { useContext } from "react";
import { CartItemContainer, ImageContainer, ItemInfo } from "./styles";

interface CartItemProps {
  itemData: Item
}

export function CartItem({ itemData }: CartItemProps){
  const { removeItemFromCart } = useContext(CartContext)

  function handleRemoveItemFromCart() {
    removeItemFromCart(itemData.id)
  }

  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={itemData.imageUrl} width='94' height='94' alt=''/>
      </ImageContainer>
      <ItemInfo>
        <p>{itemData.name}</p>
        <h2>{itemData.price}</h2>
        <button onClick={handleRemoveItemFromCart}>Remover</button>
      </ItemInfo>
    </CartItemContainer>
  )
}