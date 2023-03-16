import { Item } from "@/contexts/CartContext";
import { ActionTypes } from "./actions";

import produce from "immer";

interface CartState {
  items: Item[]
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state,(draft)=> {
        draft.items.push(action.payload.newItem)
      })
  
    default:
      return state
  }
}