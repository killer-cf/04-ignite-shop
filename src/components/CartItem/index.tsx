import { CartItemContainer, ImageContainer, ItemInfo } from "./styles";

export function CartItem(){
  return (
    <CartItemContainer>
      <ImageContainer>

      </ImageContainer>
      <ItemInfo>
        <p>Camiseta Beyond the Limits</p>
        <h2>R$ 79,90</h2>
        <button>Remover</button>
      </ItemInfo>
    </CartItemContainer>
  )
}