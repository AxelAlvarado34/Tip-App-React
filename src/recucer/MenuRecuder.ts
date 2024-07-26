import { ItemType, MenuItemsType } from "../types"

export type ActionsMenu = 
    {type: "add-menu", payload: {item: MenuItemsType}} |
    {type: "delete-item", payload: {id: ItemType['id']}} |
    {type: "reset-app"}

export type StateType = {
    order: ItemType[]
}

export const initialState : StateType = {
    order: []
}

export const menuReducer = (
        state: StateType = initialState,
        actions: ActionsMenu
    )=> {

        if (actions.type === "add-menu") {

            let orderUpdate : ItemType[] = [];

            const itemExist = state.order.some((item)=>{
                return item.id === actions.payload.item.id
            })


            if (itemExist) {
                orderUpdate = state.order.map((item)=> {
                    if (item.id === actions.payload.item.id) {
                        return{
                            ...item,
                            amount: item.amount + 1
                        }
                    }else{
                        return item;
                    }
                })
            }else{
                const newItem: ItemType = { ...actions.payload.item, amount: 1 }
                orderUpdate = [...state.order, newItem]
            }
            
            return{
                ...state, 
                order: orderUpdate
            }
        }

        if (actions.type === "delete-item") {
            
            const updateOrder = state.order.filter((item)=> {
                return item.id !== actions.payload.id;
            })

            return{
                ...state,
                order: updateOrder
            }
        }

        if (actions.type === "reset-app") {
            
            return{
                ...state,
                order: []
            }
        }

        return state;
} 