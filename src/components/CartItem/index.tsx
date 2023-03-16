import { Item } from "@/contexts/CartContext";
import Image from "next/image";
import { CartItemContainer, ImageContainer, ItemInfo } from "./styles";

interface CartItemProps {
  itemData: Item
}

export function CartItem({ itemData }: CartItemProps){
  return (
    <CartItemContainer>
      <ImageContainer>
        <Image src={itemData.imageUrl} width='94' height='94' alt=''/>
      </ImageContainer>
      <ItemInfo>
        <p>{itemData.name}</p>
        <h2>{itemData.price}</h2>
        <button>Remover</button>
      </ItemInfo>
    </CartItemContainer>
  )
}