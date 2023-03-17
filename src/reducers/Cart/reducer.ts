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

    case ActionTypes.REMOVE_ITEM: {
      const itemToRemove = state.items.findIndex(item=> item.id === action.payload.itemId)

      return produce(state, (draft) => {
        draft.items.splice(itemToRemove, 1)
      })
    }

    case ActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.items = []
      })
    }
  
    default:
      return state
  }
}