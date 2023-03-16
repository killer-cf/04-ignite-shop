import { Item } from "@/contexts/CartContext";

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM'
}

export function addNewItemAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: { newItem }
  }
}